import { Button } from "components/ui";
import React from "react";
import styled from "styled-components";
import { Benefit } from "./benefit";
import { benefits } from "./benefits";

export const Right = () => {
  return (
    <Container>
      <Title>Our care is diferent</Title>
      <Subtitle>
        Our preventive care can help you identify risk factors early so you can
        feel your best now and in the future.
      </Subtitle>
      <BenefitC>
        {benefits.map((b) => (
          <Benefit key={b.id} text={b.text} />
        ))}
      </BenefitC>
      <Button>See how it works</Button>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
`;

const Title = styled.h2``;
const Subtitle = styled.h4`
  margin-bottom: 1rem;
`;

const BenefitC = styled.div`
  margin-bottom: 3rem;
`;
