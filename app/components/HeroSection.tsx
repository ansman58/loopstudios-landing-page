"use client";

import React from "react";
import BackgroundImageMobile from "../assets/images/mobile/image-hero.jpg";
import BackgroundImageDesktop from "../assets/images/desktop/image-hero.jpg";
import { useWindowSize } from "../hooks/useWindowSize";

const HeroSection = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <section
      className="bg-no-repeat bg-cover h-[600px] flex absolue inset-0"
      style={{
        backgroundImage: `url(${
          isMobile ? BackgroundImageMobile.src : BackgroundImageDesktop.src
        })`,
      }}
    >
      <h1 className="text-white border-white text-center border-[1px] border-solid m-auto max-w-[90%]">
        IMMERSIVE EXPERIENCES THAT DELIVER
      </h1>
    </section>
  );
};

export default HeroSection;
