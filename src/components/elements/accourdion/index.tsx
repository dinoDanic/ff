import React, { useState } from "react";
import styled from "styled-components";
import { PlusExpandIcon, PlusMinimizeIcon } from "assets/svg";
import { AccordionType } from "types";
import { motion } from "framer-motion";
import { standarndFMProps } from "styles";

interface Props extends AccordionType {}

export const Accourdion: React.FC<Props> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const icon = open ? <PlusMinimizeIcon /> : <PlusExpandIcon />;
  const toggleOpen = () => setOpen(!open);

  const aniOpen = {
    animate: {
      height: "auto",
      opacit: 1,
    },
  };
  const aniClose = {
    animate: {
      height: "0px",
      opacity: 0,
    },
  };

  return (
    <Container>
      <Header>
        <Question>{question}</Question>
        <Icon onClick={toggleOpen}>{icon}</Icon>
      </Header>
      <Answer variants={open ? aniOpen : aniClose} {...standarndFMProps}>
        {answer}
      </Answer>
    </Container>
  );
};

const Container = styled.div`
  min-width: 100%;
  border-bottom: 1px solid black;
  padding: 30px 0;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Question = styled.h4`
  margin-bottom: 10px;
`;
const Icon = styled.div`
  cursor: pointer;
`;
const Answer = styled(motion.div)`
  overflow: hidden;
  height: 0px;
`;
