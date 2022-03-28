import Image from "next/image";
import BigBoubleShapeSvg from "./svgs/big-bouble-shape.svg";
import BlueCircleSvg from "./svgs/blue-circle.svg";
import BlueShapeSvg from "./svgs/blue-shape.svg";
import ForfendShapeBlackSvg from "./svgs/forfend-shape-black.svg";

export const BigBoubleShape = ({ ...props }) => (
  <Image src={BigBoubleShapeSvg} {...props} />
);
export const BlueCircleShape = ({ ...props }) => (
  <Image src={BlueCircleSvg} {...props} />
);
export const BlueShape = ({ ...props }) => (
  <Image src={BlueShapeSvg} {...props} />
);
export const ForfendShapeBlack = ({ ...props }) => (
  <Image src={ForfendShapeBlackSvg} {...props} />
);
