import React from "react";
import styled from "styled-components";
import { ChildrenProps, SpaceSize } from "types";

interface Props {
  children?: ChildrenProps;
  left?: SpaceSize;
  right?: SpaceSize;
  top?: SpaceSize;
  bottom?: SpaceSize;
}

export const Space: React.FC<Props> = ({
  children,
  left,
  top,
  bottom,
  right,
}) => {
  return (
    <Container left={left} top={top} bottom={bottom} right={right}>
      {children}
    </Container>
  );
};

const Container = styled.div<Props>`
  background-color: red;
  margin-left: ${({ theme, left }) => left && theme.space[left]};
  margin-right: ${({ theme, right }) => right && theme.space[right]};
  margin-top: ${({ theme, top }) => top && theme.space[top]};
  margin-bottom: ${({ theme, bottom }) => bottom && theme.space[bottom]};
`;
