import { ForfendLogoWhite, ForfendLogoBlack } from "assets/svg/logo/icons";
import { MainContainer } from "components/layout";
import { useScrollPosition } from "hooks/useScrollPosition";
import { routes } from "modules/routes";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { JoinNow } from "./join-now";
import { MenuItem } from "./menu-item";
import { menuLinks } from "./menu-links";

interface ContainerStyleProps {
  light: boolean;
  onTop: boolean;
}

export const Navbar: NextPage = () => {
  const router = useRouter();
  const [onTop, setOnTop] = useState(false);
  const isDark = router.asPath === routes.home;
  const links = menuLinks.map((i) => <MenuItem item={i} key={i.id} />);
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const scroll = useScrollPosition();
  // const isOnTop = scroll === 0;

  const Logo = () => {
    console.log(isDark);

    if (!isDark) {
      return (
        <ForfendLogoBlack
          width="148px"
          height="28px"
          onClick={() => router.push(routes.home)}
        />
      );
    } else {
      return (
        <ForfendLogoWhite
          width="148px"
          height="28px"
          onClick={() => router.push(routes.home)}
        />
      );
    }
  };

  return (
    <Container light={!isDark} onTop={onTop}>
      <MainContainer>
        <Content>
          <Left>
            <Logo />
            <Links>{links}</Links>
          </Left>
          <Right>
            <JoinNow />
          </Right>
        </Content>
      </MainContainer>
    </Container>
  );
};

const lightStyle = css`
  background-color: ${({ theme }) => theme.colors.light};
  a {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

const Container = styled.div<ContainerStyleProps>`
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  align-items: center;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.3s ease all;
  box-shadow: ${({ onTop }) => (onTop ? "none" : "0 0 23px -20px black")};
  ${({ light }) => light && lightStyle}
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Left = styled.div`
  display: flex;
  align-items: flex-end;
  img {
    cursor: pointer;
  }
`;
const Links = styled.div`
  margin-bottom: -7px;
  margin-left: 56px;
  display: flex;
  align-items: flex-end;
`;
const Right = styled.div``;
