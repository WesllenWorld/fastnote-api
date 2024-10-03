import { Tag } from "../entities/tag"
import { AppDataSource } from "../db/data-source"

const tagRepository = AppDataSource.getRepository(Tag)

export const getAllTagsByUserId = async (userId: string): Promise<Tag[]> => {
    const tags = await tagRepository.find({ where: { user: { id: userId } } })

    return tags
}

export const getTagByUserIdAndName = async (userId: string, tagName: string): Promise<Tag | null> => {
    const tag = await tagRepository.findOne({ where: { user: { id: userId }, name: tagName } })

    return tag
}

export const getTagById = async (tagId: string): Promise<Tag | null> => {
    const tag = await tagRepository.findOne({ where: { id: tagId } })
    return tag
}
 
export const postTag = async (newTag: Tag) => {
    await tagRepository.insert(newTag)
}
   