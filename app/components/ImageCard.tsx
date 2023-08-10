import Image, { StaticImageData } from "next/image";
import React from "react";

interface IImageCard {
  backgroundImage: StaticImageData;
  text1: string;
  text2: string;
}
const ImageCard = (props: IImageCard) => {
  return (
    <div className="relative">
    <figure className="mb-[1rem] md:mb-0 relative w-[100] block ">
      <Image src={props.backgroundImage} alt="" className="object-cover w-full max-w-full"/>

      <article className="absolute pl-[20px] bottom-[1rem] text-white text-25 md:text-[18px] lg:text-25">
        <h2 className="text-left">{props.text1}</h2>
        <h2>{props.text2}</h2>
      </article>
    </figure>
    <div className="absolute inset-0 bg-black opacity-[0.2]"></div>
    </div>

  );
};

export default ImageCard;
