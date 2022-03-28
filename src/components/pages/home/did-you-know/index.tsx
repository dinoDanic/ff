import { InfoBox } from "components/elements";
import { MainContainer } from "components/layout";
import React from "react";
import styled from "styled-components";

export const DidYouKnow = () => {
  return (
    <MainContainer>
      <Container>
        <InfoBox>
          <Title>DID YOU KNOW...</Title>
          <Message>
            80% of heart attacks, strokes, and diabetes and 40% of cancers can
            be prevented or delayed?
          </Message>
        </InfoBox>
        <InfoBox>
          <Title>DID YOU KNOW...</Title>
          <Message>
            92% have at least one mineral or vitamin deficiency?
          </Message>
        </InfoBox>
      </Container>
    </MainContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* margin: 0 -4rem; */
  gap: 1rem;
  margin-bottom: 3rem;
`;

const Title = styled.h5`
  text-align: center;
  margin-bottom: 1rem;
`;
const Message = styled.h3`
  text-align: center;
`;
