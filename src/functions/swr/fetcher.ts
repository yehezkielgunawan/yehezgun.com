import axios, { AxiosResponse } from "axios";
import useSWR from "swr";
import { API_HOST } from "../../constants/config";
import { Projects } from "./types";

export const fetcher = <ResType>(pageId: string) =>
  axios
    .get(`${API_HOST}${pageId}`)
    .then((res: AxiosResponse<ResType>) => res.data);

export const useNotionAPI = (pageId: string) => {
  const { data, error } = useSWR<Projects>(`/${pageId}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
