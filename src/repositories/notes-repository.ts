import { Note } from "../entities/note"
import { AppDataSource } from "../db/data-source"

const noteRepository = AppDataSource.getRepository(Note)

export const findAllNotes = async (): Promise<Note[]> => {


    return []
}

export const findNotesByUser = async (id: string): Promise<Note | undefined> => {
    //const note = noteList.find(note => note.noteId === id)
    //return note
    return undefined
}
 
export const postNote = async (newNote: Note ) => {
    await noteRepository.insert(newNote)
}
   