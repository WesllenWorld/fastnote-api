import { isUUID, validate } from "class-validator"
import { CreateUserDTO } from "../dtos/create-user-dto"
import { User } from "../entities/user"
import * as userRepository from "../repositories/user-repository"
import * as httpResponse from "../utils/http-helper"
import * as bcrypt from "bcrypt"
import { UserDTO } from "../dtos/user-dto"

export const getUserByIdService = async (userId: string) => {
    let responseToController = null
    if (!isUUID(userId)) {
        responseToController = await httpResponse.badRequest('Invalid user UUID provided')
    } else {
        const user = await userRepository.getUserByIdRepository(userId)
        if (!user) {
            responseToController = await httpResponse.notFound('User not found')
        } else {
            const userDTO = new UserDTO(user.id, user.name, user.email)
            responseToController = await httpResponse.ok(userDTO)
        }
    }
    return responseToController
}

export const postUserService = async (newUserDTO: CreateUserDTO) => {
    let responseToController = null

    const validationErrors = await validate(newUserDTO)

    if (validationErrors.length > 0) {
        const errorMessages = validationErrors.flatMap((error) => {
            // Return first error message of each constraint
            return error.constraints ? Object.values(error.constraints) : []
        });

        responseToController = await httpResponse.badRequest(errorMessages)
    } else {
        if (validationErrors.length > 0) {
            responseToController = await httpResponse.badRequest('Invalid data provided')
        } else {
            const existingUser = await userRepository.getUserByEmailRepository(newUserDTO.email)

            if (existingUser) {
                responseToController = await httpResponse.conflict("Email already exists")
            } else {
                //rounds for computational cost (and security)
                const saltRounds = 10
                const newUser = new User(newUserDTO.name, newUserDTO.email, await bcrypt.hash(newUserDTO.password, saltRounds))
                await userRepository.postUserRepository(newUser)
                responseToController = await httpResponse.created("User created successfully")
            }
        }
    }
    return responseToController
}


export const deleteUserByIdService = async (userId: string) => {
    let responseToController = null

    if (!isUUID(userId)) {
        responseToController = await httpResponse.badRequest('Invalid user UUID provided')
    } else {
        const user = await userRepository.getUserByIdRepository(userId)
        if (!user) {
            responseToController = await httpResponse.notFound('User not found')
        } else {
            await userRepository.deleteUserByIdRepository(userId)
            responseToController = await httpResponse.ok('User deleted successfully')
        }
    }
    return responseToController
}

export const updateUserService = async (userId: string, updatedUserDTO: CreateUserDTO) => {
    let responseToController = null

    if (!isUUID(userId)) {
        responseToController = await httpResponse.badRequest('Invalid user UUID provided')
    } else {
        const validationErrors = await validate(updatedUserDTO)

        if (validationErrors.length > 0) {
            const errorMessages = validationErrors.flatMap((error) => {
                // Return first error message of each constraint
                return error.constraints ? Object.values(error.constraints) : []
            })

            responseToController = await httpResponse.badRequest(errorMessages)
        } else {
            const user = await userRepository.getUserByIdRepository(userId)
            if (!user) {
                responseToController = await httpResponse.notFound('User not found')
            } else {
                const existingUser = await userRepository.getUserByEmailRepository(updatedUserDTO.email)
                if (existingUser && existingUser.id != userId) {
                    responseToController = await httpResponse.conflict('Email already exists')
                } else {
                    user.name = updatedUserDTO.name
                    user.email = updatedUserDTO.email
                    user.password = await bcrypt.hash(updatedUserDTO.password, 10)
                    await userRepository.updateUserRepository(user)
                    responseToController = await httpResponse.noContent()
                }
            }
        }
    }
    return responseToController
}