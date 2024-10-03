import { validate } from "class-validator"
import { CreateTagDTO } from "../dtos/create-tag-dto"
import { Tag } from "../entities/tag"
import * as userRepository from "../repositories/user-repository"
import * as tagRepository from "../repositories/tag-repository"
import * as httpresponseToController from "../utils/http-helper"



export const getTagsByUserService = async () => {
    /*
    const data = await notesRepository.findNotes()
    let responseToController = null

    if (!data) {
        responseToController = await httpresponseToController.noContent()
    } else {
        responseToController = await httpresponseToController.ok(data)
    }

    return responseToController*/
}

export const getTagByIdService = async (id: string) => {
    /*const data = await notesRepository.findNoteById(id)
    let responseToController = null

    if (!data) {
        responseToController = await httpresponseToController.noContent()
    } else {
        responseToController = await httpresponseToController.ok(data)
    }

    return responseToController*/
}

export const postTagService = async (userId: string, newTagDTO: CreateTagDTO) => {
    let responseToController = null

    const validationErrors = await validate(newTagDTO)

    if (validationErrors.length > 0) {
        responseToController = await httpresponseToController.badRequest('Invalid data provided')
    } else {
        const existingUser = await userRepository.getUserById(userId)
        if (!existingUser) {
            responseToController = await httpresponseToController.notFound('User not found')
        } else {

            const tagExists = await tagRepository.getTagByUserIdAndName(userId, newTagDTO.name)
            if (tagExists) {
                responseToController = await httpresponseToController.conflict('Tag already exists')
            } else {
                const tag = new Tag(newTagDTO.name, newTagDTO.color, existingUser)
                await tagRepository.postTag(tag)
                responseToController = await httpresponseToController.created('Tag created successfully')
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
        responseToController = await httpresponseToController.noContent()
    } else {
        playersRepository.deletePlayer(id)
        responseToController = await httpresponseToController.ok('Successfully deleted')
    }
    return responseToController
}

export const updatePlayerService = async (id: number, bodyValue: StatisticsModel) => {
    let responseToController = null
    const data = await playersRepository.findPlayerById(id)

    if (Object.keys(bodyValue).length === 0) {
        responseToController = await httpresponseToController.badRequest()
    } else if (!data) {
        responseToController = await httpresponseToController.noContent()
    } else {
        const updatedPlayer = await playersRepository.findAndUpdatePlayer(id, bodyValue)
        responseToController = await httpresponseToController.ok(updatedPlayer)
    }

    return responseToController
}*/