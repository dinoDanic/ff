import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { ReviewItem } from "./review-item";
import { Reviews } from "./reviews";
import { SlideNextButton, SlidePrevButton } from "components/carousel";

export const TextCarousel = () => {
  const reviews = Reviews.map((r) => {
    return (
      <SwiperSlide key={r.id}>
        <ReviewItem text={r.text} />
      </SwiperSlide>
    );
  });
  return (
    <Container>
      <Swiper
        modules={[Navigation]}
        style={{
          height: "100%",
          width: "100%",
          textAlign: "center",
        }}
        spaceBetween={50}
        autoplay
        loop
      >
        {reviews}
        {/* <Arrows>
          <SlidePrevButton />
          <SlideNextButton />
        </Arrows> */}
      </Swiper>
    </Container>
  );
};

const Arrows = styled.div`
  width: 100%;
  background-color: red;
  justify-content: space-between;
  display: flex;
  position: absolute;
  top: 0px;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;
