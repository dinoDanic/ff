import { BlueCircleShape, BlueShape } from "assets/svg";
import { Button } from "components/ui";
import { routes } from "modules/routes";
import Link from "next/link";
import styled from "styled-components";

export const OurStory = () => {
  return (
    <Container>
      <Left>
        <Shape>
          <BlueShape />
        </Shape>
        <Circle>
          <BlueCircleShape />
        </Circle>
      </Left>
      <Right>
        <Title>Our Story</Title>
        <Message>
          At Forfend, we believe preventive care should be the cornerstone of
          our healthcare system, but most people don&apos;t have access to it.
          Everyday, humans are getting sicker with chronic conditions that can
          be prevented, delayed or even reversed if detected and diagnosed.
          Forfend is a team of doctors, nurse practitioners, technologists and
          operators who are passionate about building a convenient, affordable,
          and comprehensive platform so you can stay on top of your health. Your
          health. Our purpose.
        </Message>
        <Link href={routes.howItWorks} passHref>
          <Button width="100%">How it Works</Button>
        </Link>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: 100px;
`;
const Left = styled.div`
  position: relative;
  flex: 1;
`;
const Right = styled.div`
  width: 450px;
`;

const Shape = styled.div`
  position: absolute;
  left: -50%;
  top: 50px;
`;
const Circle = styled.div`
  position: absolute;
  top: -300px;
  z-index: -1;
  right: 0;
`;

const Title = styled.h2`
  margin-bottom: 30px;
`;
const Message = styled.h4`
  margin-bottom: 45px;
`;
