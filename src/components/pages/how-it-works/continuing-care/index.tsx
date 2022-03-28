import { MainContainer } from "components/layout";
import { Button } from "components/ui";
import React from "react";
import styled from "styled-components";
import { listCare } from "./list";
import { SingleCare } from "./single-care";

export const ContinuingCare: React.FC = () => {
  const list = listCare.map((item) => (
    <SingleCare key={item.id} title={item.title} message={item.message} />
  ));
  return (
    <MainContainer>
      <Container>
        <Left>
          <h2>Continuing Care</h2>
          <h3>If You Need It</h3>
        </Left>
        <Right>
          <Message>Make changes on your terms with our support.</Message>
          {list}
          <ButtonHold>
            <Button width="100%">Join Now</Button>
          </ButtonHold>
        </Right>
      </Container>
    </MainContainer>
  );
};

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 0.3;
`;
const Right = styled.div`
  flex: 0.7;
`;

const Message = styled.h4`
  margin-left: 55px;
`;

const ButtonHold = styled.div`
  margin-left: 50px;
  margin-top: 30px;
`;
