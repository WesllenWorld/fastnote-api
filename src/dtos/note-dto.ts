export class NoteDTO {
    id: string
    content: string
    tags: string[]

    constructor(id: string, content: string, tags: string[]) {
        this.id = id
        this.content = content
        this.tags = tags
    }
}
