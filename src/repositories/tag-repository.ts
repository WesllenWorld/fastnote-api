import { Tag } from "../entities/tag"
import { AppDataSource } from "../db/data-source"

const tagRepository = AppDataSource.getRepository(Tag)

export const getAllTagsByUserId = async (userId: string): Promise<Tag[]> => {
    const tags = await tagRepository.find({ where: { user: { id: userId } } })

    return tags
}

export const getAllTagsById = async (id: string): Promise<Tag[]> => {
    const tags = await tagRepository.find({ where: { id } })

    return tags
}

export const getTagById = async (id: string): Promise<Tag | null> => {
    const tag = await tagRepository.findOne({ where: { id } })
    return tag
}
 
export const postTag = async (newTag: Tag) => {
    await tagRepository.insert(newTag)
}
   