import { MainContainer } from "components/layout";
import React from "react";
import styled from "styled-components";

export const TakeCare: React.FC = () => {
  return (
    <MainContainer>
      <Container>
        <Left>
          <Img src="/images/how-it-works/round-2ppl.png" />
        </Left>
        <Right>
          <Text>
            You take care of you. <br />
            We take care of the rest.
          </Text>
        </Right>
      </Container>
    </MainContainer>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  padding: 60px 50px;
  border-radius: 30px;
  display: flex;
  gap: 30px;
  margin-bottom: 55px;
`;
const Left = styled.div`
  flex: 0.3;
`;
const Right = styled.div`
  flex: 0.7;
  padding-top: 20px;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const Text = styled.h2``;
