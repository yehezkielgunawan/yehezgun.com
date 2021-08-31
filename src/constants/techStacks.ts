import { IconType } from "react-icons";
import { FaAngular, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextDotJs } from "react-icons/si";

type SingleTechStack = {
  name: string;
  icon: IconType;
  description: string;
};

export const techStackList: Array<SingleTechStack> = [
  {
    name: "React",
    icon: FaReact,
    description:
      "Currently this is my current learning path. I'm in love with React.",
  },
  {
    name: "Javascript",
    icon: FaJs,
    description:
      "My based programming language is Javascript. But currently, I'm learning Typescript because it's readibility and type based coding.",
  },
  {
    name: "Next JS",
    icon: SiNextDotJs,
    description:
      "Next.js, this is my current go-to framework because of the static generation, dynamic paths, and built-in api.",
  },
  {
    name: "Node JS",
    icon: FaNodeJs,
    description:
      "Node.js, simple backend language with Javascript based. I just used this as a package manager with NPM.",
  },
  {
    name: "Angular",
    icon: FaAngular,
    description:
      "I used this when I work as a frontend engineer for the first time. But I rarely use this framework anymore in my personal projects.",
  },
];
