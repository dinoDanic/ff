import { sizeNumber } from "styles";
import { useWindowSize } from "./useWindowSIze";

export const useDeviceSize = () => {
  const { width } = useWindowSize();
  let isDevice;
  if (width! < sizeNumber.mobile) {
    isDevice = "mobile";
  } else if (width! > sizeNumber.mobile && width! < sizeNumber.desktop) {
    isDevice = "tablet";
  } else if (width! >= sizeNumber.desktop) {
    isDevice = "desktop";
  }

  const isMobile = isDevice === "mobile";
  const isTablet = isDevice === "tablet";
  const isDesktop = isDevice === "desktop";

  return { isMobile, isTablet, isDesktop };
};
