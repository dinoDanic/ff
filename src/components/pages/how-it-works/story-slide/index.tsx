import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import bg1Img from "/images/how-it-works/1.png";
import { SlideBar } from "./slide-bar";
import { ContentItem } from "./content-item";
import { Scene } from "react-scrollmagic";
import { MainContainer } from "components/layout";
import { motion, useAnimation, useSpring } from "framer-motion";
import { useWindowSize } from "hooks";
import { ConqureIcon, LabWorkIcon, ResulutsIcon, SahIcon } from "assets/svg";

export const StorySlide: React.FC = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const infoAnimation1 = useAnimation();
  const infoAnimation2 = useAnimation();
  const infoAnimation3 = useAnimation();
  const infoAnimation4 = useAnimation();
  const containerRef = useRef(null as null | HTMLDivElement);
  const stickyRef = useRef(null as null | HTMLDivElement);
  const bottomRef = useRef(null as null | HTMLDivElement);

  const trashold = 0.68;
  const trasholdInfo = 0.6;

  const [image1, inView1] = useInView({
    threshold: trashold,
  });
  const [image2, inView2] = useInView({
    threshold: trashold,
  });
  const [image3, inView3] = useInView({
    threshold: trashold,
  });
  const [image4, inView4] = useInView({
    threshold: trashold,
  });
  const [info1, inViewInfo1] = useInView({
    threshold: trashold,
  });
  const [info2, inViewInfo2] = useInView({
    threshold: trashold,
  });
  const [info3, inViewInfo3] = useInView({
    threshold: trashold,
  });
  const [info4, inViewInfo4] = useInView({
    threshold: trashold,
  });

  const enterAnimation = {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  };

  const exitAnimation = {
    opacity: 0,
    scale: 0.93,
    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  };

  const enterInfoAnimation = {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  };

  const exitInfoAnimation = {
    opacity: 0,
    scale: 0.93,
    y: 50,
    transition: {
      duration: 0.4,
    },
  };

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  useEffect(() => {
    if (inView1) {
      animation1.start(enterAnimation);
    } else {
      animation1.start(exitAnimation);
    }
    if (inView2) {
      animation2.start(enterAnimation);
    } else {
      animation2.start(exitAnimation);
    }
    if (inView3) {
      animation3.start(enterAnimation);
    } else {
      animation3.start(exitAnimation);
    }
    if (inView4) {
      animation4.start(enterAnimation);
    } else {
      animation4.start(exitAnimation);
    }
  }, [inView1, inView2, inView3, inView4]);

  useEffect(() => {
    if (inViewInfo1) {
      infoAnimation1.start(enterInfoAnimation);
    } else {
      infoAnimation1.start(exitInfoAnimation);
    }
    if (inViewInfo2) {
      infoAnimation2.start(enterInfoAnimation);
    } else {
      infoAnimation2.start(exitInfoAnimation);
    }
    if (inViewInfo3) {
      infoAnimation3.start(enterInfoAnimation);
    } else {
      infoAnimation3.start(exitInfoAnimation);
    }
    if (inViewInfo4) {
      infoAnimation4.start(enterInfoAnimation);
    } else {
      infoAnimation4.start(exitInfoAnimation);
    }
  }, [inViewInfo1, inViewInfo2, inViewInfo3, inViewInfo4]);

  return (
    <MainContainer>
      <Container ref={containerRef}>
        <Left>
          <Sticky ref={stickyRef}>
            {/* <SlideBar /> */}
            <Content>
              <ContentItem
                active={inView1}
                number="01"
                title="Tell Us About You"
              />
              <ContentItem
                active={inView2}
                number="02"
                title="Complete Lab Work"
              />
              <ContentItem
                active={inView3}
                number="03"
                title="Understand Your Results"
              />
              <ContentItem
                active={inView4}
                number="04"
                title="Conquer Your Health"
              />
            </Content>
          </Sticky>
        </Left>
        <Right>
          <Section>
            <SectionContent>
              <Img
                ref={image1}
                animate={animation1}
                src="/images/how-it-works/1.png"
                alt="test"
              />
              <SectionInfo ref={info1} animate={infoAnimation1}>
                <Info>
                  <InfoContent>
                    <InfoTitle>Tell Us About You</InfoTitle>
                    <InfoDesc>
                      We want to get to know you. Tell us about your health,
                      lifestyle, and medical history in our HIPAA-secure online
                      portal.
                    </InfoDesc>
                  </InfoContent>
                  <IconImage>
                    <SahIcon />
                  </IconImage>
                </Info>
              </SectionInfo>
            </SectionContent>
          </Section>
          <Section>
            <SectionContent>
              <Img
                ref={image2}
                animate={animation2}
                src="/images/how-it-works/2.png"
                alt="test"
              />
              <SectionInfo ref={info2} animate={infoAnimation2}>
                <Info>
                  <InfoContent>
                    <InfoTitle>Complete Lab Work</InfoTitle>
                    <InfoDesc>
                      Receive lab work recommendations with clear pricing.
                      Select an option that works best for you and complete it
                      through our in-home service or at your local lab.
                    </InfoDesc>
                  </InfoContent>
                  <IconImage>
                    <LabWorkIcon />
                  </IconImage>
                </Info>
              </SectionInfo>
            </SectionContent>
          </Section>
          <Section>
            <SectionContent>
              <Img
                ref={image3}
                animate={animation3}
                src="/images/how-it-works/3.png"
                alt="test"
              />
              <SectionInfo ref={info3} animate={infoAnimation3}>
                <Info>
                  <InfoContent>
                    <InfoTitle>Understand Your Results</InfoTitle>
                    <InfoDesc>
                      Receive your lab results 24 hours before your visit,
                      translated from doctor-speak to human-speak.
                    </InfoDesc>
                  </InfoContent>
                  <IconImage>
                    <ResulutsIcon />
                  </IconImage>
                </Info>
              </SectionInfo>
            </SectionContent>
          </Section>
          <Section>
            <SectionContent>
              <Img
                ref={image4}
                animate={animation4}
                src="/images/how-it-works/4.png"
                alt="test"
              />
              <SectionInfo ref={info4} animate={infoAnimation4}>
                <Info>
                  <InfoContent>
                    <InfoTitle>Conquer Your Health</InfoTitle>
                    <InfoDesc>
                      Meet virtually with a doctor for 30-45 minutes and get
                      recommendations that are actually doable and personalized
                      to your lifestyle.
                    </InfoDesc>
                  </InfoContent>
                  <IconImage>
                    <ConqureIcon />
                  </IconImage>
                </Info>
              </SectionInfo>
            </SectionContent>
          </Section>
        </Right>
      </Container>
    </MainContainer>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 120px;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

const Sticky = styled.div`
  display: flex;
  position: sticky;
  gap: 20px;
  height: calc(100vh - 280px);
  top: 180px;
`;

const Section = styled(motion.div)`
  height: calc(100vh - 280px);
  flex: 1;
  overflow: hidden;
  &:last-child {
  }
`;

const SectionContent = styled.div`
  position: relative;
  height: 100%;
`;

const SectionInfo = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 10px;
  position: absolute;
  overflow: hidden;
  bottom: 0px;
`;

const Info = styled(motion.div)`
  width: calc(100% - 20px);
  height: 150px;
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;
  position: absolute;
  bottom: 10px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const Img = styled(motion.img)`
  object-fit: cover;
  max-width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const InfoContent = styled.div``;

const IconImage = styled.div`
  max-width: 140px;
  min-width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoTitle = styled.h4`
  margin-bottom: 10px;
`;
const InfoDesc = styled.p``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
