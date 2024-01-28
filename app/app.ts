import { get } from "./api/api.service";
import myConfig from "./config/myConfig";
import { MapleOpenApi } from "./types/maple.interface";
import { formatDate } from "./utils/date";

/**
 * 캐릭터의 이름
 */
const CHARACTER_NAME = myConfig.nexonOpenApi.characterName;

/**
 * API 호출 기준 날짜
 * 메이플 API는 호출 당일 전날까지의 데이터를 보여주므로 전날로 설정
 */
const NOW = new Date();
NOW.setDate(NOW.getDate() - 1);

const getOcid = async (characterName: string): Promise<string> => {
  const url = `/maplestory/v1/id`;
  const queries = { character_name: characterName };

  const res = await get<MapleOpenApi.GetOcid.Response>({ url, queries });
  return res.ocid;
};

const getBasic = async (ocid: string) => {
  const url = `/maplestory/v1/character/basic`;
  const queries = { ocid, date: formatDate(NOW, "YYYY-MM-DD") };

  const res = await get<MapleOpenApi.GetBasic.Response>({ url, queries });
  return res;
};

const getItemEquipment = async (ocid: string) => {
  const url = `/maplestory/v1/character/item-equipment`;
  const queries = { ocid, date: formatDate(NOW, "YYYY-MM-DD") };

  const res = await get<MapleOpenApi.GetItemEquipment.Response>({ url, queries });
  return res;
};

const init = async () => {
  const ocid = await getOcid(CHARACTER_NAME);
  const itemEquipment = await getItemEquipment(ocid);
};

init();
