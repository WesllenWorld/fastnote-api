import "reflect-metadata";
import { DataSource } from "typeorm";

import { User } from "./entities/User.entity";
import { Tag } from "./entities/Tag.entity";
import { Note } from "./entities/Note.entity";

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } =
  process.env;

export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  synchronize: NODE_ENV === "dev" ? false : false,
//logging logs sql command on the treminal
  logging: NODE_ENV === "dev" ? false : false,
  entities: [User, Tag, Note],
  migrations: [__dirname + "/migration/*.ts"],
  subscribers: [],
});