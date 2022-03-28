import React from "react";
import styled from "styled-components";

export const SlideBar = () => {
  return (
    <Container>
      <Bar />
    </Container>
  );
};

const Container = styled.div`
  width: 1px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Bar = styled.div`
  width: 10px;
  height: 130px;
  background-color: black;
  border-radius: 20px;
  transform: translateX(-5px);
`;
