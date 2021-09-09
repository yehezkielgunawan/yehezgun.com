import { IconType } from "react-icons";
import { FaAngular, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextDotJs, SiTypescript } from "react-icons/si";

type SingleTechStack = {
  name: string;
  icon: IconType;
  description: string;
  footer_url: string;
};

export const techStackList: Array<SingleTechStack> = [
  {
    name: "React",
    icon: FaReact,
    description:
      "Currently this is my current learning path. I'm in love with React.",
    footer_url: "https://reactjs.org/",
  },
  {
    name: "Typescript",
    icon: SiTypescript,
    description:
      "Typescript is my current favourite programming language. It's syntax is like the Javascript, but with the declared types and improved readibility.",
    footer_url: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "Next JS",
    icon: SiNextDotJs,
    description:
      "Next.js, this is my current go-to framework because of the static generation, dynamic paths, and built-in api.",
    footer_url: "https://nextjs.org/",
  },
  {
    name: "Node JS",
    icon: FaNodeJs,
    description:
      "Node.js, simple backend language with Javascript based. I just used this as a package manager with NPM.",
    footer_url: "https://nodejs.org/en/",
  },
  {
    name: "Angular",
    icon: FaAngular,
    description:
      "Angular, I used this when I work as a frontend engineer for the first time. But I rarely use this framework anymore in my personal projects.",
    footer_url: "https://angular.io/",
  },
];
