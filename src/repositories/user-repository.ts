import { User } from "../entities/user"
import { AppDataSource } from "../db/data-source"

const userRepository = AppDataSource.getRepository(User)

export const getAllUsersRepository = async (): Promise<User[]> => {


    return []
}

export const getUserByIdRepository = async (userId: string): Promise<User | null> => {
    const user = await userRepository.findOne({ where: {id: userId}  })
    return user
}

export const getUserByEmailRepository = async (email: string): Promise<User | null> => {
    const user = await userRepository.findOne({ where: { email } })
    return user
}
 
export const postUserRepository = async (newUser: User) => {
    await userRepository.save(newUser)
}
   