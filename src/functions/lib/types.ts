export type SingleProject = {
  project_title: string;
  image_url?: Array<SingleProjectImg>;
  project_url: string;
  made_using: Array<SingleProjectImg>;
  description: string;
  date_added: string;
};

export type SingleProjectImage = {
  name: string;
  rawUrl: string;
  url: string;
};

export type SingleProjectImg = {
  filename: string;
  height: number;
  id: string;
  size: number;
  thumbnails: {
    full: {
      height: number;
      url: string;
      width: number;
    };
    large: {
      height: number;
      url: string;
      width: number;
    };
    small: {
      height: number;
      url: string;
      width: number;
    };
  };
  type: string;
  url: string;
  width: number;
};

export type SingleProjectsRes = {
  id: string;
  fields: SingleProject;
};

export type Projects = Array<SingleProjectsRes>;

export type SingleArticle = {
  id: string;
  title: string;
  slug: string;
  date: string;
  article_image?: Array<SingleProjectImage>;
  external_url?: string;
  lang: string;
};

export type Articles = Array<SingleArticle>;

export type SingleExperience = {
  role_name: string;
  company_name: string;
  duration: string;
};

export type Experiences = Array<SingleExperience>;
