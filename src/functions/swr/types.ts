export type SingleProject = {
  project_title: string;
  image_url?: Array<SingleProjectImage>;
  project_url: string;
  made_using: Array<string>;
  description: string;
};

export type SingleProjectImage = {
  name: string;
  rawUrl: string;
  url: string;
};

export type Projects = Array<SingleProject>;
