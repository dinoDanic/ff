import { CheckRoundBlackIcon } from "assets/svg";
import styled from "styled-components";

interface Props {
  text: string;
}

export const Benefit: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <Icon>
        <CheckRoundBlackIcon />
      </Icon>
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  padding: 33px 0;
`;

const Text = styled.h4``;

const Icon = styled.div`
  min-width: 24px;
  margin-right: 38px;
  margin-top: 5px;
`;
