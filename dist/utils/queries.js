"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryArrayToString = void 0;
const queryArrayToString = (queries) => {
    const queryArray = Object.entries(queries);
    const result = queryArray.map((query) => query.join("=")).join("&");
    return result;
};
exports.queryArrayToString = queryArrayToString;
