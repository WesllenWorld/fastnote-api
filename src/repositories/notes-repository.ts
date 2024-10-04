import { Note } from "../entities/note"
import { AppDataSource } from "../db/data-source"

const noteRepository = AppDataSource.getRepository(Note)

export const getAllNotesByUserIdRepository = async (userId: string): Promise<Note[]> => {


    return []
}

export const getNotesByUserRepository = async (userId: string): Promise<Note | undefined> => {
    //const note = noteList.find(note => note.noteId === id)
    //return note
    return undefined
}
 
export const postNoteRepository = async (newNote: Note ) => {
    await noteRepository.save(newNote)
}
   