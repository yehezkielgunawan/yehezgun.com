import Airtable, { FieldSet, Record } from "airtable";
import { Records } from "airtable/lib/records";
import { NotionAPI } from "notion-client";
import { ExtendedRecordMap } from "notion-types";

import {
  AIRTABLE_BASE,
  API_HOST,
  API_KEY,
  NOTION_BLOG_ID,
  NOTION_EXPERIENCES,
} from "../../constants/config";
import { Articles, Experiences, SingleArticle } from "./types";

const base = new Airtable({ apiKey: API_KEY }).base(AIRTABLE_BASE);

export const getAllPosts = async (): Promise<Articles> => {
  return await fetch(`${API_HOST}/table/${NOTION_BLOG_ID}`).then((res) => {
    return res.json();
  });
};
// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = (records: Records<FieldSet>) => {
  return records.map((record: Record<FieldSet>) => minifyRecord(record));
};

// gets the data we want and puts it into variables
const minifyRecord = (record: Record<FieldSet>) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

export const getAllProjectsTable = async () => {
  const records = await base("Projects")
    .select({ sort: [{ field: "date_added", direction: "desc" }] })
    .all();
  const minifiedRecords = getMinifiedRecords(records);
  return minifiedRecords;
};

export const getSelectedPost = async (slug: string): Promise<SingleArticle> => {
  return getAllPosts().then((posts: Articles) => {
    return posts.find((t: SingleArticle) => t.slug === slug);
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
