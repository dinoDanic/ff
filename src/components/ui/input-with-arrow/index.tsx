import { ArrowRightBlackIcon } from "assets/svg";
import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  arrow?: boolean;
}

export const InputWithArrow: React.FC<Props> = ({ arrow, ...other }) => {
  return (
    <Container>
      <InputStyled {...other} />
      <Arrow>
        <ArrowRightBlackIcon width="15px" />
      </Arrow>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-content: center;
`;

const Arrow = styled.div`
  position: absolute;
  right: 1.5rem;
  margin-top: 5px;
`;

const InputStyled = styled.input`
  background-color: ${({ theme }) => theme.colors.dark};
  border: none;
  color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: 1rem;
  font-family: NimbusSanExtBol;
  padding: 0.5rem 0.8rem;
  padding-top: 0.7rem;
  outline: none;
  width: 100%;
  line-height: 0;

  &::placeholder {
    color: white;
  }
`;
