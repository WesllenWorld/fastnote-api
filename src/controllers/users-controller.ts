import { Request, Response } from "express"
import * as usersServices from '../services/users-services'
import { CreateUserDTO } from "../dtos/create-user-dto"


export const getUserByIdController = async (request: Request, response: Response) => {
    const userId = request.params.userId
    const httpResponse = await usersServices.getUserByIdService(userId)
    response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postUserController = async (request: Request, response: Response) => {
    const newUser = new CreateUserDTO(request.body.name, request.body.email, request.body.password)
    const httpResponse = await usersServices.postUserService(newUser)
    response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const deleteUserByIdController = async (request: Request, response: Response) => {
    const userId = request.params.userId
    const httpResponse = await usersServices.deleteUserByIdService(userId)
    response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updateUserController = async (request: Request, response: Response) => {
    const userId = request.params.userId
    const updatedUser = new CreateUserDTO(request.body.name, request.body.email, request.body.password)
    const httpResponse = await usersServices.updateUserService(userId, updatedUser)
    response.status(httpResponse.statusCode).json(httpResponse.body)
}