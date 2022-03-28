import {
  ContinuingCare,
  QuestionsAnswers,
  StorySlide,
  TakeCare,
  YourHealth,
} from "components";
import { BoxOffer } from "components/elements";
import { MainContainer } from "components/layout";
import { NextPage } from "next";
import { Controller } from "react-scrollmagic";
import React from "react";
import styled from "styled-components";
import { howWeCanHelp, labOffers } from "./offers";
import Head from "next/head";

const HowItWorks: NextPage = () => {
  return (
    <>
      <Head>
        <title>Comprehensive preventive healthcare via telehealth.</title>
        <meta
          name="description"
          content="We help you identify risk factors for chronic conditions early so you can feel your best now and in the future."
        />
      </Head>
      <Controller>
        <MainContainer>
          <Title>How our modern checkup works for you.</Title>
        </MainContainer>
        <StorySlide />
        <TakeCare />
        <ContinuingCare />
        <YourHealth />
        <BoxOffer name="Lab Tests We Offer" list={labOffers} />
        <BoxOffer name="Lab Tests We Offer" list={howWeCanHelp} />
        <QuestionsAnswers />
      </Controller>
    </>
  );
};

export default HowItWorks;

const Container = styled.div``;

const Title = styled.h2`
  margin: 55px 0;
`;

export function getStaticProps() {
  return {
    props: {
      HowItWorks: true,
    },
  };
}
