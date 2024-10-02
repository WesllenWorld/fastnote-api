import { Request, Response } from "express"
import * as usersServices from '../services/users-services'
import { CreateUserDTO } from "../dtos/create-user-dto"


export const getUsers = async (request:Request, response:Response) => {
    
}

export const getUserByUserId = async (request:Request, response:Response) => {
    
}

export const getUserById = async (request:Request, response:Response) => {
    
}

export const postUserController = async (request:Request, response:Response) => {
    const newUser = new CreateUserDTO(request.body.name, request.body.email, request.body.password)
    const httpResponse = await usersServices.postUserService(newUser)

    if (httpResponse) {
        response.status(httpResponse.statusCode).json(httpResponse.body)
    } 
}

export const deleteUser = async (request:Request, response:Response) => {
    
}

export const updateUser = async (request:Request, response:Response) => {
    
}