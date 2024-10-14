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

// src/dtos/create-note-dto.ts
var create_note_dto_exports = {};
__export(create_note_dto_exports, {
  CreateNoteDTO: () => CreateNoteDTO
});
module.exports = __toCommonJS(create_note_dto_exports);
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
_ts_decorate([
  (0, import_class_validator.IsNotEmpty)({
    message: "Content is required"
  }),
  _ts_metadata("design:type", String)
], CreateNoteDTO.prototype, "content", void 0);
_ts_decorate([
  (0, import_class_validator.IsUUID)(void 0, {
    each: true
  }),
  _ts_metadata("design:type", Array)
], CreateNoteDTO.prototype, "tags", void 0);
_ts_decorate([
  (0, import_class_validator.IsUUID)(),
  (0, import_class_validator.IsNotEmpty)({
    message: "User ID in note is required"
  }),
  _ts_metadata("design:type", String)
], CreateNoteDTO.prototype, "userId", void 0);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateNoteDTO
});
