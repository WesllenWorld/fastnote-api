import { isUUID, validate } from "class-validator"
import { CreateNoteDTO } from "../dtos/create-note-dto"
import { Note } from "../entities/note"
import { Tag } from "../entities/tag"
import * as notesRepository from "../repositories/notes-repository"
import * as userRepository from "../repositories/user-repository"
import * as tagRepository from "../repositories/tag-repository"
import * as httpResponse from "../utils/http-helper"
import { NoteDTO } from "../dtos/note-dto"
import { TagDTO } from "../dtos/tag-dto"

export const getAllNotesByUserIdService = async (userId: string) => {
    let responseToController = null

    if (!isUUID(userId)) {
        responseToController = await httpResponse.badRequest('Invalid user UUID provided')
    } else {
        const notes = await notesRepository.getAllNotesByUserIdRepository(userId)
        const notesDTOs = notes.map(note => new NoteDTO(note.id, note.content, note.tags.map(tag => tag.id)))
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
        const note = await notesRepository.getNoteByUserIdRepository(userId, noteId)

        if (!note) {
            responseToController = await httpResponse.notFound('Note not found')
        } else {
            const noteDTO = new NoteDTO(note.id, note.content, note.tags.map(tag => tag.id));
            responseToController = await httpResponse.ok(noteDTO)
        }
    }
    return responseToController
}

export const getTagsByNoteIdService = async (userId: string, noteId: string) => {
    let responseToController = null

    if (!isUUID(noteId)) {
        responseToController = await httpResponse.badRequest('Invalid note UUID provided')
    }
    else if (!isUUID(userId)) {
        responseToController = await httpResponse.badRequest('Invalid user UUID provided')
    } else {
        const note = await notesRepository.getTagsByNoteIdRepository(userId, noteId)

        if (!note) {
            responseToController = await httpResponse.notFound('Note not found');
        }
        else {
            const tagsDTO = note.tags.map(tag => new TagDTO(tag.id, tag.name, tag.color))
            responseToController = await httpResponse.ok(tagsDTO)
        }
    }
    return responseToController
}

export const getNotesByTagIdService = async (userId: string, tagId: string) => {
    let responseToController = null

    if (!isUUID(tagId)) {
        responseToController = await httpResponse.badRequest('Invalid tag UUID provided')
    }
    else if (!isUUID(userId)) {
        responseToController = await httpResponse.badRequest('Invalid user UUID provided')
    } else {
        const notes = await notesRepository.getNotesByTagIdRepository(userId, tagId)

        const notesDTOs = notes.map(note => new NoteDTO(note.id, note.content, note.tags.map(tag => tag.id)));
        responseToController = await httpResponse.ok(notesDTOs);

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
            })

            responseToController = await httpResponse.badRequest(errorMessages)
        } else {
            const existingUser = await userRepository.getUserByIdRepository(userId)
            if (!existingUser) {
                responseToController = await httpResponse.notFound("User not found")
            } else {
                let tags: Tag[] = []
                if (newNoteDTO.tags.length > 0) {
                    // Busca as tags com base no userId e nos tagIds passados
                    tags = await tagRepository.getTagsByUserAndTagIdRepository(newNoteDTO.userId, newNoteDTO.tags)

                    const foundTagIds = tags.map(tag => tag.id)
                    const missingTags = newNoteDTO.tags.filter(tagId => !foundTagIds.includes(tagId))

                    if (missingTags.length > 0) {
                        responseToController = await httpResponse.notFound(`Tags with the following IDs were not found: ${missingTags.join(', ')}`)
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


export const deleteNoteByIdService = async (userId: string, noteId: string) => {
    let responseToController = null

    if (!isUUID(noteId)) {
        responseToController = await httpResponse.badRequest('Invalid note UUID provided')
    }
    else if (!isUUID(userId)) {
        responseToController = await httpResponse.badRequest('Invalid user UUID provided')
    } else {
        const note = await notesRepository.getNoteByUserIdRepository(userId, noteId)
        if (!note) {
            responseToController = await httpResponse.notFound('Note not found')
        } else {
            notesRepository.deleteNoteByIdRepository(userId, noteId)
            responseToController = await httpResponse.ok('Note successfully deleted')
        }
    }
    return responseToController
}

export const updateNoteService = async (userId: string, noteId: string, updatedNoteDTO: CreateNoteDTO) => {
    let responseToController = null

    if (!isUUID(noteId)) {
        responseToController = await httpResponse.badRequest('Invalid note UUID provided')
    }
    else if (!isUUID(userId)) {
        responseToController = await httpResponse.badRequest('Invalid user UUID provided')
    } else {

        const validationErrors = await validate(updatedNoteDTO)

        if (validationErrors.length > 0) {
            const errorMessages = validationErrors.flatMap((error) => {
                // Return first error message of each constraint
                return error.constraints ? Object.values(error.constraints) : []
            })

            responseToController = await httpResponse.badRequest(errorMessages)
        } else {
            const note = await notesRepository.getNoteByUserIdRepository(userId, noteId)
            if (!note) {
                responseToController = await httpResponse.notFound('Note not found')
            } else {

                let tags: Tag[] = []
                if (updatedNoteDTO.tags.length > 0) {
                    // Busca as tags com base no userId e nos tagIds passados
                    tags = await tagRepository.getTagsByUserAndTagIdRepository(userId, updatedNoteDTO.tags);

                    const foundTagIds = tags.map(tag => tag.id);
                    const missingTags = updatedNoteDTO.tags.filter(tagId => !foundTagIds.includes(tagId));

                    if (missingTags.length > 0) {
                        responseToController = await httpResponse.notFound(`Tags with the following IDs were not found: ${missingTags.join(', ')}`);
                    }
                }

                if (!responseToController) {
                    note.content = updatedNoteDTO.content
                    note.tags = tags
                    await notesRepository.updateNoteRepository(note)
                    responseToController = await httpResponse.noContent()
                }
            }
        }
    }
    return responseToController
}