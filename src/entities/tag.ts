import { User } from "./user";

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
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

    @Column({
        length: 100,
        nullable: false,
        type: "varchar",
    })
    name: string;

    @Column({
        length: 6,
        nullable: false,
        type: "varchar",
    })
    color: string;

    @ManyToOne(() => User, user => user.id, {
        eager: true,
        nullable: false,
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "user_id" })
    user: User
}