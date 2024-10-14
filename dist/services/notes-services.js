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

// src/services/notes-services.ts
var notes_services_exports = {};
__export(notes_services_exports, {
  deleteNoteByIdService: () => deleteNoteByIdService,
  getAllNotesByUserIdService: () => getAllNotesByUserIdService,
  getNoteByUserIdService: () => getNoteByUserIdService,
  getNotesByTagIdService: () => getNotesByTagIdService,
  getTagsByNoteIdService: () => getTagsByNoteIdService,
  postNoteService: () => postNoteService,
  updateNoteService: () => updateNoteService
});
module.exports = __toCommonJS(notes_services_exports);
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
  //entities: ["src/entities/*{.ts,.js}"],
  entities: [
    User,
    Note,
    Tag
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

// src/repositories/tag-repository.ts
var import_typeorm5 = require("typeorm");
var tagRepository = AppDataSource.getRepository(Tag);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  deleteNoteByIdService,
  getAllNotesByUserIdService,
  getNoteByUserIdService,
  getNotesByTagIdService,
  getTagsByNoteIdService,
  postNoteService,
  updateNoteService
});
