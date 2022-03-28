import Link, { LinkProps } from "next/link";
import React from "react";
import styled, { css } from "styled-components";

interface Props extends LinkProps {
  variant?: "purple";
}

interface StyleProps {
  variant?: "purple" | undefined;
}

export const LinkStyled: React.FC<Props> = ({ href, children, variant }) => {
  return (
    <Link href={href} passHref>
      <LinkStyle variant={variant}>{children}</LinkStyle>
    </Link>
  );
};

const purple = css`
  color: ${({ theme }) => theme.colors.purple};
  font-weight: bold;
  font-size: 16px;
`;

const variants = { purple };

const LinkStyle = styled.a<StyleProps>`
  ${({ variant }) => variant && variants[variant]};
`;
