"use client";

import React from "react";
import ImageCard from "./ImageCard";
import DeepEarth from "../assets/images/desktop/image-deep-earth.jpg";
import NightArcade from "../assets/images/desktop/image-night-arcade.jpg";
import SoccerTeam from "../assets/images/desktop/image-soccer-team.jpg";
import Grid from "../assets/images/desktop/image-grid.jpg";
import FromAbove from "../assets/images/desktop/image-from-above.jpg";
import PocketBorealis from "../assets/images/desktop/image-pocket-borealis.jpg";
import Curiosity from "../assets/images/desktop/image-curiosity.jpg";
import Fisheye from "../assets/images/desktop/image-fisheye.jpg";
import DeepEarthMobile from "../assets/images/mobile/image-deep-earth.jpg";
import NightArcadeMobile from "../assets/images/mobile/image-night-arcade.jpg";
import SoccerTeamMobile from "../assets/images/mobile/image-soccer-team.jpg";
import GridMobile from "../assets/images/mobile/image-grid.jpg";
import FromAboveMobile from "../assets/images/mobile/image-from-above.jpg";
import PocketBorealisMobile from "../assets/images/mobile/image-pocket-borealis.jpg";
import CuriosityMobile from "../assets/images/mobile/image-curiosity.jpg";
import FisheyeMobile from "../assets/images/mobile/image-fisheye.jpg";
import { useWindowSize } from "../hooks/useWindowSize";

const CreationsSection = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  return (
    <section className="px-[1.5rem]  text-center">
      <article className="flex justify-between mb-[30px]">
        <h2 className="w-full text-center text-[24px]">OUR CREATIONS</h2>
        <button className="hidden">SEE ALL</button>
      </article>
      <div className="md:grid md:grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">
        <ImageCard
          backgroundImage={isMobile ? DeepEarthMobile : DeepEarth}
          text1="DEEP"
          text2="EARTH"
        />
        <ImageCard
          backgroundImage={isMobile ? NightArcadeMobile : NightArcade}
          text1="NIGHT"
          text2="ARCADE"
        />
        <ImageCard
          backgroundImage={isMobile ? SoccerTeamMobile : SoccerTeam}
          text1="SOCCER"
          text2="TEAM VR"
        />
        <ImageCard
          backgroundImage={isMobile ? GridMobile : Grid}
          text1="THE"
          text2="GRID"
        />
        <ImageCard
          backgroundImage={isMobile ? FromAboveMobile : FromAbove}
          text1="FROM UP"
          text2="ABOVE VR"
        />
        <ImageCard
          backgroundImage={isMobile ? PocketBorealisMobile : PocketBorealis}
          text1="POCKET"
          text2="BOREALIS"
        />
        <ImageCard
          backgroundImage={isMobile ? CuriosityMobile : Curiosity}
          text1="THE "
          text2="CURIOSITY"
        />
        <ImageCard
          backgroundImage={isMobile ? FisheyeMobile : Fisheye}
          text1="MAKE IT"
          text2="FISHEYE"
        />
      </div>
      <button className="border-2 border-black h-[40px] w-[120px] mb-[50px] border-solid">
        SEE ALL
      </button>
    </section>
  );
};

export default CreationsSection;