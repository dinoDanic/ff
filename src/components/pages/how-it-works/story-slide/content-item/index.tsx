import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

interface Props {
  number: string;
  title: string;
  message?: string;
  active?: boolean;
}

export const ContentItem: React.FC<Props> = ({
  number,
  title,
  message,
  active,
}) => {
  const activeAnimation = {
    scale: 1,
    x: 40,
    // y: -5,
    borderLeft: "4px solid gray",
    transition: {
      duration: 0.3,
    },
    // boxShadow: "0px 0px 44px -38px gray",
  };
  const nonActiveAnimation = {
    scale: 0.8,
    opacity: 0.1,
  };
  return (
    <Container animate={active ? activeAnimation : nonActiveAnimation}>
      <Number>{number}</Number>
      <Title>{title}</Title>
      <Message>{message}</Message>
    </Container>
  );
};

const Container = styled(motion.div)`
  max-width: 90%;
  padding: 20px;
  /* border-radius: 20px; */
  border: 0px solid darkGray;
  /* box-shadow: 1px 1px 0 0 black; */
`;

const Number = styled(motion.h2)``;
const Title = styled(motion.h4)``;
const Message = styled(motion.p)``;
