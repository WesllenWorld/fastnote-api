import { IsNotEmpty, IsUUID, Matches, matches } from "class-validator";

export class CreateTagDTO {
    
    constructor(name: string, color: string, userId: string) {
        this.name = name
        this.color = color
        this.userId = userId
    }

    @IsNotEmpty({ message: "Name is required" })
    name: string;

    @IsNotEmpty({ message: "Color is required" })
    @Matches(/^([A-Fa-f0-9]{6})$/, { message: "Invalid color" })
    color: string

    @IsUUID()
    @IsNotEmpty({ message: "User ID in tag is required" })
    userId: string;
}
