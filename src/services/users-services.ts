import { validate } from "class-validator"
import { CreateUserDTO } from "../dtos/create-user-dto"
import { User } from "../entities/user"
import * as userRepository from "../repositories/user-repository"
import * as httpResponse from "../utils/http-helper"
import * as bcrypt from "bcrypt"


export const getUsersService = async () => {
    const data = await userRepository.getAllUsers()
    let response = null

    if (!data) {
        response = await httpResponse.noContent()
    } else {
        response = await httpResponse.ok(data)
    }

    return response
}

export const getUserByIdService = async (userId: string) => {
    const data = await userRepository.getUserById(userId)
    let response = null

    if (!data) {
        response = await httpResponse.noContent()
    } else {
        response = await httpResponse.ok(data)
    }

    return response
}

export const postUserService = async (newUserDTO: CreateUserDTO) => {
    let responseToController = null

    //verificar se o objeto está vazio
    //validar se o email é único
    //seguir para o repository

    const validationErrors = await validate(newUserDTO)

    if (validationErrors.length > 0) {
        responseToController = await httpResponse.badRequest('Invalid data provided')
    }

    const existingUser = await userRepository.getUserByEmail(newUserDTO.email)

    if (existingUser) {
        responseToController = await httpResponse.conflict("Email already exists")
    } else {
        //rounds for computational cost (and security)
        const saltRounds = 10
        const newUser = new User(newUserDTO.name, newUserDTO.email, await bcrypt.hash(newUserDTO.password, saltRounds))
        await userRepository.postUser(newUser)
        responseToController = await httpResponse.created("User created successfully")
    }
    return responseToController


    /*
async function createUser(newUserData: User) {
    const newUser = plainToClass(CreateUserDTO, newUserData);

    const validationErrors = await validate(newUser);
    if (validationErrors.length > 0) {
        return httpResponse.badRequest('Validation failed', validationErrors);
    }

    // Prossiga para salvar o usuário
    await userRepository.postUser(newUser);
    return httpResponse.success('User created successfully');
}


    if (Object.keys(newPlayer).length === 0) {
        response = await httpResponse.badRequest()
    } else {
        const data = await playersRepository.findPlayerById(newPlayer.id)

        if (data) {
            response = await httpResponse.conflict()
        } else {
            await playersRepository.addPlayer(newPlayer)
            response = await httpResponse.created()
        }
    }
    return response*/
}

/*
export const deletePlayerService = async (id: number) => {
    let response = null

    const data = await playersRepository.findPlayerById(id)
    if (!data) {
        response = await httpResponse.noContent()
    } else {
        playersRepository.deletePlayer(id)
        response = await httpResponse.ok('Successfully deleted')
    }
    return response
}

export const updatePlayerService = async (id: number, bodyValue: StatisticsModel) => {
    let response = null
    const data = await playersRepository.findPlayerById(id)

    if (Object.keys(bodyValue).length === 0) {
        response = await httpResponse.badRequest()
    } else if (!data) {
        response = await httpResponse.noContent()
    } else {
        const updatedPlayer = await playersRepository.findAndUpdatePlayer(id, bodyValue)
        response = await httpResponse.ok(updatedPlayer)
    }

    return response
}*/