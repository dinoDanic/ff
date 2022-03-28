import { CheckIconBlackIcon } from "assets/svg";
import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  message: string;
}

export const SingleCare: React.FC<Props> = ({ message, title }) => {
  return (
    <Container>
      <Check>
        <CheckIconBlackIcon width="24px" height="24px" />
      </Check>
      <Content>
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 50px 0;
  display: flex;
  gap: 30px;
  border-bottom: 1px solid black;
  &:last-child {
    border-bottom: 0;
  }
`;

const Check = styled.div`
  min-width: 24px;
  margin-top: 5px;
`;
const Content = styled.div``;
const Title = styled.h3``;
const Message = styled.h4``;
