import { Request, Response } from "express"
import * as tagsService from '../services/tags-services'
import { CreateTagDTO } from "../dtos/create-tag-dto"


export const getAllTagsByUserIdController = async (request: Request, response: Response) => {
    const userId = request.params.userId
    const httpResponse = await tagsService.getAllTagsByUserIdService(userId)
    return response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getTagByUserIdController = async (request: Request, response: Response) => {
    const userId = request.params.userId
    const tagId = request.params.tagId
    const httpResponse = await tagsService.getTagByUserIdService(userId, tagId)
    return response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getTagByUserIdAndTagNameController = async (request: Request, response: Response) => {
    const userId = request.params.userId
    const tagName = request.params.tagName
    const httpResponse = await tagsService.getTagByUserIdAndTagNameService(userId, tagName)
    return response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getTagsByUserIdAndColorController = async (request: Request, response: Response) => {
    const userId = request.params.userId
    const tagColor = request.params.tagColor
    const httpResponse = await tagsService.getTagsByUserIdAndColorService(userId, tagColor)
    return response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postTagController = async (request: Request, response: Response) => {
    const userId = request.params.userId
    const newTagDTO = new CreateTagDTO(request.body.name, request.body.color, request.body.userId)
    const httpResponse = await tagsService.postTagService(userId, newTagDTO)
    response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const deleteTagByIdController = async (request: Request, response: Response) => {
    const userId = request.params.userId
    const tagId = request.params.tagId
    const httpResponse = await tagsService.deleteTagByIdService(userId, tagId)
    return response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updateTagController = async (request: Request, response: Response) => {
    const userId = request.params.userId
    const tagId = request.params.tagId
    const updatedTagDTO = new CreateTagDTO(request.body.name, request.body.color, request.body.userId)
    const httpResponse = await tagsService.updateTagService(userId, tagId, updatedTagDTO)
    return response.status(httpResponse.statusCode).json(httpResponse.body)
}