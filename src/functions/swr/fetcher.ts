import axios, { AxiosResponse } from "axios";
import { BlockMapType } from "react-notion";
import useSWR from "swr";
import {
  API_HOST,
  NOTION_BLOG_ID,
  NOTION_PROJECTS,
} from "../../constants/config";
import { Articles, Projects } from "./types";

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

export const getAllPosts = async (): Promise<Articles> => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => {
    return res.json();
  });
};

export const getAllProjects = async (): Promise<Projects> => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_PROJECTS}`
  ).then((res) => {
    return res.json();
  });
};

export const getBlocks = async (postId: string): Promise<BlockMapType> => {
  return await fetch(`https://notion-api.splitbee.io/v1/page/${postId}`).then(
    (res) => res.json()
  );
};
