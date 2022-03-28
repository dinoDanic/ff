import Image from "next/image";
import CheckPurpleSvg from "./svgs/check-purple.svg";
import CheckRoundBlackSvg from "./svgs/check-round-black.svg";
import ArrowRightBlackSvg from "./svgs/arrow-right-black.svg";
import ArrowRightWhitekSvg from "./svgs/arrow-right-white.svg";
import ArrowCirleRightSvg from "./svgs/arrow-circle-right.svg";
import ArrowCirleLeftSvg from "./svgs/arrow-circle-left.svg";
import CheckIconBlackSvg from "./svgs/check-icon-black.svg";
import PlusExpandSvg from "./svgs/plus-expand.svg";
import PlusMinimizeSvg from "./svgs/plus-minimize.svg";
import SahSvg from "./svgs/sah.svg";
import LabWorkSvg from "./svgs/lab-work.svg";
import ResulutsSvg from "./svgs/resuluts.svg";
import ConqureSvg from "./svgs/conqure.svg";

export const CheckPurpleIcon = ({ ...props }) => (
  <Image src={CheckPurpleSvg} {...props} />
);

export const CheckRoundBlackIcon = ({ ...props }) => (
  <Image src={CheckRoundBlackSvg} {...props} />
);

export const ArrowRightBlackIcon = ({ ...props }) => (
  <Image src={ArrowRightBlackSvg} {...props} />
);

export const ArrowRightWhiteIcon = ({ ...props }) => (
  <Image src={ArrowRightWhitekSvg} {...props} />
);

export const ArrowCircleRightIcon = ({ ...props }) => (
  <Image src={ArrowCirleRightSvg} {...props} />
);

export const ArrowCircleLeftIcon = ({ ...props }) => (
  <Image src={ArrowCirleLeftSvg} {...props} />
);

export const CheckIconBlackIcon = ({ ...props }) => (
  <Image src={CheckIconBlackSvg} {...props} />
);
export const PlusExpandIcon = ({ ...props }) => (
  <Image src={PlusExpandSvg} {...props} />
);
export const PlusMinimizeIcon = ({ ...props }) => (
  <Image src={PlusMinimizeSvg} {...props} />
);

export const SahIcon = ({ ...props }) => <Image src={SahSvg} {...props} />;
export const LabWorkIcon = ({ ...props }) => (
  <Image src={LabWorkSvg} {...props} />
);
export const ResulutsIcon = ({ ...props }) => (
  <Image src={ResulutsSvg} {...props} />
);
export const ConqureIcon = ({ ...props }) => (
  <Image src={ConqureSvg} {...props} />
);
