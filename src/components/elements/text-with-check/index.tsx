import { CheckPurpleIcon } from "assets/svg";
import { Space } from "components/layout";
import styled from "styled-components";
import { device } from "styles";

interface Props {
  text: string;
}

export const TextWithCheck: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <Icon>
        <CheckPurpleIcon />
      </Icon>
      <Space right="base" />
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.div`
  color: ${({ theme }) => theme.colors.purple};
  display: flex;
  align-items: center;
  ${device.mobile} {
    min-width: 100%;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Icon = styled.div``;
const Text = styled.h3`
  text-transform: uppercase;
`;
