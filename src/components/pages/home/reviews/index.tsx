import { BigBoubleShape } from "assets/svg";
import { MainContainer, MainContainerStyle } from "components/layout";
import React from "react";
import styled from "styled-components";
import { TextCarousel } from "../text-carousel";

export const Reviews = () => {
  return (
    <MainContainer>
      <Container>
        <Title>What people are saying</Title>
        <ShapeContainer>
          <ImageHold>
            <BigBoubleShape />
          </ImageHold>
          <TextCarousel />
        </ShapeContainer>
      </Container>
    </MainContainer>
  );
};

const Container = styled.div`
  /* margin: 0 -4rem; */
  margin-bottom: 3rem;
`;

const ShapeContainer = styled.div`
  height: 350px;
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const ImageHold = styled.div`
  position: absolute;
`;
