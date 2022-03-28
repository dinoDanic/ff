import { LinkType } from "types";
import { routes } from "modules/routes";

export const companyLinks: LinkType[] = [
  { id: 0, name: "About", link: routes.about },
  { id: 1, name: "How It Works", link: routes.howItWorks },
  { id: 2, name: "Join Our Team", link: routes.joinOurTeam },
  { id: 3, name: "Blog", link: routes.blog },
  { id: 4, name: "Instagram", link: routes.instagram },
  { id: 5, name: "Instagram", link: routes.instagram },
  { id: 6, name: "Contact Us", link: "mailto:hello@forfendhealth.com" },
];

export const resourcesLinks: LinkType[] = [
  { id: 0, name: "FAQ's", link: routes.FAQs },
  { id: 1, name: "Legal", link: routes.legal },
];
