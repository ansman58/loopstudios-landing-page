import Image, { StaticImageData } from "next/image";
import React from "react";

interface IImageCard {
  backgroundImage: StaticImageData;
  text1: string;
  text2: string;
}
const ImageCard = (props: IImageCard) => {
  return (
    <figure className="mb-[1rem] relative ">
      <Image src={props.backgroundImage} alt="" />

      <article className="absolute pl-[20px] bottom-[1rem] text-white text-25">
        <h2 className="text-left">{props.text1}</h2>
        <h2>{props.text2}</h2>
      </article>
    </figure>
  );
};

export default ImageCard;
