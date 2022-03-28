import { BlueShape } from "assets/svg";
import { MainContainer } from "components/layout";
import { Button } from "components/ui";
import React from "react";
import styled from "styled-components";

export const YourHealth = () => {
  return (
    <MainContainer>
      <Container>
        <Shape>
          <BlueShape />
        </Shape>
        <ContentHold>
          <Content>
            <Title>
              Your Health. <br /> Our Pourpose
            </Title>
            <Button variant="light" width="340px">
              Get Started
            </Button>
          </Content>
        </ContentHold>
      </Container>
    </MainContainer>
  );
};

const Container = styled.div`
  height: 600px;
  display: flex;
  align-items: center;
  position: relative;
`;

const Shape = styled.div`
  position: absolute;
  left: -300px;
`;
const ContentHold = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
`;

const Content = styled.div``;

const Title = styled.h2`
  margin-bottom: 20px;
`;
