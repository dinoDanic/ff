import { JumboMessage, JumboSlideText } from "components/elements";
import { JumboIntro, Benefits, Reviews, DidYouKnow } from "components/pages";
import { Button } from "components/ui";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Your modern checkup. No membership fees. Insurance accepted.
        </title>
        <meta
          name="description"
          content="Personalized preventative care with top doctors and comprehensive lab testing from the comfort of your couch."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <JumboIntro />
      <JumboSlideText text="Haven’t had a checkup in years? That’s why we’re here!" />
      <Benefits />
      <Reviews />
      <DidYouKnow />
      <JumboMessage>
        <h2>Ready to Get Started?</h2>
        <Button>Join Now</Button>
      </JumboMessage>
    </>
  );
};

export default Home;
