import { Request, Response } from "express"
import * as notesServices from '../services/notes-services'

export const getNotes = async (request:Request, response:Response) => {
    const httpResponse = await notesServices.getNotesService()
    return response.status(httpResponse.statusCode).json(httpResponse.body)

}

export const getNoteByUserId = async (request:Request, response:Response) => {
    
}

export const postNote = async (request:Request, response:Response) => {
    const newNote = request.body
    const httpResponse = await notesServices.addNoteService(newNote)

    if (httpResponse) {
        response.status(httpResponse.statusCode).json(httpResponse.body)
    } 
}

export const deleteNote = async (request:Request, response:Response) => {
    
}

export const updateNote = async (request:Request, response:Response) => {
    
}