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
    <section className="px-[1.5rem]  ">
      <article className="flex justify-between">
        <h1 className="text-45 text-center">OUR CREATIONS</h1>
        <button>SEE ALL</button>
      </article>
      <div className="md:grid md:grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">
        <ImageCard
          backgroundImage={isMobile ? DeepEarthMobile : DeepEarth}
          text1="DEEP EARTH"
          //   text2="EARTH"
        />
        <ImageCard
          backgroundImage={isMobile ? NightArcadeMobile : NightArcade}
          text1="NIGHT ARCADE"
          //   text2="ARCADE"
        />
        <ImageCard
          backgroundImage={isMobile ? SoccerTeamMobile : SoccerTeam}
          text1="SOCCER TEAM VR"
          //   text2="TEAM VR"
        />
        <ImageCard
          backgroundImage={isMobile ? GridMobile : Grid}
          text1="THE GRID"
          //   text2="GRID"
        />
        <ImageCard
          backgroundImage={isMobile ? FromAboveMobile : FromAbove}
          text1="FROM UP ABOVE VR"
          //   text2="ABOVE VR"
        />
        <ImageCard
          backgroundImage={isMobile ? PocketBorealisMobile : PocketBorealis}
          text1="POCKET BOREALIS"
          //   text2="BOREALIS"
        />
        <ImageCard
          backgroundImage={isMobile ? CuriosityMobile : Curiosity}
          text1="THE CURIOSITY"
          //   text2="CURIOSITY"
        />
        <ImageCard
          backgroundImage={isMobile ? FisheyeMobile : Fisheye}
          text1="MAKE IT FISHEYE"
          //   text2="FISHEYE"
        />
      </div>
    </section>
  );
};

export default CreationsSection;
