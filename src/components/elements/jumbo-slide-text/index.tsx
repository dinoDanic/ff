import { MainContainer } from "components/layout";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { ChildrenProps } from "types";

interface Props {
  text: string;
}

export const JumboSlideText: React.FC<Props> = ({ text }) => {
  return (
    <Color>
      <MainContainer>
        <Content
          initial={{ x: "120%" }}
          animate={{ x: "0" }}
          transition={{ duration: 10 }}
        >
          <h2>{text}</h2>
        </Content>
      </MainContainer>
    </Color>
  );
};

const Color = styled.div`
  background-color: ${({ theme }) => theme.colors.purple};
  overflow: hidden;
`;
const Content = styled(motion.div)`
  display: flex;
  align-items: center;
  height: 128px;
  transform: translateY(5px);
  white-space: nowrap;
`;
