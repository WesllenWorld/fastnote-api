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

// src/dtos/create-user-dto.ts
var create_user_dto_exports = {};
__export(create_user_dto_exports, {
  CreateUserDTO: () => CreateUserDTO
});
module.exports = __toCommonJS(create_user_dto_exports);
var import_class_validator = require("class-validator");
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
_ts_decorate([
  (0, import_class_validator.IsNotEmpty)({
    message: "Name is required"
  }),
  _ts_metadata("design:type", String)
], CreateUserDTO.prototype, "name", void 0);
_ts_decorate([
  (0, import_class_validator.IsEmail)({}, {
    message: "Invalid email address"
  }),
  _ts_metadata("design:type", String)
], CreateUserDTO.prototype, "email", void 0);
_ts_decorate([
  (0, import_class_validator.MinLength)(4, {
    message: "Password must have at least 4 characters"
  }),
  _ts_metadata("design:type", String)
], CreateUserDTO.prototype, "password", void 0);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateUserDTO
});
