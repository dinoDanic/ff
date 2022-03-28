import React from "react";
import styled from "styled-components";

export const SectionInfo = () => {
  return <Container>SectionInfo</Container>;
};

const Container = styled.div`
  width: calc(100% - 20px);
  height: 150px;
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;
  position: absolute;
  bottom: 10px;
  margin-right: 10px;
  margin-left: 10px;
`;
