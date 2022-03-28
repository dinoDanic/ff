import React from "react";
import styled from "styled-components";

interface Props {
  item: string;
}

export const Item: React.FC<Props> = ({ item }) => {
  return (
    <Container>
      <Icon>+</Icon>
      <Content>{item}</Content>
    </Container>
  );
};

const Container = styled.div`
  min-width: 50%;
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Content = styled.h4``;

const Icon = styled.h3`
  padding-top: 8px;
`;
