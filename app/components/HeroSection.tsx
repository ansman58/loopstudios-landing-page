"use client";

import React from "react";
import Menu from "./Menu";
import style from "./styles.module.scss";
import clsx from "clsx";

const HeroSection = () => {
  return (
    <div
      className={clsx(
        style.heroSection,
        "bg-no-repeat bg-cover grid h-[600px] absolue inset-0 py-[20px] "
      )}
    >
      <Menu className="mb-[50px]" />
      <section className="px-[2rem] md:px-[50px] lg:px-[100px]">
        <article className="border-2 border-solid p-[28px] md:p-[1.6rem] border-white max-w-[32rem] lg:max-w-[44rem] lg:p-[2.65rem_2.65rem_2rem] opacity-[0.9] my-auto">
          <h1 className="text-white text-[1.75rem] md:text-[2.25rem] lg:text-[3.5rem] lg:leading-[97%]">
            IMMERSIVE EXPERIENCES THAT DELIVER
          </h1>
        </article>
      </section>
    </div>
  );
};

export default HeroSection;
