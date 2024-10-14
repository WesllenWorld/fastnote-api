"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/db/data-source.ts
var data_source_exports = {};
__export(data_source_exports, {
  AppDataSource: () => AppDataSource
});
module.exports = __toCommonJS(data_source_exports);
var import_reflect_metadata = require("reflect-metadata");
var import_typeorm = require("typeorm");
var { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } = process.env;
var AppDataSource = new import_typeorm.DataSource({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  //logging logs sql command on the treminal
  logging: false,
  entities: [
    "src/entities/*{.ts,.js}"
  ],
  migrations: [
    "src/db/migrations/*{.ts,.js}"
  ]
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppDataSource
});
