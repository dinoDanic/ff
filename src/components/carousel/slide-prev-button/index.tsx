// some-inner-component.jsx
import { ArrowCircleRightIcon } from "assets/svg";
import { useSwiper } from "swiper/react";

export const SlideNextButton = () => {
  const swiper = useSwiper();

  return <ArrowCircleRightIcon onClick={() => swiper.slideNext()} />;
};
