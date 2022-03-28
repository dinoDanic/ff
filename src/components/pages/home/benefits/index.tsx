import { MainContainer } from "components/layout";
import styled from "styled-components";
import { Left } from "./left";
import { Right } from "./right";

export const Benefits: React.FC = () => {
  return (
    <MainContainer>
      <Content>
        <Left />
        <Right />
      </Content>
    </MainContainer>
  );
};

const Content = styled.div`
  padding: ${({ theme }) => theme.spaces.lg} 0;
  display: flex;
  gap: 3rem;
`;
