import { routes } from "modules/routes";
import { IMenuLink } from "types";

export const menuLinks: IMenuLink[] = [
  { id: 0, name: "About", link: routes.about },
  { id: 1, name: "How It Works", link: routes.howItWorks },
  { id: 2, name: "Blog", link: routes.blog },
];
