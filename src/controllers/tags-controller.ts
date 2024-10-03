import { Request, Response } from "express"
import * as tagsService from '../services/tags-services'
import { CreateTagDTO } from "../dtos/create-tag-dto"

export const getTags = async (request: Request, response: Response) => {

}

export const getTagByUserId = async (request: Request, response: Response) => {

}

export const getTagById = async (request: Request, response: Response) => {

}

export const postTag = async (request: Request, response: Response) => {
    const userId = request.params.userId
    const newTagDTO = new CreateTagDTO(request.body.name, request.body.color, request.body.userId)
    const httpResponse = await tagsService.postTagService(userId, newTagDTO)

    if (httpResponse) {
        response.status(httpResponse.statusCode).json(httpResponse.body)
    }
}

export const deleteTag = async (request: Request, response: Response) => {

}

export const updateTag = async (request: Request, response: Response) => {

}