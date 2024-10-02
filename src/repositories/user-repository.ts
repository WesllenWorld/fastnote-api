import { User } from "../entities/user"
import { AppDataSource } from "../db/data-source"

export const getAllUsers = async (): Promise<User[]> => {


    return []
}

export const getUserById = async (id: string): Promise<User | undefined> => {
    //const note = noteList.find(note => note.noteId === id)
    //return note
    return undefined
}

export const getUserByEmail = async (email: string): Promise<User | null> => {
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOne({ where: { email } })

    return user

}
 
export const postUser = async (newUser: User) => {
    AppDataSource.getRepository(User).insert(newUser)

    //COLOQUE USUARIOS
    //TESTE O POST DE NOTAS
    //SE DER CERTO, ADIE PEDIR ARREGO A PEDRO
}
   