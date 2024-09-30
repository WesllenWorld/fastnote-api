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

    @Column({
        length: 100,
        nullable: false,
        type: "varchar",
    })
    name: string;

    @Column({
            length: 255,
            nullable: false,
            unique: true,
            type: "varchar",
        }
    )
    email: string;

    @Column({
        length: 255,
        nullable: false,
        type: "varchar",
    })
    password: string
}