import { routes } from "modules/routes";
import { CarouselDefaultType } from "types";

export const content: CarouselDefaultType[] = [
  {
    id: 0,
    title: "Convenient",
    message:
      "Virtual visits from the comfort of your couch that start on time. The way it should be, right?",
    link: routes.appEligibility,
    image: "1.png",
  },
  {
    id: 1,
    title: "Personalized",
    message:
      "It all starts with you. No two people are the same, so no two Forfend care plans are the same.",
    link: routes.appEligibility,
    image: "2.png",
  },
  {
    id: 2,
    title: "Comprehensive",
    message:
      "Our care considers the whole you. What does that mean?Well, we go deep on your current health (physical and mental), as well as your lifestyle, family health history and labs.",
    link: routes.appEligibility,
    image: "3.png",
  },
  {
    id: 3,
    title: "Proactive",
    message:
      "Check in with us and start living your best life. We take the guesswork out of being proactive so you can get ahead of early signs of chronic disease at the earliest phases.",
    link: routes.appEligibility,
    image: "4.png",
  },
];
