import React from "react";
import styled from "styled-components";

interface Props {
  title?: string;
  message?: string;
  children: JSX.Element[];
}

export const InfoBox: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 41px 36px;
  max-width: 100%;
  min-with: 100%;
  flex: 1;
  height: 352px;
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 500px;
  padding: 1rem 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 5rem;
`;
