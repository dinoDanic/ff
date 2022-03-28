import React from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FreeMode, Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import { CarouselPractitioner } from "./carousel-practitioner";
import { practitioners } from "./practitioners";
import { ArrowCircleRightIcon } from "assets/svg";
import styled from "styled-components";
import { SlideNextButton, SlidePrevButton } from "components/carousel";

export const CarouselOurTeam = () => {
  const swiper = useSwiper();
  return (
    <>
      <Swiper
        cssMode={true}
        slidesPerView={3}
        freeMode={true}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation, FreeMode, Autoplay]}
        loop={true}
        style={{ paddingTop: "80px", width: "100%", height: "100%" }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
      >
        <Arrows>
          <SlidePrevButton />
          <SlideNextButton />
        </Arrows>
        {practitioners.map((p) => {
          const { name, title, img, alt, desc, id } = p;
          return (
            <SwiperSlide key={id}>
              <CarouselPractitioner
                name={name}
                title={title}
                img={img}
                alt={alt}
                desc={desc}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

const Arrows = styled.div`
  display: flex;
  gap: 10px;
  height: 57px;
  position: absolute;
  top: 0px;
  right: 0;
`;
const ArrowLeft = styled.div`
  transform: rotate(180deg);
`;
const ArrowRight = styled.div``;
