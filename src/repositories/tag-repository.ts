import { Tag } from "../entities/tag"
import { AppDataSource } from "../db/data-source"
import { In } from "typeorm"

const tagRepository = AppDataSource.getRepository(Tag)

export const getAllTagsByUserIdRepository = async (userId: string): Promise<Tag[]> => {
    const tags = await tagRepository.find({ where: { user: { id: userId } } })
    return tags
}

export const getTagByUserIdRepository = async (userId: string, tagId: string): Promise<Tag | null> => {
    const tag = await tagRepository.findOne({ where: { user: { id: userId }, id: tagId } })
    return tag
}

export const getTagByUserIdAndNameRepository = async (userId: string, tagName: string): Promise<Tag | null> => {
    const tag = await tagRepository.findOne({ where: { user: { id: userId }, name: tagName } })

    return tag
}

export const getTagsByUserAndTagIdRepository = async (userId: string, tagIds: string[] ): Promise<Tag[]> => {
    const tags = await tagRepository.find({
        where: {
            id: In(tagIds),
            user: { id: userId }
             // Usando 'In' para buscar múltiplos IDs
        }
    })
    return tags;
}
 
export const postTagRepository = async (newTag: Tag) => {
    await tagRepository.save(newTag)
}
   