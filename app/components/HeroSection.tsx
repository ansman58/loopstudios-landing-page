"use client";

import React from "react";
import BackgroundImageMobile from "../assets/images/mobile/image-hero.jpg";
import BackgroundImageDesktop from "../assets/images/desktop/image-hero.jpg";
import { useWindowSize } from "../hooks/useWindowSize";
import Menu from "./Menu";

const HeroSection = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <div
      className="bg-no-repeat bg-cover grid h-[600px] absolue inset-0 py-[20px] "
      style={{
        backgroundImage: `url(${
          isMobile ? BackgroundImageMobile.src : BackgroundImageDesktop.src
        })`,
      }}
    >
      <Menu className="mb-[50px]" />
      <section className="">
        <article className="border-[1px] border-solid m-s p-[1.875rem] border-white md:max-w-fit md:p-[20px_80px_20px_20px] opacity-[0.9] my-auto">
          <h2 className="text-white text-[24px] font-[200] ">IMMERSIVE</h2>
          <h2 className="text-white text-[24px] font-[200] ">EXPERIENCES</h2>
          <h2 className="text-white text-[24px] font-[200] ">THAT DELIVER</h2>
        </article>
      </section>
    </div>
  );
};

export default HeroSection;
