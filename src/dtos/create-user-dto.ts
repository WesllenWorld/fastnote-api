import { IsNotEmpty, IsEmail, MinLength } from "class-validator";

export class CreateUserDTO {
    
    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    @IsNotEmpty({ message: "Name is required" })
    name: string;

    @IsEmail({}, { message: "Invalid email address" })
    email: string;

    @MinLength(4, { message: "Password must have at least 4 characters" })
    password: string;
}
