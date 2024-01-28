import { AxiosError } from "axios";
import api from "./api";
import { queryArrayToString } from "../utils/queries";

interface GetParams {
  url: string;
  queries: { [key: string]: string | Date };
}

export const get = async <T>(params: GetParams): Promise<T> => {
  const queries = queryArrayToString(params.queries);
  const url = `${params.url}?${queries}`;

  try {
    const res = await api.get(url);
    return res.data;
  } catch (e: any) {
    return e.response?.data;
  }
};
