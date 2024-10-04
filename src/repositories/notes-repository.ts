import { Note } from "../entities/note"
import { Tag } from "../entities/tag"
import { User } from "../entities/user"
import { AppDataSource } from "../db/data-source"

const userRepository = AppDataSource.getRepository(User)
const tagRepository = AppDataSource.getRepository(Tag)
const noteRepository = AppDataSource.getRepository(Note)

export const getAllNotesByUserIdRepository = async (userId: string): Promise<Note[]> => {
    const notes = await noteRepository.find({ where: { user: { id: userId } } })
    return notes
}

export const getNotesByUserRepository = async (userId: string): Promise<Note | undefined> => {
    //const note = noteList.find(note => note.noteId === id)
    //return note
    return undefined
}
 
export const postNoteRepository = async (newNote: Note ) => {
    await noteRepository.save(newNote)
}
   