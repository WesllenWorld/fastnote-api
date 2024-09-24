import { User } from "./user";

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
} from "typeorm";

@Entity({name: "tags"})
export class Tag {

    constructor(name: string, color: string, user: User) {
        this.name = name;
        this.color = color;
        this.user = user;
    }


    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    name: string;

    @Column()
    color: string;

    @ManyToOne(() => User, user => user.id)
    user: User
}