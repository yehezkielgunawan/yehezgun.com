import { NotionAPI } from "notion-client";
import { ExtendedRecordMap } from "notion-types";

import {
  API_HOST,
  NOTION_BLOG_ID,
  NOTION_EXPERIENCES,
  NOTION_PROJECTS,
} from "../../constants/config";
import { Articles, Experiences, Projects } from "./types";

export const getAllPosts = async (): Promise<Articles> => {
  return await fetch(`${API_HOST}/table/${NOTION_BLOG_ID}`).then((res) => {
    return res.json();
  });
};

export const getAllProjects = async (): Promise<Projects> => {
  return await fetch(`${API_HOST}/table/${NOTION_PROJECTS}`).then((res) => {
    return res.json();
  });
};

export const getAllExperiences = async (): Promise<Experiences> => {
  return await fetch(`${API_HOST}/table/${NOTION_EXPERIENCES}`).then((res) => {
    return res.json();
  });
};

export const getBlocks = async (postId: string): Promise<ExtendedRecordMap> => {
  const notion = new NotionAPI();

  return await notion.getPage(postId.split("-").join(""));
};
