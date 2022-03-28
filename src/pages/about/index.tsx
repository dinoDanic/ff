import { CarouselAbout, JoinForfend, OurStory, OurTeam } from "components";
import { MainContainer } from "components/layout";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Top doctors and dietitians that listen closely and care deeply.
        </title>
        <meta
          name="description"
          content="Practitioners, technologists and operators who are passionate about helping you stay on top of your health."
        />
      </Head>
      <MainContainer>
        <JoinForfend />
        <CarouselAbout />
        <OurTeam />
        <OurStory />
      </MainContainer>
    </>
  );
};

export default About;
