import React from "react";
import styled from "styled-components";
import { ChildrenProps } from "types";

export const Container: React.FC<ChildrenProps> = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

const ContainerStyle = styled.div``;
