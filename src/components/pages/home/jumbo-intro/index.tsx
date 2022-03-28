import { TextWithCheck } from "components/elements";
import { MainContainerStyle } from "components/layout";
import { BackgroundImages } from "./background-images";
import { Button } from "components/ui";
import React from "react";
import styled from "styled-components";
import { device, size } from "styles";

interface Props {}

export const JumboIntro: React.FC<Props> = () => {
  return (
    <Black>
      <Container>
        <Text>
          <Title>
            Your Modern <br /> Checkup
          </Title>
          <Subtitle>
            Personalized preventative care with top doctors and comprehensive
            lab testing from the comfort of your couch.
          </Subtitle>
          <Button width="250px" variant="lilic">
            Get Started
          </Button>
        </Text>
        <BackgroundImages />
        <CheckContainer>
          <TextWithCheck text="No membership fees" />
          <TextWithCheck text="$25 visits" />
          <TextWithCheck text="FSA/HSA eligible" />
        </CheckContainer>
      </Container>
    </Black>
  );
};

const Black = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  max-width: 100%;
  height: calc(100vh - 80px - 128px);
  position: relative;
  display: flex;
  flex-direction: column;
  ${device.mobile} {
    height: auto;
  }
`;

const Container = styled.div`
  ${MainContainerStyle};
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Text = styled.div`
  padding-top: 80px;
  margin-bottom: 55px;
`;

const CheckContainer = styled.div`
  margin-top: auto;
  margin-bottom: 37px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 55px;
`;

const Title = styled.h1`
  margin-bottom: 24px;
`;

const Subtitle = styled.h3`
  max-width: 724px;
  margin-bottom: 55px;
  ${device.tablet} {
    max-width: 60%;
  }
  ${device.mobile} {
    max-width: 100%;
  }
`;

const Images = styled.div`
  background-image: url();
`;
