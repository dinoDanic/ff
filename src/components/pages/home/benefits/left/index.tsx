import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Woman1Image from "assets/images/home/woman1.png";
import Woman2Image from "assets/images/home/woman2.png";

export const Left = () => {
  return (
    <Container>
      <Image1>
        <Image src={Woman1Image} width="300px" height="300px" alt="todo" />
      </Image1>
      <Image2>
        <Image src={Woman2Image} width="300px" height="300px" alt="todo" />
      </Image2>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
`;

const Image1 = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Image2 = styled.div`
  margin-top: -30px;
`;
