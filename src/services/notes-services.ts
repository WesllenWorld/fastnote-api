import { validate } from "class-validator"
import { CreateNoteDTO } from "../dtos/create-note-dto"
import { Note } from "../entities/note"
import { Tag } from "../entities/tag"
import * as notesRepository from "../repositories/notes-repository"
import * as userRepository from "../repositories/user-repository"
import * as tagRepository from "../repositories/tag-repository"
import * as httpResponse from "../utils/http-helper"



export const getNotesService = async () => {
    const data = await notesRepository.findAllNotes()
    let response = null

    if (!data) {
        response = await httpResponse.noContent()
    } else {
        response = await httpResponse.ok(data)
    }

    return response
}

export const getNotesByUserService = async (userId: string) => {
    const data = await notesRepository.findNotesByUser(userId)
    let response = null

    if (!data) {
        response = await httpResponse.noContent()
    } else {
        response = await httpResponse.ok(data)
    }

    return response
}

export const getNoteByIdService = async (id: string) => {
    const data = await notesRepository.findNotesByUser(id)
    let response = null

    if (!data) {
        response = await httpResponse.noContent()
    } else {
        response = await httpResponse.ok(data)
    }

    return response
}

export const postNoteService = async (userId: string, newNoteDTO: CreateNoteDTO) => {
    let responseToController = null

    const validationErrors = await validate(newNoteDTO)

    if (validationErrors.length > 0) {
        responseToController = await httpResponse.badRequest('Invalid data provided')
    } else {
        const existingUser = await userRepository.getUserById(userId)
        if (!existingUser) {
            responseToController = await httpResponse.notFound("User not found")
        } else {
            let tags: Tag[]
            if (newNoteDTO.tags.length === 0) {
                tags = []                
            } else {
                //validar tags
                tags = await tagRepository.getAllTagsByUserId(newNoteDTO.userId)
                tags = tags.filter(tag => newNoteDTO.tags.includes(tag.id))

                const foundTagIds = tags.map(tag => tag.id);
                const missingTags = newNoteDTO.tags.filter(tagId => !foundTagIds.includes(tagId));

                if (missingTags.length > 0) {
                    responseToController = await httpResponse.notFound(`Tags with the following IDs were not found: ${missingTags.join(', ')}`);
                }
            }

            if (!responseToController) {
                const newNote = new Note(newNoteDTO.content, tags, existingUser)
                await notesRepository.postNote(newNote)
                responseToController = await httpResponse.created("Note created successfully")
            }

        }

    }
    return responseToController
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