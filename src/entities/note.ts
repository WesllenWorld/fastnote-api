import { User } from "./user";
import { Tag } from "./tag";

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    ManyToMany,
    JoinTable,
    JoinColumn,
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

    @Column({
        length: 1000,
        nullable: false,
        type: "varchar",
    })
    content: string;

    @ManyToMany(() => Tag, { 
        eager: true, // Carrega as tags automaticamente ao buscar a nota
        nullable: true
    })
    @JoinTable() // Cria uma tabela intermediária para armazenar as associações
    tags: Tag[];

    @ManyToOne(() => User, user => user.id, {
        nullable: false, 
        onDelete: "CASCADE" 
    })
    @JoinColumn({ name: "user_id" }) // Define a coluna user_id como chave estrangeira
    user: User;
}