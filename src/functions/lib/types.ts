export type SingleProject = {
  project_title: string;
  image_url?: Array<SingleProjectImage>;
  project_url: string;
  made_using: Array<SingleProjectImage>;
  description: string;
};

export type SingleProjectImage = {
  name: string;
  rawUrl: string;
  url: string;
};

export type Projects = Array<SingleProject>;

export type SingleArticle = {
  id: string;
  title: string;
  slug: string;
  date: string;
  article_image?: Array<SingleProjectImage>;
  external_url?: string;
};

export type Articles = Array<SingleArticle>;

export type SingleExperience = {
  role_name: string;
  company_name: string;
  duration: string;
};

export type Experiences = Array<SingleExperience>;
