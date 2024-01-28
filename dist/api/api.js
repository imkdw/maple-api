"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const myConfig_1 = __importDefault(require("../config/myConfig"));
const api = axios_1.default.create({
    baseURL: "https://open.api.nexon.com",
    headers: {
        "x-nxopen-api-key": myConfig_1.default.nexonOpenApi.apiKey,
    },
});
exports.default = api;
