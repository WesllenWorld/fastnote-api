import { Note } from "../entities/note-model"




export const findAllNotes = async (): Promise<Note[]> => {


    return noteList
}

export const findNoteById = async (id: string): Promise<Note | undefined> => {
    const note = noteList.find(note => note.noteId === id)
    return note
}

export const addNote = async (newNote: Note ) => {
    database.push(newPlayer)
  }