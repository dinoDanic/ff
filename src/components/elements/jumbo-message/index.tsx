import { MainContainer } from "components/layout";
import React from "react";
import styled from "styled-components";

interface Props {}

export const JumboMessage: React.FC<Props> = ({ children }) => {
  return (
    <Color>
      <MainContainer>
        <Content>{children}</Content>
      </MainContainer>
    </Color>
  );
};

const Color = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
