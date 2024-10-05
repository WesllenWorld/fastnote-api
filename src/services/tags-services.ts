import { isUUID, validate } from "class-validator"
import { CreateTagDTO } from "../dtos/create-tag-dto"
import { Tag } from "../entities/tag"
import * as userRepository from "../repositories/user-repository"
import * as tagRepository from "../repositories/tag-repository"
import * as httpResponse from "../utils/http-helper"
import { TagDTO } from "../dtos/tag-dto"

export const getAllTagsByUserIdService = async (userId: string) => {
    let responseToController = null

    if (!isUUID(userId)) {
        responseToController = await httpResponse.badRequest('Invalid user UUID provided')
    } else {
        const tags = await tagRepository.getAllTagsByUserIdRepository(userId)
        const tagsDTOs = tags.map(tag => new TagDTO(tag.id, tag.name, tag.color))
        responseToController = await httpResponse.ok(tagsDTOs)
    }
    return responseToController
}

export const getTagByUserIdService = async (userId: string, tagId: string) => {
    let responseToController = null

    if (!isUUID(tagId)) {
        responseToController = await httpResponse.badRequest('Invalid tag UUID provided')
    } else if (!isUUID(userId)) {
        responseToController = await httpResponse.badRequest('Invalid user UUID provided')
    } else {
        const tag = await tagRepository.getTagByUserIdRepository(userId, tagId)
        if (!tag) {
            responseToController = await httpResponse.notFound('Tag not found')
        } else {
            const tagDTO = new TagDTO(tag.id, tag.name, tag.color)
            responseToController = await httpResponse.ok(tagDTO)
        }
    }
    return responseToController
}

export const getTagByUserIdAndTagNameService = async (userId: string, tagName: string) => {
    let responseToController = null

    if (!isUUID(userId)) {
        responseToController = await httpResponse.badRequest('Invalid user UUID provided')
    } else if (!tagName || tagName.trim().length === 0) {
        responseToController = await httpResponse.badRequest('Tag name cannot be empty');
    } else {
        const tag = await tagRepository.getTagByUserIdAndTagNameRepository(userId, tagName)
        if (!tag) {
            responseToController = await httpResponse.notFound('Tag not found')
        } else {
            const tagDTO = new TagDTO(tag.id, tag.name, tag.color)
            responseToController = await httpResponse.ok(tagDTO)
        }
    }
    return responseToController
}

export const getTagsByUserIdAndColorService = async (userId: string, tagColor: string) => {
    let responseToController = null

    if (!isUUID(userId)) {
        responseToController = await httpResponse.badRequest('Invalid user UUID provided')
    } else if (!tagColor || tagColor.trim().length === 0) {
        responseToController = await httpResponse.badRequest('Tag color cannot be empty');
    } else if (!/^[0-9A-Fa-f]{6}$/.test(tagColor)) {
        responseToController = await httpResponse.badRequest('Tag color must be a valid hexadecimal color code');
    } else {
        const tags = await tagRepository.getTagsByUserIdAndColorRepository(userId, tagColor)

        const tagsDTOs = tags.map(tag => new TagDTO(tag.id, tag.name, tag.color))
        responseToController = await httpResponse.ok(tagsDTOs)
    }
    return responseToController
}

export const postTagService = async (userId: string, newTagDTO: CreateTagDTO) => {
    let responseToController = null

    if (!isUUID(userId)) {
        responseToController = await httpResponse.badRequest('Invalid user UUID provided')
    } else {

        const validationErrors = await validate(newTagDTO)

        if (validationErrors.length > 0) {
            const errorMessages = validationErrors.flatMap((error) => {
                // Return first error message of each constraint
                return error.constraints ? Object.values(error.constraints) : []
            });

            responseToController = await httpResponse.badRequest(errorMessages)
        } else {
            const existingUser = await userRepository.getUserByIdRepository(userId)
            if (!existingUser) {
                responseToController = await httpResponse.notFound('User not found')
            } else {

                const tagExists = await tagRepository.getTagByUserIdAndTagNameRepository(userId, newTagDTO.name)
                if (tagExists) {
                    responseToController = await httpResponse.conflict(`Tag ${tagExists.name} already exists`)
                } else {
                    const tag = new Tag(newTagDTO.name, newTagDTO.color, existingUser)
                    await tagRepository.postTagRepository(tag)
                    responseToController = await httpResponse.created('Tag created successfully')
                }
            }
        }

    }
    return responseToController
}

/*
export const deletePlayerService = async (id: number) => {
    let responseToController = null

    const data = await playersRepository.findPlayerById(id)
    if (!data) {
        responseToController = await httpResponse.noContent()
    } else {
        playersRepository.deletePlayer(id)
        responseToController = await httpResponse.ok('Successfully deleted')
    }
    return responseToController
}

export const updatePlayerService = async (id: number, bodyValue: StatisticsModel) => {
    let responseToController = null
    const data = await playersRepository.findPlayerById(id)

    if (Object.keys(bodyValue).length === 0) {
        responseToController = await httpResponse.badRequest()
    } else if (!data) {
        responseToController = await httpResponse.noContent()
    } else {
        const updatedPlayer = await playersRepository.findAndUpdatePlayer(id, bodyValue)
        responseToController = await httpResponse.ok(updatedPlayer)
    }

    return responseToController
}*/