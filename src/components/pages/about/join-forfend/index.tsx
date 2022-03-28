import { Button } from "components/ui";
import React from "react";
import styled from "styled-components";

export const JoinForfend = () => {
  return (
    <Container>
      <Title>
        We couldn’t find modern, preventive care that was easy, accessible, and
        comprehensive. So we created it.
      </Title>
      <Message>Your health. Our purpose.</Message>
      <Button variant="lilic" width="435px">
        Join Forfend
      </Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 80px 0;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  max-width: 80%;
`;
const Message = styled.h3`
  margin-bottom: 20px;
`;
