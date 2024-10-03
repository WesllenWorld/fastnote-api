import { IsNotEmpty, IsUUID, Matches, matches } from "class-validator";

export class CreateTagDTO {
    
    constructor(name: string, color: string, userId: string) {
        this.name = name
        this.color = color
        this.userId = userId
    }

    @IsNotEmpty({ message: "name is required" })
    name: string;

    @IsNotEmpty({ message: "color is required" })
    @Matches(/^([A-Fa-f0-9]{6})$/, { message: "Invalid color" })
    color: string

    @IsUUID()
    @IsNotEmpty({ message: "User ID is required" })
    userId: string;
}
