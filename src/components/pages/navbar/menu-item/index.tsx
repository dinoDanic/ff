import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { IMenuLink } from "types";

interface Props {
  item: IMenuLink;
}

export const MenuItem: React.FC<Props> = ({ item }) => {
  return (
    <Container>
      <Link href={item.link}>{item.name}</Link>
    </Container>
  );
};

const Container = styled.div`
  color: white;
  margin-right: 29px;
`;
