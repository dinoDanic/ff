import React from "react";
import styled from "styled-components";
import { PractitionerType } from "types";

interface Props extends PractitionerType {}

export const CarouselPractitioner: React.FC<Props> = ({
  name,
  title,
  img,
  alt,
  desc,
}) => {
  const imageSrc = `/images/practitioners/${img}`;
  return (
    <Container>
      <ImageContainer>
        <Img src={imageSrc} alt={alt} />
      </ImageContainer>
      <Content>
        <Name>{name}</Name>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid black;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  /* width: 450px; */
  min-height: 468px;
  /* margin-right: 30px; */
  margin-bottom: 55px;
`;

const ImageContainer = styled.div`
  height: 200px;
  width: 100%;
  overflow: hidden;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  padding: 20px;
`;
const Name = styled.h3`
  margin-bottom: 10px;
`;
const Title = styled.p`
  font-weight: bold;
  margin-bottom: 7px;
`;
const Desc = styled.p``;
