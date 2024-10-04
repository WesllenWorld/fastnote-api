import { isUUID, validate } from "class-validator"
import { CreateNoteDTO } from "../dtos/create-note-dto"
import { Note } from "../entities/note"
import { Tag } from "../entities/tag"
import * as notesRepository from "../repositories/notes-repository"
import * as userRepository from "../repositories/user-repository"
import * as tagRepository from "../repositories/tag-repository"
import * as httpResponse from "../utils/http-helper"
import { NoteDTO } from "../dtos/note-dto"

export const getAllNotesByUserIdService = async (userId: string) => {
    let responseToController = null

    if (!isUUID(userId)) {
        responseToController = await httpResponse.badRequest('Invalid user UUID provided')
    } else {
        const data = await notesRepository.getAllNotesByUserIdRepository(userId)
        const notesDTOs = data.map(note => new NoteDTO(note.id, note.content, note.tags.map(tag => tag.id)))
        responseToController = await httpResponse.ok(notesDTOs)
    }
    return responseToController
}

export const getNoteByUserIdService = async (userId: string, noteId: string) => {
    let responseToController = null

    if (!isUUID(noteId)) {
        responseToController = await httpResponse.badRequest('Invalid note UUID provided')
    }
    else if (!isUUID(userId)) {
        responseToController = await httpResponse.badRequest('Invalid user UUID provided')
    } else {
        const data = await notesRepository.getNoteByUserIdRepository(userId, noteId)

        if (!data) {
            responseToController = await httpResponse.notFound('Note not found');
        } else {
            const noteDTO = new NoteDTO(data.id, data.content, data.tags.map(tag => tag.id));
            responseToController = await httpResponse.ok(noteDTO);
        }
    }
    
    return responseToController
}

export const postNoteService = async (userId: string, newNoteDTO: CreateNoteDTO) => {
    let responseToController = null

    if (!isUUID(userId)) {
        responseToController = await httpResponse.badRequest('Invalid user UUID provided')
    } else {

        const validationErrors = await validate(newNoteDTO)

        if (validationErrors.length > 0) {
            const errorMessages = validationErrors.flatMap((error) => {
                // Return first error message of each constraint
                return error.constraints ? Object.values(error.constraints) : []
            });

            responseToController = await httpResponse.badRequest(errorMessages)
        } else {
            const existingUser = await userRepository.getUserByIdRepository(userId)
            if (!existingUser) {
                responseToController = await httpResponse.notFound("User not found")
            } else {
                let tags: Tag[] = [];
                if (newNoteDTO.tags.length > 0) {
                    // Busca as tags com base no userId e nos tagIds passados
                    tags = await tagRepository.getTagsByUserIdAndTagIdsRepository(newNoteDTO.userId, newNoteDTO.tags);

                    const foundTagIds = tags.map(tag => tag.id);
                    const missingTags = newNoteDTO.tags.filter(tagId => !foundTagIds.includes(tagId));

                    if (missingTags.length > 0) {
                        responseToController = await httpResponse.notFound(`Tags with the following IDs were not found: ${missingTags.join(', ')}`);
                    }
                }

                if (!responseToController) {
                    const newNote = new Note(newNoteDTO.content, tags, existingUser)
                    await notesRepository.postNoteRepository(newNote)
                    responseToController = await httpResponse.created("Note created successfully")
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