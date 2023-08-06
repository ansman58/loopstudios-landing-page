import Image from "next/image";
import React from "react";
import SectionImage from "../assets/images/desktop/image-interactive.jpg";
// app/assets/images/desktop/image-interactive.jpg
const VRSection = () => {
  return (
    <section className="md:flex justify-center px-[1.5rem]">
      <div className="md:flex items-end">
        <div className="md:basis-[50%]">
          <Image
            src={SectionImage}
            alt="player wearing VR"
            //   className="w-[30rem] h-[30rem]"
          />
        </div>
        <article className="bg-white md:translate-x-[-25%] md:basis-[50%]">
          <h1 className="text-45">THE LEADER IN INTERACTIVE VR</h1>
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
