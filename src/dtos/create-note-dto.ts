import { IsNotEmpty, IsUUID } from "class-validator";

export class CreateNoteDTO {
    
    constructor(content: string, tags: string[], userId: string) {
        this.content = content
        this.tags = tags
        this.userId = userId
    }

    @IsNotEmpty({ message: "Content is required" })
    content: string;

    @IsUUID(undefined, { each: true })
    tags: string[] = [];

    @IsUUID()
    @IsNotEmpty({ message: "User ID in note is required" })
    userId: string;
}
