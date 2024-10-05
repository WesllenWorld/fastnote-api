import { Request, Response } from "express"
import * as notesServices from '../services/notes-services'
import { CreateNoteDTO } from "../dtos/create-note-dto"

export const getAllNotesByUserIdController = async (request:Request, response:Response) => {
    const userId = request.params.userId
    const httpResponse = await notesServices.getAllNotesByUserIdService(userId)
    return response.status(httpResponse.statusCode).json(httpResponse.body)

}

export const getNoteByUserIdController = async (request:Request, response:Response) => {
    const userId = request.params.userId
    const noteId = request.params.noteId
    const httpResponse = await notesServices.getNoteByUserIdService(userId, noteId)
    return response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getTagsByNoteIdController = async (request:Request, response:Response) => {
    const userId = request.params.userId
    const noteId = request.params.noteId
    const httpResponse = await notesServices.getTagsByNoteIdService(userId, noteId)
    return response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postNoteController = async (request:Request, response:Response) => {
    const userId = request.params.userId
    const newNote = new CreateNoteDTO(request.body.content, request.body.tags, request.body.userId)
    const httpResponse = await notesServices.postNoteService(userId, newNote)

    if (httpResponse) {
        response.status(httpResponse.statusCode).json(httpResponse.body)
    } 
}

export const deleteNoteController = async (request:Request, response:Response) => {
    
}

export const updateNoteController = async (request:Request, response:Response) => {
    
}