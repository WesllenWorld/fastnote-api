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

// src/dtos/create-tag-dto.ts
var create_tag_dto_exports = {};
__export(create_tag_dto_exports, {
  CreateTagDTO: () => CreateTagDTO
});
module.exports = __toCommonJS(create_tag_dto_exports);
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
_ts_decorate([
  (0, import_class_validator.IsNotEmpty)({
    message: "Name is required"
  }),
  _ts_metadata("design:type", String)
], CreateTagDTO.prototype, "name", void 0);
_ts_decorate([
  (0, import_class_validator.IsNotEmpty)({
    message: "Color is required"
  }),
  (0, import_class_validator.Matches)(/^([A-Fa-f0-9]{6})$/, {
    message: "Invalid color"
  }),
  _ts_metadata("design:type", String)
], CreateTagDTO.prototype, "color", void 0);
_ts_decorate([
  (0, import_class_validator.IsUUID)(),
  (0, import_class_validator.IsNotEmpty)({
    message: "User ID in tag is required"
  }),
  _ts_metadata("design:type", String)
], CreateTagDTO.prototype, "userId", void 0);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateTagDTO
});
