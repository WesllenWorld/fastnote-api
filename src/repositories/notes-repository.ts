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

export const getNoteByUserIdRepository = async (userId: string, noteId: string): Promise<Note | null> => {
    const note = await noteRepository.findOne({ where: { id: noteId, user: { id: userId } } })
    return note
}

export const getTagsByNoteIdRepository = async (userId: string, noteId: string): Promise<Note | null> => {
    const note = await noteRepository.findOne({ where: { id: noteId, user: { id: userId } }, relations: ['tags'] })
    return note
}

export const getNotesByTagIdRepository = async (userId: string, tagId: string): Promise<Note[]> => {
    const notes = await noteRepository.find({ where: { user: { id: userId }, tags: { id: tagId } } })
    return notes
}

export const postNoteRepository = async (newNote: Note) => {
    await noteRepository.save(newNote)
}

export const deleteNoteByIdRepository = async (userId: string, noteId: string) => {
    await noteRepository.delete({ id: noteId, user: { id: userId } })
}
