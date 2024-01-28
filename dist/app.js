"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_service_1 = require("./api/api.service");
const date_1 = require("./utils/date");
/**
 * 캐릭터의 이름
 */
const CHARACTER_NAME = "통신반";
/**
 * API 호출 기준 날짜
 * 메이플 API는 호출 당일 전날까지의 데이터를 보여주므로 전날로 설정
 */
const NOW = new Date();
NOW.setDate(NOW.getDate() - 1);
const getOcid = (characterName) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `/maplestory/v1/id`;
    const queries = { character_name: characterName };
    const res = yield (0, api_service_1.get)({ url, queries });
    return res.ocid;
});
const getBasic = (ocid) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `/maplestory/v1/character/basic`;
    const queries = { ocid, date: (0, date_1.formatDate)(NOW, "YYYY-MM-DD") };
    const res = yield (0, api_service_1.get)({ url, queries });
    return res;
});
const getItemEquipment = (ocid) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `/maplestory/v1/character/item-equipment`;
    const queries = { ocid, date: (0, date_1.formatDate)(NOW, "YYYY-MM-DD") };
    const res = yield (0, api_service_1.get)({ url, queries });
    return res;
});
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    const ocid = yield getOcid(CHARACTER_NAME);
    const itemEquipment = yield getItemEquipment(ocid);
});
init();
