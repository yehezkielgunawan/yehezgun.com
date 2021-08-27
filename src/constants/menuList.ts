type SingleMenu = {
  label: string;
  route: string;
};

export const menuList: Array<SingleMenu> = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Projects",
    route: "/projects",
  },
  {
    label: "Articles",
    route: "/articles",
  },
  {
    label: "About Me",
    route: "/aboutme",
  },
];
