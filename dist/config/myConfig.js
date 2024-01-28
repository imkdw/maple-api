"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const myConfig = {
    nexonOpenApi: {
        url: "https://open.api.nexon.com",
        apiKey: process.env.X_NXOPEN_API_KEY,
    },
};
exports.default = myConfig;
