import { DefaultTheme } from "styled-components";
import { SpaceProp } from "types";
import { bordersI, borders } from "./borders";
import { colors, colorsI } from "./colors";
import { space } from "./space";
import { spaces, spacesI } from "./spaces";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: colorsI;
    borders: bordersI;
    space: SpaceProp | any;
    spaces: spacesI;
  }
}

export const lightTheme: DefaultTheme = {
  colors,
  borders,
  space,
  spaces,
};
