import React from "react";
import styled from "styled-components";
import { CarouselOurTeam } from "../carousel-our-team";

export const OurTeam = () => {
  return (
    <Container>
      <Title>Our Team</Title>
      <Message>
        We listen, empower and guide you to better health. You’re in good hands.
      </Message>
      <CarouselOurTeam />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 55px;
`;

const Title = styled.h2`
  text-align: center;
`;

const Message = styled.h3`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;
