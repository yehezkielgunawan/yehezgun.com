import { FaDev, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IconType } from "react-icons/lib";

type SingleContact = {
  name: string;
  icon: IconType;
  link_route: string;
};

export const contactList: Array<SingleContact> = [
  {
    name: "Linkedin",
    icon: FaLinkedin,
    link_route: "https://www.linkedin.com/in/yehezkiel-gunawan-595128138/",
  },
  {
    name: "Github",
    icon: FaGithub,
    link_route: "https://github.com/yehezkielgunawan",
  },
  {
    name: "Diskusi Tech",
    icon: FaDev,
    link_route: "https://diskusi.tech/yehezkielgunawan",
  },
  {
    name: "Email",
    icon: MdEmail,
    link_route: "mailto:yehezkiel.gunawan28@gmail.com",
  },
];
