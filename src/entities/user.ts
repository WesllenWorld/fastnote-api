import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    
} from "typeorm";

@Entity({name: "users"})
export class User {

    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string
}