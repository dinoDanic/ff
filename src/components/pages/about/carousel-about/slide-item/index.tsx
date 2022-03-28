import { LinkStyled } from "components/ui";
import React from "react";
import styled from "styled-components";
import { CarouselDefaultType } from "types";

export const SlideItem: React.FC<CarouselDefaultType> = ({
  title,
  message,
  image,
  link,
}) => {
  const imageSrc = `/images/about/carousel/${image}`;

  return (
    <Container>
      <Left>
        <Head>
          <Title>{title}</Title>
          <Message>{message}</Message>
        </Head>
        <Button>
          <LinkStyled variant="purple" href={link}>
            JOIN NOW
          </LinkStyled>
        </Button>
      </Left>
      <Right>
        <Img src={imageSrc} />
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const Message = styled.h4`
  display: flex;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 55px 0;
  flex-direction: column;
`;
const Right = styled.div`
  flex: 1;
`;

const Head = styled.div``;

const Button = styled.div`
  margin-bottom: 40px;
`;

const Img = styled.img`
  max-width: 100%;
  max-width: 438px;
`;
