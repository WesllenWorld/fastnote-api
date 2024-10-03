import { User } from "../entities/user"
import { AppDataSource } from "../db/data-source"

const userRepository = AppDataSource.getRepository(User)

export const getAllUsers = async (): Promise<User[]> => {


    return []
}

export const getUserById = async (userId: string): Promise<User | null> => {
    const user = await userRepository.findOne({ where: {id: userId}  })
    return user
}

export const getUserByEmail = async (email: string): Promise<User | null> => {
    const user = await userRepository.findOne({ where: { email } })
    return user
}
 
export const postUser = async (newUser: User) => {
    await userRepository.insert(newUser)
}
   