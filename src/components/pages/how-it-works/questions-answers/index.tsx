import { Accourdion } from "components/elements";
import { MainContainer } from "components/layout";
import { questions } from "pages/how-it-works/questions";
import React from "react";
import styled from "styled-components";

export const QuestionsAnswers: React.FC = () => {
  const questionsList = questions.map((q) => (
    <Accourdion key={q.id} question={q.question} answer={q.answer} />
  ));
  return (
    <Color>
      <MainContainer>
        <Container>
          <Left>
            <Title>
              All Your <br />
              Questions <br /> Answered
            </Title>
          </Left>
          <Right>{questionsList}</Right>
        </Container>
        <MoreQuestions>
          <HaveMore>Have more questions?</HaveMore>
          <Email>Send us an email at hello@forfendhealth.com.</Email>
        </MoreQuestions>
      </MainContainer>
    </Color>
  );
};

const Color = styled.div`
  background-color: ${({ theme }) => theme.colors.skin};
  padding: 55px 0;
`;

const Container = styled.div`
  display: flex;
`;
const Title = styled.h3`
  padding-top: 30px;
`;
const Left = styled.div`
  flex: 0.3;
`;
const Right = styled.div`
  flex: 0.7;
`;

const MoreQuestions = styled.div`
  margin-top: 55px;
  display: flex;
`;
const HaveMore = styled.div`
  flex: 0.3;
`;
const Email = styled.div`
  flex: 0.7;
`;
