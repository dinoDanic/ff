import { ArrowRightBlackIcon, ArrowRightWhiteIcon } from "assets/svg";
import React from "react";
import styled, { css } from "styled-components";
import { device } from "styles";

interface Props {
  children: string;
  variant?: "lilic" | "light";
  width?: string;
}

interface ButtonProps {
  variant: undefined | "lilic" | "light";
  width: undefined | string;
}

export const Button: React.FC<Props> = ({ children, variant, width }) => {
  return (
    <ButtonStyle variant={variant} width={width}>
      <Text>{children}</Text>
      {!variant && <ArrowRightWhiteIcon width="18px" />}
      {variant === "lilic" && <ArrowRightBlackIcon width="18px" />}
      {variant === "light" && <ArrowRightBlackIcon width="18px" />}
    </ButtonStyle>
  );
};

const lilic = css`
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.dark};
`;

const light = css`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  border: 2px solid ${({ theme }) => theme.colors.dark};
`;

const variants = {
  lilic,
  light,
};

const ButtonStyle = styled.button<ButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  font-size: 18px;
  font-family: NimbusSanExtBol;
  padding: 15px 30px;
  border-radius: 50px;
  gap: 1rem;
  cursor: pointer;
  ${device.mobile} {
    width: 100%;
  }
  ${({ variant }) => variant && variants[variant]}
  ${({ width }) => width && `width: ${width}`}
`;

const Text = styled.div`
  transform: translateY(3px);
`;
