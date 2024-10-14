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

// src/controllers/users-controller.ts
var users_controller_exports = {};
__export(users_controller_exports, {
  deleteUserByIdController: () => deleteUserByIdController,
  getUserByIdController: () => getUserByIdController,
  postUserController: () => postUserController,
  updateUserController: () => updateUserController
});
module.exports = __toCommonJS(users_controller_exports);

// src/services/users-services.ts
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

// src/db/data-source.ts
var import_reflect_metadata = require("reflect-metadata");
var import_typeorm2 = require("typeorm");
var { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } = process.env;
var AppDataSource = new import_typeorm2.DataSource({
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

// src/services/users-services.ts
var bcrypt = __toESM(require("bcrypt"));

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
  if (!(0, import_class_validator.isUUID)(userId)) {
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
  const validationErrors = yield (0, import_class_validator.validate)(newUserDTO);
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
  if (!(0, import_class_validator.isUUID)(userId)) {
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
  if (!(0, import_class_validator.isUUID)(userId)) {
    responseToController = yield badRequest("Invalid user UUID provided");
  } else {
    const validationErrors = yield (0, import_class_validator.validate)(updatedUserDTO);
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
var import_class_validator2 = require("class-validator");
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
_ts_decorate2([
  (0, import_class_validator2.IsNotEmpty)({
    message: "Name is required"
  }),
  _ts_metadata2("design:type", String)
], CreateUserDTO.prototype, "name", void 0);
_ts_decorate2([
  (0, import_class_validator2.IsEmail)({}, {
    message: "Invalid email address"
  }),
  _ts_metadata2("design:type", String)
], CreateUserDTO.prototype, "email", void 0);
_ts_decorate2([
  (0, import_class_validator2.MinLength)(4, {
    message: "Password must have at least 4 characters"
  }),
  _ts_metadata2("design:type", String)
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  deleteUserByIdController,
  getUserByIdController,
  postUserController,
  updateUserController
});
