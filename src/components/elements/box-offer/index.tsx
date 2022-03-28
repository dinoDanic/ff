import { ForfendShapeBlack } from "assets/svg";
import { MainContainer } from "components/layout";
import React from "react";
import styled from "styled-components";
import { Item } from "./item";

interface Props {
  name: string;
  list: string[];
}

export const BoxOffer: React.FC<Props> = ({ name, list }) => {
  const items = list.map((item: string) => <Item key={item} item={item} />);
  return (
    <MainContainer>
      <Container>
        <Left>
          <Icon>
            <ForfendShapeBlack />
          </Icon>
          <Name>{name}</Name>
        </Left>
        <Right>{items}</Right>
      </Container>
    </MainContainer>
  );
};

const Container = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  padding: 50px 30px;
  display: flex;
  margin-bottom: 55px;
`;

const Left = styled.div`
  flex: 0.3;
`;

const Right = styled.div`
  flex: 0.7;
  display: flex;
  flex-wrap: wrap;
`;
const Icon = styled.div`
  margin-bottom: 30px;
`;
const Name = styled.h6``;
