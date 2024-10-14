"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/entities/note.ts
var note_exports = {};
__export(note_exports, {
  Note: () => Note
});
module.exports = __toCommonJS(note_exports);

// src/entities/user.ts
var import_typeorm = require("typeorm");
function _ts_decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate, "_ts_decorate");
function _ts_metadata(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata, "_ts_metadata");
var _User = class _User {
  constructor(name, email, password) {
    __publicField(this, "id");
    __publicField(this, "name");
    __publicField(this, "email");
    __publicField(this, "password");
    this.name = name;
    this.email = email;
    this.password = password;
  }
};
__name(_User, "User");
var User = _User;
_ts_decorate([
  (0, import_typeorm.PrimaryGeneratedColumn)("uuid"),
  _ts_metadata("design:type", String)
], User.prototype, "id", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    length: 100,
    nullable: false,
    type: "varchar"
  }),
  _ts_metadata("design:type", String)
], User.prototype, "name", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    length: 255,
    nullable: false,
    unique: true,
    type: "varchar"
  }),
  _ts_metadata("design:type", String)
], User.prototype, "email", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    length: 255,
    nullable: false,
    type: "varchar"
  }),
  _ts_metadata("design:type", String)
], User.prototype, "password", void 0);
User = _ts_decorate([
  (0, import_typeorm.Entity)({
    name: "users"
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    String,
    String,
    String
  ])
], User);

// src/entities/tag.ts
var import_typeorm2 = require("typeorm");
function _ts_decorate2(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate2, "_ts_decorate");
function _ts_metadata2(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata2, "_ts_metadata");
var _Tag = class _Tag {
  constructor(name, color, user) {
    __publicField(this, "id");
    __publicField(this, "name");
    __publicField(this, "color");
    __publicField(this, "user");
    this.name = name;
    this.color = color;
    this.user = user;
  }
};
__name(_Tag, "Tag");
var Tag = _Tag;
_ts_decorate2([
  (0, import_typeorm2.PrimaryGeneratedColumn)("uuid"),
  _ts_metadata2("design:type", String)
], Tag.prototype, "id", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    length: 100,
    nullable: false,
    type: "varchar"
  }),
  _ts_metadata2("design:type", String)
], Tag.prototype, "name", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    length: 6,
    nullable: false,
    type: "varchar"
  }),
  _ts_metadata2("design:type", String)
], Tag.prototype, "color", void 0);
_ts_decorate2([
  (0, import_typeorm2.ManyToOne)(() => User, (user) => user.id, {
    eager: true,
    nullable: false,
    onDelete: "CASCADE"
  }),
  (0, import_typeorm2.JoinColumn)({
    name: "user_id"
  }),
  _ts_metadata2("design:type", typeof User === "undefined" ? Object : User)
], Tag.prototype, "user", void 0);
Tag = _ts_decorate2([
  (0, import_typeorm2.Entity)({
    name: "tags"
  }),
  _ts_metadata2("design:type", Function),
  _ts_metadata2("design:paramtypes", [
    String,
    String,
    typeof User === "undefined" ? Object : User
  ])
], Tag);

// src/entities/note.ts
var import_typeorm3 = require("typeorm");
function _ts_decorate3(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate3, "_ts_decorate");
function _ts_metadata3(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata3, "_ts_metadata");
var _Note = class _Note {
  constructor(content, tags, user) {
    __publicField(this, "id");
    __publicField(this, "content");
    __publicField(this, "tags");
    __publicField(this, "user");
    this.content = content;
    this.tags = tags;
    this.user = user;
  }
};
__name(_Note, "Note");
var Note = _Note;
_ts_decorate3([
  (0, import_typeorm3.PrimaryGeneratedColumn)("uuid"),
  _ts_metadata3("design:type", String)
], Note.prototype, "id", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    length: 1e3,
    nullable: false,
    type: "varchar"
  }),
  _ts_metadata3("design:type", String)
], Note.prototype, "content", void 0);
_ts_decorate3([
  (0, import_typeorm3.ManyToMany)(() => Tag, {
    eager: true,
    nullable: true
  }),
  (0, import_typeorm3.JoinTable)(),
  _ts_metadata3("design:type", Array)
], Note.prototype, "tags", void 0);
_ts_decorate3([
  (0, import_typeorm3.ManyToOne)(() => User, (user) => user.id, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  (0, import_typeorm3.JoinColumn)({
    name: "user_id"
  }),
  _ts_metadata3("design:type", typeof User === "undefined" ? Object : User)
], Note.prototype, "user", void 0);
Note = _ts_decorate3([
  (0, import_typeorm3.Entity)({
    name: "notes"
  }),
  _ts_metadata3("design:type", Function),
  _ts_metadata3("design:paramtypes", [
    String,
    Array,
    typeof User === "undefined" ? Object : User
  ])
], Note);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Note
});
