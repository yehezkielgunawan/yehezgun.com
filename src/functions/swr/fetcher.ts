import axios, { AxiosResponse } from "axios";
import useSWR from "swr";
import { API_HOST } from "../../constants/config";

export const fetcher = <ResType>(pageId: string) =>
  axios
    .get(`${API_HOST}${pageId}`)
    .then((res: AxiosResponse<ResType>) => res.data);

export const useNotionAPI = <ResType>(pageId: string) => {
  const { data, error } = useSWR<ResType>(`/${pageId}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
