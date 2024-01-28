"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = exports.dateFormat = void 0;
exports.dateFormat = {
    "YYYY-MM-DD": "yyyy-MM-dd",
    "YYYY-MM-DD HH:mm:ss": "yyyy-MM-dd HH:mm:ss",
};
const formatDate = (date, format) => {
    let result = "";
    if (format === "YYYY-MM-DD") {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        result = `${year}-${month}-${day}`;
    }
    else if (format === "YYYY-MM-DD HH:mm:ss") {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hour = String(date.getHours()).padStart(2, "0");
        const minute = String(date.getMinutes()).padStart(2, "0");
        const second = String(date.getSeconds()).padStart(2, "0");
        result = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    }
    return result;
};
exports.formatDate = formatDate;
