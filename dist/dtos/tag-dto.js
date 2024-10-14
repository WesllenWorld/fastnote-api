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

// src/dtos/tag-dto.ts
var tag_dto_exports = {};
__export(tag_dto_exports, {
  TagDTO: () => TagDTO
});
module.exports = __toCommonJS(tag_dto_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TagDTO
});
