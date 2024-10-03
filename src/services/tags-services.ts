import { Tag } from "../entities/tag"
//import * as notesRepository from "../repositories/notes-repository"
import * as httpResponse from "../utils/http-helper"



export const getNotesService = async () => {
    const data = await notesRepository.findNotes()
    let response = null

    if (!data) {
        response = await httpResponse.noContent()
    } else {
        response = await httpResponse.ok(data)
    }

    return response
}

export const getNotesByUserService = async (userId: number) => {
    const data = await notesRepository.findNotesByUser()
    let response = null

    if (!data) {
        response = await httpResponse.noContent()
    } else {
        response = await httpResponse.ok(data)
    }

    return response
}

export const getNoteByIdService = async (id: string) => {
    const data = await notesRepository.findNoteById(id)
    let response = null

    if (!data) {
        response = await httpResponse.noContent()
    } else {
        response = await httpResponse.ok(data)
    }

    return response
}

export const addNoteService = async (newNote: Note) => {
    let response = null

    if (Object.keys(newNote).length === 0) {
        response = await httpResponse.badRequest()
    } else {
        await notesRepository.addNote(newNote)
    }
    return response
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