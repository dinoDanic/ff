// some-inner-component.jsx
import { ArrowCircleLeftIcon } from "assets/svg";
import { useSwiper } from "swiper/react";

export const SlidePrevButton = () => {
  const swiper = useSwiper();

  return <ArrowCircleLeftIcon onClick={() => swiper.slidePrev()} />;
};
