import Image from "next/image";
import ForfendLogoWhiteSvg from "./svgs/forfend-logo-white.svg";
import ForfendLogoBlackSvg from "./svgs/forfend-logo-black.svg";
import JoinNowLightSvg from "./svgs/join-now-light.svg";
import ForfendIconWhiteSvg from "./svgs/forfend-icon-white.svg";

export const ForfendLogoBlack = ({ ...props }) => (
  <Image src={ForfendLogoBlackSvg} {...props} />
);

export const ForfendLogoWhite = ({ ...props }) => (
  <Image src={ForfendLogoWhiteSvg} {...props} />
);

export const JoinNowLightIcon = ({ ...props }) => (
  <Image src={JoinNowLightSvg} {...props} />
);

export const ForfendIconWhite = ({ ...props }) => (
  <Image src={ForfendIconWhiteSvg} {...props} />
);
