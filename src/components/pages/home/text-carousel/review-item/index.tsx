import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

export const ReviewItem: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <h4>{text}</h4>
    </Container>
  );
};

const Container = styled.div``;
