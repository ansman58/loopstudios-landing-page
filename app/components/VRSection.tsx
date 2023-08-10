import Image from "next/image";
import React from "react";
import SectionImage from "../assets/images/desktop/image-interactive.jpg";

const VRSection = () => {
  return (
    <section className="lg:flex justify-center px-[1.5rem] my-[100px] md:px-[50px] lg:px-[100px]">
      <div className="lg:flex">
        <div className="lg:basis-[50%]">
          <Image
            src={SectionImage}
            alt="player wearing VR"
            className="mb-[30px] mx-auto lg:mx-0"
          />
        </div>
        <article className="bg-white text-center lg:text-left lg:translate-x-[-25%] lg:basis-[50%] lg:h-[60%] pt-[50px] lg:pt-[20px] lg:pl-[50px]  self-end">
          <h2 className="leading-[30px] text-[24px] mb-[20px]">
            THE LEADER IN INTERACTIVE VR
          </h2>
          <p className="text-darkGray lg:pb-[80px]">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </article>
      </div>
    </section>
  );
};

export default VRSection;
