import { Request, Response } from "express"
import * as notesServices from '../services/notes-services'
import { CreateNoteDTO } from "../dtos/create-note-dto"

export const getAllNotesByUserId = async (request:Request, response:Response) => {
    const httpResponse = await notesServices.getNotesService()
    return response.status(httpResponse.statusCode).json(httpResponse.body)

}

export const getNoteByUserId = async (request:Request, response:Response) => {
    
}

export const postNote = async (request:Request, response:Response) => {
    const userId = request.params.userId
    const newNote = new CreateNoteDTO(request.body.content, request.body.tags, request.body.userId)
    const httpResponse = await notesServices.postNoteService(userId, newNote)

    if (httpResponse) {
        response.status(httpResponse.statusCode).json(httpResponse.body)
    } 
}

export const deleteNote = async (request:Request, response:Response) => {
    
}

export const updateNote = async (request:Request, response:Response) => {
    
}