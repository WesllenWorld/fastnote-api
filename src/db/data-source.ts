import { Tag } from "../entities/tag";
import { User } from "../entities/user";
import { Note } from "../entities/note";
import "reflect-metadata"
import { DataSource } from "typeorm"

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } =
  process.env;

export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  synchronize: true,
  //logging logs sql command on the treminal
  logging: false,
  //entities: ["src/entities/*{.ts,.js}"],
  entities: [User, Note, Tag],
})