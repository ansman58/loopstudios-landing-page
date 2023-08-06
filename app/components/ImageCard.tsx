import Image, { StaticImageData } from "next/image";
import React from "react";

interface IImageCard {
  backgroundImage: StaticImageData;
  text1: string;
  text2: string;
}
const ImageCard = (props: IImageCard) => {
  return (
    <figure className="mb-[1rem] relative">
      <Image src={props.backgroundImage} alt="" />
      <article>

      <caption className="absolute bottom-[1rem] text-[red]">
        {props.text1} <br /> {props.text2}
      </caption>
      </article>
    </figure>
  );
};

export default ImageCard;
