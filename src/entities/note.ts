import { User } from "./user";
import { Tag } from "./tag";

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
} from "typeorm";

@Entity({name: "notes"})
export class Note {

    constructor(content: string, tags: Tag[], user: User) {
        this.content = content;
        this.tags = tags;
        this.user = user;
    }


    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    content: string;

    @Column()
    tags: Tag[];

    @ManyToOne(() => User, user => user.id)
    user: User
}