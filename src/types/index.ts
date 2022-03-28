export interface IMenuLink {
  id: number;
  name: string;
  link: string;
}

export interface ChildrenProps {
  children:
    | React.ReactChildren
    | JSX.Element
    | JSX.Element[]
    | React.ReactNode
    | React.ReactNode[];
}

export type SpaceSize =
  | "smaller"
  | "small"
  | "big"
  | "bigger"
  | "biggest"
  | "base"
  | 0
  | "0";

/**
 * The standard interface for primitives
 */
export interface SpaceProp {
  smaller: string;
  small: string;
  big: string;
  bigger: string;
  biggest: string;
  base: string;
}

export interface LinkType {
  id: number;
  name: string;
  link: string;
}

export interface CarouselDefaultType {
  id?: number;
  title: string;
  message: string;
  image: string;
  link: string;
}

export interface PractitionerType {
  id?: number;
  name: string;
  title: string;
  img: string;
  alt: string;
  desc: string;
}

export interface AccordionType {
  id?: number;
  question: string;
  answer: string;
}
