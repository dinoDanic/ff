import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import womanDesktopImg from "assets/images/home/womanDesktop.png";
import manDesktopImg from "/images/home/manDesktop.png";
import styled from "styled-components";
import { device } from "styles";
import { useDeviceSize } from "hooks";

export const BackgroundImages = () => {
  const { isMobile } = useDeviceSize();
  const [activeImage, setActiveImage] = useState(false);

  const manDesktop = "/images/home/manDesktop.png";
  const manMobile = "/images/home/man.png";
  const womanDesktop = "/images/home/womanDesktop.png";
  const womanMobile = "/images/home/woman.png";

  const ImageAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, zIndex: 10, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { delay: 1 } },
  };

  useEffect(() => {
    setInterval(() => {
      setActiveImage(!activeImage);
    }, 4000);
  }, [activeImage]);

  return (
    <Container>
      <AnimatePresence key="ImageParent">
        {activeImage && (
          <Img
            key="Image1"
            variants={ImageAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            src={isMobile ? manMobile : manDesktop}
          />
        )}
        {!activeImage && (
          <Img
            key="Image2"
            variants={ImageAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            src={isMobile ? womanMobile : womanDesktop}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 550px;
  right: 20px;
  bottom: 14%;
  height: 560px;
  z-index: 5;
  overflow: hidden;
  ${device.tablet} {
    width: 500px;
    bottom: 80px;
  }
  ${device.mobile} {
    position: relative;
    top: auto;
    height: 300px;
    width: 100%;
    bottom: auto;
    right: auto;
    margin-bottom: 55px;
  }
`;

const Img = styled(motion.img)`
  max-width: 100%;
  width: 100%;
  top: 0;
  left: 0;
  max-height: 100%;
  position: absolute;
  ${device.mobile} {
    border-radius: 16px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: auto;
    top: auto;
  }
`;
