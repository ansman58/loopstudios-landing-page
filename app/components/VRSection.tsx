import Image from "next/image";
import React from "react";
import SectionImage from "../assets/images/desktop/image-interactive.jpg";

const VRSection = () => {
  return (
    <section className="md:flex justify-center px-[1.5rem] my-[100px]">
      <div className="items-end md:flex">
        <div className="md:basis-[50%]">
          <Image
            src={SectionImage}
            alt="player wearing VR"
            className=" mb-[30px]"
          />
        </div>
        <article className="bg-white md:translate-x-[-25%] md:basis-[50%] text-center">
          <h2 className="leading-[30px] text-[24px] mb-[20px]">
            THE LEADER IN INTERACTIVE VR
          </h2>
          <p className="text-darkGray">
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
