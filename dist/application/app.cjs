"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/application/app.ts
var app_exports = {};
__export(app_exports, {
  default: () => app_default
});
module.exports = __toCommonJS(app_exports);
var import_express2 = __toESM(require("express"), 1);

// src/routes/routes.ts
var import_express = require("express");

// src/services/notes-services.ts
var import_class_validator = require("class-validator");

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

// src/db/data-source.ts
var import_reflect_metadata = require("reflect-metadata");
var import_typeorm4 = require("typeorm");
var { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } = process.env;
var AppDataSource = new import_typeorm4.DataSource({
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

// src/repositories/notes-repository.ts
var noteRepository = AppDataSource.getRepository(Note);
var getAllNotesByUserIdRepository = /* @__PURE__ */ __name((userId) => __async(void 0, null, function* () {
  const notes = yield noteRepository.find({
    where: {
      user: {
        id: userId
      }
    }
  });
  return notes;
}), "getAllNotesByUserIdRepository");
var getNoteByUserIdRepository = /* @__PURE__ */ __name((userId, noteId) => __async(void 0, null, function* () {
  const note = yield noteRepository.findOne({
    where: {
      id: noteId,
      user: {
        id: userId
      }
    }
  });
  return note;
}), "getNoteByUserIdRepository");
var getTagsByNoteIdRepository = /* @__PURE__ */ __name((userId, noteId) => __async(void 0, null, function* () {
  const note = yield noteRepository.findOne({
    where: {
      id: noteId,
      user: {
        id: userId
      }
    },
    relations: [
      "tags"
    ]
  });
  return note;
}), "getTagsByNoteIdRepository");
var getNotesByTagIdRepository = /* @__PURE__ */ __name((userId, tagId) => __async(void 0, null, function* () {
  const notes = yield noteRepository.find({
    where: {
      user: {
        id: userId
      },
      tags: {
        id: tagId
      }
    }
  });
  return notes;
}), "getNotesByTagIdRepository");
var postNoteRepository = /* @__PURE__ */ __name((newNote) => __async(void 0, null, function* () {
  yield noteRepository.save(newNote);
}), "postNoteRepository");
var deleteNoteByIdRepository = /* @__PURE__ */ __name((userId, noteId) => __async(void 0, null, function* () {
  yield noteRepository.delete({
    id: noteId,
    user: {
      id: userId
    }
  });
}), "deleteNoteByIdRepository");
var updateNoteRepository = /* @__PURE__ */ __name((updatedNote) => __async(void 0, null, function* () {
  yield noteRepository.save(updatedNote);
}), "updateNoteRepository");

// src/repositories/user-repository.ts
var userRepository = AppDataSource.getRepository(User);
var getUserByIdRepository = /* @__PURE__ */ __name((userId) => __async(void 0, null, function* () {
  const user = yield userRepository.findOne({
    where: {
      id: userId
    }
  });
  return user;
}), "getUserByIdRepository");
var getUserByEmailRepository = /* @__PURE__ */ __name((email) => __async(void 0, null, function* () {
  const user = yield userRepository.findOne({
    where: {
      email
    }
  });
  return user;
}), "getUserByEmailRepository");
var postUserRepository = /* @__PURE__ */ __name((newUser) => __async(void 0, null, function* () {
  yield userRepository.save(newUser);
}), "postUserRepository");
var deleteUserByIdRepository = /* @__PURE__ */ __name((userId) => __async(void 0, null, function* () {
  yield userRepository.delete({
    id: userId
  });
}), "deleteUserByIdRepository");
var updateUserRepository = /* @__PURE__ */ __name((updatedUser) => __async(void 0, null, function* () {
  yield userRepository.save(updatedUser);
}), "updateUserRepository");

// src/repositories/tag-repository.ts
var import_typeorm5 = require("typeorm");
var tagRepository = AppDataSource.getRepository(Tag);
var getAllTagsByUserIdRepository = /* @__PURE__ */ __name((userId) => __async(void 0, null, function* () {
  const tags = yield tagRepository.find({
    where: {
      user: {
        id: userId
      }
    }
  });
  return tags;
}), "getAllTagsByUserIdRepository");
var getTagByUserIdRepository = /* @__PURE__ */ __name((userId, tagId) => __async(void 0, null, function* () {
  const tag = yield tagRepository.findOne({
    where: {
      user: {
        id: userId
      },
      id: tagId
    }
  });
  return tag;
}), "getTagByUserIdRepository");
var getTagByUserIdAndTagNameRepository = /* @__PURE__ */ __name((userId, tagName) => __async(void 0, null, function* () {
  const tag = yield tagRepository.findOne({
    where: {
      user: {
        id: userId
      },
      name: tagName
    }
  });
  return tag;
}), "getTagByUserIdAndTagNameRepository");
var getTagsByUserAndTagIdRepository = /* @__PURE__ */ __name((userId, tagIds) => __async(void 0, null, function* () {
  const tags = yield tagRepository.find({
    where: {
      id: (0, import_typeorm5.In)(tagIds),
      user: {
        id: userId
      }
    }
  });
  return tags;
}), "getTagsByUserAndTagIdRepository");
var getTagsByUserIdAndColorRepository = /* @__PURE__ */ __name((userId, tagColor) => __async(void 0, null, function* () {
  const tags = yield tagRepository.find({
    where: {
      user: {
        id: userId
      },
      color: tagColor
    }
  });
  return tags;
}), "getTagsByUserIdAndColorRepository");
var postTagRepository = /* @__PURE__ */ __name((newTag) => __async(void 0, null, function* () {
  yield tagRepository.save(newTag);
}), "postTagRepository");
var deleteTagByIdRepository = /* @__PURE__ */ __name((userId, tagId) => __async(void 0, null, function* () {
  yield tagRepository.delete({
    user: {
      id: userId
    },
    id: tagId
  });
}), "deleteTagByIdRepository");
var updateTagRepository = /* @__PURE__ */ __name((updatedTag) => __async(void 0, null, function* () {
  yield tagRepository.save(updatedTag);
}), "updateTagRepository");

// src/utils/http-status-code.ts
var StatusCode = /* @__PURE__ */ function(StatusCode2) {
  StatusCode2[StatusCode2["CONTINUE"] = 100] = "CONTINUE";
  StatusCode2[StatusCode2["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
  StatusCode2[StatusCode2["PROCESSING"] = 102] = "PROCESSING";
  StatusCode2[StatusCode2["EARLY_HINTS"] = 103] = "EARLY_HINTS";
  StatusCode2[StatusCode2["OK"] = 200] = "OK";
  StatusCode2[StatusCode2["CREATED"] = 201] = "CREATED";
  StatusCode2[StatusCode2["ACCEPTED"] = 202] = "ACCEPTED";
  StatusCode2[StatusCode2["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
  StatusCode2[StatusCode2["NO_CONTENT"] = 204] = "NO_CONTENT";
  StatusCode2[StatusCode2["RESET_CONTENT"] = 205] = "RESET_CONTENT";
  StatusCode2[StatusCode2["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
  StatusCode2[StatusCode2["MULTI_STATUS"] = 207] = "MULTI_STATUS";
  StatusCode2[StatusCode2["ALREADY_REPORTED"] = 208] = "ALREADY_REPORTED";
  StatusCode2[StatusCode2["IM_USED"] = 226] = "IM_USED";
  StatusCode2[StatusCode2["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
  StatusCode2[StatusCode2["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
  StatusCode2[StatusCode2["FOUND"] = 302] = "FOUND";
  StatusCode2[StatusCode2["SEE_OTHER"] = 303] = "SEE_OTHER";
  StatusCode2[StatusCode2["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
  StatusCode2[StatusCode2["USE_PROXY"] = 305] = "USE_PROXY";
  StatusCode2[StatusCode2["SWITCH_PROXY"] = 306] = "SWITCH_PROXY";
  StatusCode2[StatusCode2["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
  StatusCode2[StatusCode2["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
  StatusCode2[StatusCode2["BAD_REQUEST"] = 400] = "BAD_REQUEST";
  StatusCode2[StatusCode2["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
  StatusCode2[StatusCode2["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
  StatusCode2[StatusCode2["FORBIDDEN"] = 403] = "FORBIDDEN";
  StatusCode2[StatusCode2["NOT_FOUND"] = 404] = "NOT_FOUND";
  StatusCode2[StatusCode2["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
  StatusCode2[StatusCode2["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
  StatusCode2[StatusCode2["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
  StatusCode2[StatusCode2["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
  StatusCode2[StatusCode2["CONFLICT"] = 409] = "CONFLICT";
  StatusCode2[StatusCode2["GONE"] = 410] = "GONE";
  StatusCode2[StatusCode2["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
  StatusCode2[StatusCode2["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
  StatusCode2[StatusCode2["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
  StatusCode2[StatusCode2["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
  StatusCode2[StatusCode2["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
  StatusCode2[StatusCode2["RANGE_NOT_SATISFIABLE"] = 416] = "RANGE_NOT_SATISFIABLE";
  StatusCode2[StatusCode2["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
  StatusCode2[StatusCode2["IM_A_TEAPOT"] = 418] = "IM_A_TEAPOT";
  StatusCode2[StatusCode2["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
  StatusCode2[StatusCode2["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
  StatusCode2[StatusCode2["LOCKED"] = 423] = "LOCKED";
  StatusCode2[StatusCode2["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
  StatusCode2[StatusCode2["TOO_EARLY"] = 425] = "TOO_EARLY";
  StatusCode2[StatusCode2["UPGRADE_REQUIRED"] = 426] = "UPGRADE_REQUIRED";
  StatusCode2[StatusCode2["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
  StatusCode2[StatusCode2["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
  StatusCode2[StatusCode2["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
  StatusCode2[StatusCode2["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
  StatusCode2[StatusCode2["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
  StatusCode2[StatusCode2["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
  StatusCode2[StatusCode2["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
  StatusCode2[StatusCode2["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
  StatusCode2[StatusCode2["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
  StatusCode2[StatusCode2["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
  StatusCode2[StatusCode2["VARIANT_ALSO_NEGOTIATES"] = 506] = "VARIANT_ALSO_NEGOTIATES";
  StatusCode2[StatusCode2["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
  StatusCode2[StatusCode2["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
  StatusCode2[StatusCode2["NOT_EXTENDED"] = 510] = "NOT_EXTENDED";
  StatusCode2[StatusCode2["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
  return StatusCode2;
}({});

// src/utils/http-helper.ts
var ok = /* @__PURE__ */ __name((data) => __async(void 0, null, function* () {
  return {
    statusCode: StatusCode.OK,
    body: data
  };
}), "ok");
var created = /* @__PURE__ */ __name((data) => __async(void 0, null, function* () {
  return {
    statusCode: StatusCode.CREATED,
    body: data
  };
}), "created");
var noContent = /* @__PURE__ */ __name(() => __async(void 0, null, function* () {
  return {
    statusCode: StatusCode.NO_CONTENT,
    body: "no content"
  };
}), "noContent");
var conflict = /* @__PURE__ */ __name((data) => __async(void 0, null, function* () {
  return {
    statusCode: StatusCode.CONFLICT,
    body: data
  };
}), "conflict");
var badRequest = /* @__PURE__ */ __name((data) => __async(void 0, null, function* () {
  return {
    statusCode: StatusCode.BAD_REQUEST,
    body: data
  };
}), "badRequest");
var notFound = /* @__PURE__ */ __name((data) => __async(void 0, null, function* () {
  return {
    statusCode: StatusCode.NOT_FOUND,
    body: data
  };
}), "notFound");

// src/dtos/note-dto.ts
var _NoteDTO = class _NoteDTO {
  constructor(id, content, tags) {
    __publicField(this, "id");
    __publicField(this, "content");
    __publicField(this, "tags");
    this.id = id;
    this.content = content;
    this.tags = tags;
  }
};
__name(_NoteDTO, "NoteDTO");
var NoteDTO = _NoteDTO;

// src/dtos/tag-dto.ts
var _TagDTO = class _TagDTO {
  constructor(id, name, color) {
    __publicField(this, "id");
    __publicField(this, "name");
    __publicField(this, "color");
    this.id = id;
    this.name = name;
    this.color = color;
  }
};
__name(_TagDTO, "TagDTO");
var TagDTO = _TagDTO;

// src/services/notes-services.ts
var getAllNotesByUserIdService = /* @__PURE__ */ __name((userId) => __async(void 0, null, function* () {
  let responseToController = null;
  if (!(0, import_class_validator.isUUID)(userId)) {
    responseToController = yield badRequest("Invalid user UUID provided");
  } else {
    const notes = yield getAllNotesByUserIdRepository(userId);
    const notesDTOs = notes.map((note) => new NoteDTO(note.id, note.content, note.tags.map((tag) => tag.id)));
    responseToController = yield ok(notesDTOs);
  }
  return responseToController;
}), "getAllNotesByUserIdService");
var getNoteByUserIdService = /* @__PURE__ */ __name((userId, noteId) => __async(void 0, null, function* () {
  let responseToController = null;
  if (!(0, import_class_validator.isUUID)(noteId)) {
    responseToController = yield badRequest("Invalid note UUID provided");
  } else if (!(0, import_class_validator.isUUID)(userId)) {
    responseToController = yield badRequest("Invalid user UUID provided");
  } else {
    const note = yield getNoteByUserIdRepository(userId, noteId);
    if (!note) {
      responseToController = yield notFound("Note not found");
    } else {
      const noteDTO = new NoteDTO(note.id, note.content, note.tags.map((tag) => tag.id));
      responseToController = yield ok(noteDTO);
    }
  }
  return responseToController;
}), "getNoteByUserIdService");
var getTagsByNoteIdService = /* @__PURE__ */ __name((userId, noteId) => __async(void 0, null, function* () {
  let responseToController = null;
  if (!(0, import_class_validator.isUUID)(noteId)) {
    responseToController = yield badRequest("Invalid note UUID provided");
  } else if (!(0, import_class_validator.isUUID)(userId)) {
    responseToController = yield badRequest("Invalid user UUID provided");
  } else {
    const note = yield getTagsByNoteIdRepository(userId, noteId);
    if (!note) {
      responseToController = yield notFound("Note not found");
    } else {
      const tagsDTO = note.tags.map((tag) => new TagDTO(tag.id, tag.name, tag.color));
      responseToController = yield ok(tagsDTO);
    }
  }
  return responseToController;
}), "getTagsByNoteIdService");
var getNotesByTagIdService = /* @__PURE__ */ __name((userId, tagId) => __async(void 0, null, function* () {
  let responseToController = null;
  if (!(0, import_class_validator.isUUID)(tagId)) {
    responseToController = yield badRequest("Invalid tag UUID provided");
  } else if (!(0, import_class_validator.isUUID)(userId)) {
    responseToController = yield badRequest("Invalid user UUID provided");
  } else {
    const notes = yield getNotesByTagIdRepository(userId, tagId);
    const notesDTOs = notes.map((note) => new NoteDTO(note.id, note.content, note.tags.map((tag) => tag.id)));
    responseToController = yield ok(notesDTOs);
  }
  return responseToController;
}), "getNotesByTagIdService");
var postNoteService = /* @__PURE__ */ __name((userId, newNoteDTO) => __async(void 0, null, function* () {
  let responseToController = null;
  if (!(0, import_class_validator.isUUID)(userId)) {
    responseToController = yield badRequest("Invalid user UUID provided");
  } else {
    const validationErrors = yield (0, import_class_validator.validate)(newNoteDTO);
    if (validationErrors.length > 0) {
      const errorMessages = validationErrors.flatMap((error) => {
        return error.constraints ? Object.values(error.constraints) : [];
      });
      responseToController = yield badRequest(errorMessages);
    } else {
      const existingUser = yield getUserByIdRepository(userId);
      if (!existingUser) {
        responseToController = yield notFound("User not found");
      } else {
        let tags = [];
        if (newNoteDTO.tags.length > 0) {
          tags = yield getTagsByUserAndTagIdRepository(newNoteDTO.userId, newNoteDTO.tags);
          const foundTagIds = tags.map((tag) => tag.id);
          const missingTags = newNoteDTO.tags.filter((tagId) => !foundTagIds.includes(tagId));
          if (missingTags.length > 0) {
            responseToController = yield notFound(`Tags with the following IDs were not found: ${missingTags.join(", ")}`);
          }
        }
        if (!responseToController) {
          const newNote = new Note(newNoteDTO.content, tags, existingUser);
          yield postNoteRepository(newNote);
          responseToController = yield created("Note created successfully");
        }
      }
    }
  }
  return responseToController;
}), "postNoteService");
var deleteNoteByIdService = /* @__PURE__ */ __name((userId, noteId) => __async(void 0, null, function* () {
  let responseToController = null;
  if (!(0, import_class_validator.isUUID)(noteId)) {
    responseToController = yield badRequest("Invalid note UUID provided");
  } else if (!(0, import_class_validator.isUUID)(userId)) {
    responseToController = yield badRequest("Invalid user UUID provided");
  } else {
    const note = yield getNoteByUserIdRepository(userId, noteId);
    if (!note) {
      responseToController = yield notFound("Note not found");
    } else {
      deleteNoteByIdRepository(userId, noteId);
      responseToController = yield ok("Note successfully deleted");
    }
  }
  return responseToController;
}), "deleteNoteByIdService");
var updateNoteService = /* @__PURE__ */ __name((userId, noteId, updatedNoteDTO) => __async(void 0, null, function* () {
  let responseToController = null;
  if (!(0, import_class_validator.isUUID)(noteId)) {
    responseToController = yield badRequest("Invalid note UUID provided");
  } else if (!(0, import_class_validator.isUUID)(userId)) {
    responseToController = yield badRequest("Invalid user UUID provided");
  } else {
    const validationErrors = yield (0, import_class_validator.validate)(updatedNoteDTO);
    if (validationErrors.length > 0) {
      const errorMessages = validationErrors.flatMap((error) => {
        return error.constraints ? Object.values(error.constraints) : [];
      });
      responseToController = yield badRequest(errorMessages);
    } else {
      const note = yield getNoteByUserIdRepository(userId, noteId);
      if (!note) {
        responseToController = yield notFound("Note not found");
      } else {
        let tags = [];
        if (updatedNoteDTO.tags.length > 0) {
          tags = yield getTagsByUserAndTagIdRepository(userId, updatedNoteDTO.tags);
          const foundTagIds = tags.map((tag) => tag.id);
          const missingTags = updatedNoteDTO.tags.filter((tagId) => !foundTagIds.includes(tagId));
          if (missingTags.length > 0) {
            responseToController = yield notFound(`Tags with the following IDs were not found: ${missingTags.join(", ")}`);
          }
        }
        if (!responseToController) {
          note.content = updatedNoteDTO.content;
          note.tags = tags;
          yield updateNoteRepository(note);
          responseToController = yield noContent();
        }
      }
    }
  }
  return responseToController;
}), "updateNoteService");

// src/dtos/create-note-dto.ts
var import_class_validator2 = require("class-validator");
function _ts_decorate4(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate4, "_ts_decorate");
function _ts_metadata4(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata4, "_ts_metadata");
var _CreateNoteDTO = class _CreateNoteDTO {
  constructor(content, tags, userId) {
    __publicField(this, "content");
    __publicField(this, "tags", []);
    __publicField(this, "userId");
    this.content = content;
    this.tags = tags;
    this.userId = userId;
  }
};
__name(_CreateNoteDTO, "CreateNoteDTO");
var CreateNoteDTO = _CreateNoteDTO;
_ts_decorate4([
  (0, import_class_validator2.IsNotEmpty)({
    message: "Content is required"
  }),
  _ts_metadata4("design:type", String)
], CreateNoteDTO.prototype, "content", void 0);
_ts_decorate4([
  (0, import_class_validator2.IsUUID)(void 0, {
    each: true
  }),
  _ts_metadata4("design:type", Array)
], CreateNoteDTO.prototype, "tags", void 0);
_ts_decorate4([
  (0, import_class_validator2.IsUUID)(),
  (0, import_class_validator2.IsNotEmpty)({
    message: "User ID in note is required"
  }),
  _ts_metadata4("design:type", String)
], CreateNoteDTO.prototype, "userId", void 0);

// src/controllers/notes-controller.ts
var getAllNotesByUserIdController = /* @__PURE__ */ __name((request, response) => __async(void 0, null, function* () {
  const userId = request.params.userId;
  const httpResponse = yield getAllNotesByUserIdService(userId);
  return response.status(httpResponse.statusCode).json(httpResponse.body);
}), "getAllNotesByUserIdController");
var getNoteByUserIdController = /* @__PURE__ */ __name((request, response) => __async(void 0, null, function* () {
  const userId = request.params.userId;
  const noteId = request.params.noteId;
  const httpResponse = yield getNoteByUserIdService(userId, noteId);
  return response.status(httpResponse.statusCode).json(httpResponse.body);
}), "getNoteByUserIdController");
var getTagsByNoteIdController = /* @__PURE__ */ __name((request, response) => __async(void 0, null, function* () {
  const userId = request.params.userId;
  const noteId = request.params.noteId;
  const httpResponse = yield getTagsByNoteIdService(userId, noteId);
  return response.status(httpResponse.statusCode).json(httpResponse.body);
}), "getTagsByNoteIdController");
var getNotesByTagIdController = /* @__PURE__ */ __name((request, response) => __async(void 0, null, function* () {
  const userId = request.params.userId;
  const tagId = request.params.tagId;
  const httpResponse = yield getNotesByTagIdService(userId, tagId);
  return response.status(httpResponse.statusCode).json(httpResponse.body);
}), "getNotesByTagIdController");
var postNoteController = /* @__PURE__ */ __name((request, response) => __async(void 0, null, function* () {
  const userId = request.params.userId;
  const newNote = new CreateNoteDTO(request.body.content, request.body.tags, request.body.userId);
  const httpResponse = yield postNoteService(userId, newNote);
  response.status(httpResponse.statusCode).json(httpResponse.body);
}), "postNoteController");
var deleteNoteByIdController = /* @__PURE__ */ __name((request, response) => __async(void 0, null, function* () {
  const userId = request.params.userId;
  const noteId = request.params.noteId;
  const httpResponse = yield deleteNoteByIdService(userId, noteId);
  return response.status(httpResponse.statusCode).json(httpResponse.body);
}), "deleteNoteByIdController");
var updateNoteController = /* @__PURE__ */ __name((request, response) => __async(void 0, null, function* () {
  const userId = request.params.userId;
  const noteId = request.params.noteId;
  const updatedNote = new CreateNoteDTO(request.body.content, request.body.tags, userId);
  const httpResponse = yield updateNoteService(userId, noteId, updatedNote);
  response.status(httpResponse.statusCode).json(httpResponse.body);
}), "updateNoteController");

// src/services/tags-services.ts
var import_class_validator3 = require("class-validator");
var getAllTagsByUserIdService = /* @__PURE__ */ __name((userId) => __async(void 0, null, function* () {
  let responseToController = null;
  if (!(0, import_class_validator3.isUUID)(userId)) {
    responseToController = yield badRequest("Invalid user UUID provided");
  } else {
    const tags = yield getAllTagsByUserIdRepository(userId);
    const tagsDTOs = tags.map((tag) => new TagDTO(tag.id, tag.name, tag.color));
    responseToController = yield ok(tagsDTOs);
  }
  return responseToController;
}), "getAllTagsByUserIdService");
var getTagByUserIdService = /* @__PURE__ */ __name((userId, tagId) => __async(void 0, null, function* () {
  let responseToController = null;
  if (!(0, import_class_validator3.isUUID)(tagId)) {
    responseToController = yield badRequest("Invalid tag UUID provided");
  } else if (!(0, import_class_validator3.isUUID)(userId)) {
    responseToController = yield badRequest("Invalid user UUID provided");
  } else {
    const tag = yield getTagByUserIdRepository(userId, tagId);
    if (!tag) {
      responseToController = yield notFound("Tag not found");
    } else {
      const tagDTO = new TagDTO(tag.id, tag.name, tag.color);
      responseToController = yield ok(tagDTO);
    }
  }
  return responseToController;
}), "getTagByUserIdService");
var getTagByUserIdAndTagNameService = /* @__PURE__ */ __name((userId, tagName) => __async(void 0, null, function* () {
  let responseToController = null;
  if (!(0, import_class_validator3.isUUID)(userId)) {
    responseToController = yield badRequest("Invalid user UUID provided");
  } else if (!tagName || tagName.trim().length === 0) {
    responseToController = yield badRequest("Tag name cannot be empty");
  } else {
    const tag = yield getTagByUserIdAndTagNameRepository(userId, tagName);
    if (!tag) {
      responseToController = yield notFound("Tag not found");
    } else {
      const tagDTO = new TagDTO(tag.id, tag.name, tag.color);
      responseToController = yield ok(tagDTO);
    }
  }
  return responseToController;
}), "getTagByUserIdAndTagNameService");
var getTagsByUserIdAndColorService = /* @__PURE__ */ __name((userId, tagColor) => __async(void 0, null, function* () {
  let responseToController = null;
  if (!(0, import_class_validator3.isUUID)(userId)) {
    responseToController = yield badRequest("Invalid user UUID provided");
  } else if (!tagColor || tagColor.trim().length === 0) {
    responseToController = yield badRequest("Tag color cannot be empty");
  } else if (!/^[0-9A-Fa-f]{6}$/.test(tagColor)) {
    responseToController = yield badRequest("Tag color must be a valid hexadecimal color code");
  } else {
    const tags = yield getTagsByUserIdAndColorRepository(userId, tagColor);
    const tagsDTOs = tags.map((tag) => new TagDTO(tag.id, tag.name, tag.color));
    responseToController = yield ok(tagsDTOs);
  }
  return responseToController;
}), "getTagsByUserIdAndColorService");
var postTagService = /* @__PURE__ */ __name((userId, newTagDTO) => __async(void 0, null, function* () {
  let responseToController = null;
  if (!(0, import_class_validator3.isUUID)(userId)) {
    responseToController = yield badRequest("Invalid user UUID provided");
  } else {
    const validationErrors = yield (0, import_class_validator3.validate)(newTagDTO);
    if (validationErrors.length > 0) {
      const errorMessages = validationErrors.flatMap((error) => {
        return error.constraints ? Object.values(error.constraints) : [];
      });
      responseToController = yield badRequest(errorMessages);
    } else {
      const existingUser = yield getUserByIdRepository(userId);
      if (!existingUser) {
        responseToController = yield notFound("User not found");
      } else {
        const tagExists = yield getTagByUserIdAndTagNameRepository(userId, newTagDTO.name);
        if (tagExists) {
          responseToController = yield conflict(`Tag ${tagExists.name} already exists`);
        } else {
          const tag = new Tag(newTagDTO.name, newTagDTO.color, existingUser);
          yield postTagRepository(tag);
          responseToController = yield created("Tag created successfully");
        }
      }
    }
  }
  return responseToController;
}), "postTagService");
var deleteTagByIdService = /* @__PURE__ */ __name((userId, tagId) => __async(void 0, null, function* () {
  let responseToController = null;
  if (!(0, import_class_validator3.isUUID)(tagId)) {
    responseToController = yield badRequest("Invalid tag UUID provided");
  } else if (!(0, import_class_validator3.isUUID)(userId)) {
    responseToController = yield badRequest("Invalid user UUID provided");
  } else {
    const tag = yield getTagByUserIdRepository(userId, tagId);
    if (!tag) {
      responseToController = yield notFound("Tag not found");
    } else {
      yield deleteTagByIdRepository(userId, tagId);
      responseToController = yield ok("Tag deleted successfully");
    }
  }
  return responseToController;
}), "deleteTagByIdService");
var updateTagService = /* @__PURE__ */ __name((userId, tagId, updatedTagDTO) => __async(void 0, null, function* () {
  let responseToController = null;
  if (!(0, import_class_validator3.isUUID)(tagId)) {
    responseToController = yield badRequest("Invalid tag UUID provided");
  } else if (!(0, import_class_validator3.isUUID)(userId)) {
    responseToController = yield badRequest("Invalid user UUID provided");
  } else {
    const tag = yield getTagByUserIdRepository(userId, tagId);
    if (!tag) {
      responseToController = yield notFound("Tag not found");
    } else {
      const validationErrors = yield (0, import_class_validator3.validate)(updatedTagDTO);
      if (validationErrors.length > 0) {
        const errorMessages = validationErrors.flatMap((error) => {
          return error.constraints ? Object.values(error.constraints) : [];
        });
        responseToController = yield badRequest(errorMessages);
      } else {
        const tagWithSameName = yield getTagByUserIdAndTagNameRepository(userId, updatedTagDTO.name);
        if (tagWithSameName && tagWithSameName.id !== tagId) {
          responseToController = yield conflict(`Tag ${tagWithSameName.name} already exists`);
        } else {
          tag.name = updatedTagDTO.name;
          tag.color = updatedTagDTO.color;
          yield updateTagRepository(tag);
          responseToController = yield noContent();
        }
      }
    }
  }
  return responseToController;
}), "updateTagService");

// src/dtos/create-tag-dto.ts
var import_class_validator4 = require("class-validator");
function _ts_decorate5(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate5, "_ts_decorate");
function _ts_metadata5(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata5, "_ts_metadata");
var _CreateTagDTO = class _CreateTagDTO {
  constructor(name, color, userId) {
    __publicField(this, "name");
    __publicField(this, "color");
    __publicField(this, "userId");
    this.name = name;
    this.color = color;
    this.userId = userId;
  }
};
__name(_CreateTagDTO, "CreateTagDTO");
var CreateTagDTO = _CreateTagDTO;
_ts_decorate5([
  (0, import_class_validator4.IsNotEmpty)({
    message: "Name is required"
  }),
  _ts_metadata5("design:type", String)
], CreateTagDTO.prototype, "name", void 0);
_ts_decorate5([
  (0, import_class_validator4.IsNotEmpty)({
    message: "Color is required"
  }),
  (0, import_class_validator4.Matches)(/^([A-Fa-f0-9]{6})$/, {
    message: "Invalid color"
  }),
  _ts_metadata5("design:type", String)
], CreateTagDTO.prototype, "color", void 0);
_ts_decorate5([
  (0, import_class_validator4.IsUUID)(),
  (0, import_class_validator4.IsNotEmpty)({
    message: "User ID in tag is required"
  }),
  _ts_metadata5("design:type", String)
], CreateTagDTO.prototype, "userId", void 0);

// src/controllers/tags-controller.ts
var getAllTagsByUserIdController = /* @__PURE__ */ __name((request, response) => __async(void 0, null, function* () {
  const userId = request.params.userId;
  const httpResponse = yield getAllTagsByUserIdService(userId);
  return response.status(httpResponse.statusCode).json(httpResponse.body);
}), "getAllTagsByUserIdController");
var getTagByUserIdController = /* @__PURE__ */ __name((request, response) => __async(void 0, null, function* () {
  const userId = request.params.userId;
  const tagId = request.params.tagId;
  const httpResponse = yield getTagByUserIdService(userId, tagId);
  return response.status(httpResponse.statusCode).json(httpResponse.body);
}), "getTagByUserIdController");
var getTagByUserIdAndTagNameController = /* @__PURE__ */ __name((request, response) => __async(void 0, null, function* () {
  const userId = request.params.userId;
  const tagName = request.params.tagName;
  const httpResponse = yield getTagByUserIdAndTagNameService(userId, tagName);
  return response.status(httpResponse.statusCode).json(httpResponse.body);
}), "getTagByUserIdAndTagNameController");
var getTagsByUserIdAndColorController = /* @__PURE__ */ __name((request, response) => __async(void 0, null, function* () {
  const userId = request.params.userId;
  const tagColor = request.params.tagColor;
  const httpResponse = yield getTagsByUserIdAndColorService(userId, tagColor);
  return response.status(httpResponse.statusCode).json(httpResponse.body);
}), "getTagsByUserIdAndColorController");
var postTagController = /* @__PURE__ */ __name((request, response) => __async(void 0, null, function* () {
  const userId = request.params.userId;
  const newTagDTO = new CreateTagDTO(request.body.name, request.body.color, request.body.userId);
  const httpResponse = yield postTagService(userId, newTagDTO);
  response.status(httpResponse.statusCode).json(httpResponse.body);
}), "postTagController");
var deleteTagByIdController = /* @__PURE__ */ __name((request, response) => __async(void 0, null, function* () {
  const userId = request.params.userId;
  const tagId = request.params.tagId;
  const httpResponse = yield deleteTagByIdService(userId, tagId);
  return response.status(httpResponse.statusCode).json(httpResponse.body);
}), "deleteTagByIdController");
var updateTagController = /* @__PURE__ */ __name((request, response) => __async(void 0, null, function* () {
  const userId = request.params.userId;
  const tagId = request.params.tagId;
  const updatedTagDTO = new CreateTagDTO(request.body.name, request.body.color, request.body.userId);
  const httpResponse = yield updateTagService(userId, tagId, updatedTagDTO);
  return response.status(httpResponse.statusCode).json(httpResponse.body);
}), "updateTagController");

// src/services/users-services.ts
var import_class_validator5 = require("class-validator");
var bcrypt = __toESM(require("bcrypt"), 1);

// src/dtos/user-dto.ts
var _UserDTO = class _UserDTO {
  constructor(id, name, email) {
    __publicField(this, "id");
    __publicField(this, "name");
    __publicField(this, "email");
    this.id = id;
    this.name = name;
    this.email = email;
  }
};
__name(_UserDTO, "UserDTO");
var UserDTO = _UserDTO;

// src/services/users-services.ts
var getUserByIdService = /* @__PURE__ */ __name((userId) => __async(void 0, null, function* () {
  let responseToController = null;
  if (!(0, import_class_validator5.isUUID)(userId)) {
    responseToController = yield badRequest("Invalid user UUID provided");
  } else {
    const user = yield getUserByIdRepository(userId);
    if (!user) {
      responseToController = yield notFound("User not found");
    } else {
      const userDTO = new UserDTO(user.id, user.name, user.email);
      responseToController = yield ok(userDTO);
    }
  }
  return responseToController;
}), "getUserByIdService");
var postUserService = /* @__PURE__ */ __name((newUserDTO) => __async(void 0, null, function* () {
  let responseToController = null;
  const validationErrors = yield (0, import_class_validator5.validate)(newUserDTO);
  if (validationErrors.length > 0) {
    const errorMessages = validationErrors.flatMap((error) => {
      return error.constraints ? Object.values(error.constraints) : [];
    });
    responseToController = yield badRequest(errorMessages);
  } else {
    if (validationErrors.length > 0) {
      responseToController = yield badRequest("Invalid data provided");
    } else {
      const existingUser = yield getUserByEmailRepository(newUserDTO.email);
      if (existingUser) {
        responseToController = yield conflict("Email already exists");
      } else {
        const saltRounds = 10;
        const newUser = new User(newUserDTO.name, newUserDTO.email, yield bcrypt.hash(newUserDTO.password, saltRounds));
        yield postUserRepository(newUser);
        responseToController = yield created("User created successfully");
      }
    }
  }
  return responseToController;
}), "postUserService");
var deleteUserByIdService = /* @__PURE__ */ __name((userId) => __async(void 0, null, function* () {
  let responseToController = null;
  if (!(0, import_class_validator5.isUUID)(userId)) {
    responseToController = yield badRequest("Invalid user UUID provided");
  } else {
    const user = yield getUserByIdRepository(userId);
    if (!user) {
      responseToController = yield notFound("User not found");
    } else {
      yield deleteUserByIdRepository(userId);
      responseToController = yield ok("User deleted successfully");
    }
  }
  return responseToController;
}), "deleteUserByIdService");
var updateUserService = /* @__PURE__ */ __name((userId, updatedUserDTO) => __async(void 0, null, function* () {
  let responseToController = null;
  if (!(0, import_class_validator5.isUUID)(userId)) {
    responseToController = yield badRequest("Invalid user UUID provided");
  } else {
    const validationErrors = yield (0, import_class_validator5.validate)(updatedUserDTO);
    if (validationErrors.length > 0) {
      const errorMessages = validationErrors.flatMap((error) => {
        return error.constraints ? Object.values(error.constraints) : [];
      });
      responseToController = yield badRequest(errorMessages);
    } else {
      const user = yield getUserByIdRepository(userId);
      if (!user) {
        responseToController = yield notFound("User not found");
      } else {
        const existingUser = yield getUserByEmailRepository(updatedUserDTO.email);
        if (existingUser && existingUser.id != userId) {
          responseToController = yield conflict("Email already exists");
        } else {
          user.name = updatedUserDTO.name;
          user.email = updatedUserDTO.email;
          user.password = yield bcrypt.hash(updatedUserDTO.password, 10);
          yield updateUserRepository(user);
          responseToController = yield noContent();
        }
      }
    }
  }
  return responseToController;
}), "updateUserService");

// src/dtos/create-user-dto.ts
var import_class_validator6 = require("class-validator");
function _ts_decorate6(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate6, "_ts_decorate");
function _ts_metadata6(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata6, "_ts_metadata");
var _CreateUserDTO = class _CreateUserDTO {
  constructor(name, email, password) {
    __publicField(this, "name");
    __publicField(this, "email");
    __publicField(this, "password");
    this.name = name;
    this.email = email;
    this.password = password;
  }
};
__name(_CreateUserDTO, "CreateUserDTO");
var CreateUserDTO = _CreateUserDTO;
_ts_decorate6([
  (0, import_class_validator6.IsNotEmpty)({
    message: "Name is required"
  }),
  _ts_metadata6("design:type", String)
], CreateUserDTO.prototype, "name", void 0);
_ts_decorate6([
  (0, import_class_validator6.IsEmail)({}, {
    message: "Invalid email address"
  }),
  _ts_metadata6("design:type", String)
], CreateUserDTO.prototype, "email", void 0);
_ts_decorate6([
  (0, import_class_validator6.MinLength)(4, {
    message: "Password must have at least 4 characters"
  }),
  _ts_metadata6("design:type", String)
], CreateUserDTO.prototype, "password", void 0);

// src/controllers/users-controller.ts
var getUserByIdController = /* @__PURE__ */ __name((request, response) => __async(void 0, null, function* () {
  const userId = request.params.userId;
  const httpResponse = yield getUserByIdService(userId);
  response.status(httpResponse.statusCode).json(httpResponse.body);
}), "getUserByIdController");
var postUserController = /* @__PURE__ */ __name((request, response) => __async(void 0, null, function* () {
  const newUser = new CreateUserDTO(request.body.name, request.body.email, request.body.password);
  const httpResponse = yield postUserService(newUser);
  response.status(httpResponse.statusCode).json(httpResponse.body);
}), "postUserController");
var deleteUserByIdController = /* @__PURE__ */ __name((request, response) => __async(void 0, null, function* () {
  const userId = request.params.userId;
  const httpResponse = yield deleteUserByIdService(userId);
  response.status(httpResponse.statusCode).json(httpResponse.body);
}), "deleteUserByIdController");
var updateUserController = /* @__PURE__ */ __name((request, response) => __async(void 0, null, function* () {
  const userId = request.params.userId;
  const updatedUser = new CreateUserDTO(request.body.name, request.body.email, request.body.password);
  const httpResponse = yield updateUserService(userId, updatedUser);
  response.status(httpResponse.statusCode).json(httpResponse.body);
}), "updateUserController");

// src/routes/routes.ts
var router = (0, import_express.Router)();
router.get("/notes/:userId", getAllNotesByUserIdController);
router.get("/notes/:userId/:noteId", getNoteByUserIdController);
router.get("/notes/:userId/:noteId/tags", getTagsByNoteIdController);
router.get("/notes/:userId/tags/:tagId", getNotesByTagIdController);
router.post("/notes/:userId", postNoteController);
router.delete("/notes/:userId/:noteId", deleteNoteByIdController);
router.put("/notes/:userId/:noteId", updateNoteController);
router.get("/tags/:userId", getAllTagsByUserIdController);
router.get("/tags/:userId/:tagId", getTagByUserIdController);
router.get("/tags/:userId/name/:tagName", getTagByUserIdAndTagNameController);
router.get("/tags/:userId/color/:tagColor", getTagsByUserIdAndColorController);
router.post("/tags/:userId", postTagController);
router.delete("/tags/:userId/:tagId", deleteTagByIdController);
router.put("/tags/:userId/:tagId", updateTagController);
router.get("/users/:userId", getUserByIdController);
router.post("/users", postUserController);
router.delete("/users/:userId", deleteUserByIdController);
router.put("/users/:userId", updateUserController);
var routes_default = router;

// src/application/app.ts
var import_cors = __toESM(require("cors"), 1);
function createApp() {
  const app = (0, import_express2.default)();
  app.use((0, import_express2.json)());
  app.use("/api", routes_default);
  app.use((0, import_cors.default)());
  const corsOptions = {
    methods: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ]
  };
  app.use((0, import_cors.default)());
  return app;
}
__name(createApp, "createApp");
var app_default = createApp;
