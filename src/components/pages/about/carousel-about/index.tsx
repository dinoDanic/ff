import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { SlideItem } from "./slide-item";
import { content } from "./content";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";

export const CarouselAbout = () => {
  return (
    <>
      <Container>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          autoplay
          style={{ paddingTop: "80px", width: "100%", height: "100%" }}
          loop
        >
          {content.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <SlideItem
                  title={slide.title}
                  message={slide.message}
                  image={slide.image}
                  link={slide.link}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: black;
  border-radius: 20px;
  color: white;
  padding: 55px;
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: white;
    margin-right: 26px !important;
  }
`;
