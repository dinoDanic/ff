import { JoinNowLightIcon } from "assets/svg";
import { Space } from "components/layout";
import { routes } from "modules/routes";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const JoinNow = () => {
  return (
    <Container>
      <Icon>
        <JoinNowLightIcon />
      </Icon>
      <Link href={routes.joinNow}>Join Now</Link>
    </Container>
  );
};

const Container = styled.div`
  color: ${({ theme }) => theme.colors.purple};
  display: flex;
  align-items: flex-end;
  margin-bottom: -6px;
`;

const Icon = styled.div`
  margin-right: 13px;
`;
