import { NextPage } from "next";
import React from "react";
import styled, { css } from "styled-components";
import { device, size } from "styles/theme";
import { Flex } from "../Flex";

interface Props {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

export const MainContainer: NextPage<Props> = ({ children }) => {
  return (
    <Container>
      <Children>{children}</Children>
    </Container>
  );
};

export const MainContainerStyle = css`
  margin: 0 auto;
  padding: 0 20px;
  ${device.desktop} {
    max-width: ${size.desktop};
    width: 100%;
  }
`;

const Children = styled.div`
  margin: 0 auto;
`;

const Container = styled.div`
  ${MainContainerStyle}
`;
