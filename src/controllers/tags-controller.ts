import { Request, Response } from "express"
import * as tagsService from '../services/tags-services'
import { CreateTagDTO } from "../dtos/create-tag-dto"


export const getAllTagsByUserIdController = async (request: Request, response: Response) => {

}

export const getTagByUserIdController = async (request: Request, response: Response) => {

}

export const getTagByIdController = async (request: Request, response: Response) => {

}

export const postTagController = async (request: Request, response: Response) => {
    const userId = request.params.userId
    const newTagDTO = new CreateTagDTO(request.body.name, request.body.color, request.body.userId)
    const httpResponse = await tagsService.postTagService(userId, newTagDTO)

    if (httpResponse) {
        response.status(httpResponse.statusCode).json(httpResponse.body)
    }
}

export const deleteTagByIdController = async (request: Request, response: Response) => {

}

export const updateTagController = async (request: Request, response: Response) => {

}