import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../assets/images/logo.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import Facebook from "../assets/images/icon-facebook.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";
import Twitter from "../assets/images/icon-twitter.svg";

const Footer = () => {
  const menu = ["About", "Careers", "Events", "Products", "Support"];

  return (
    <div className="bg-black text-white md:grid gap-[1.6rem] grid-cols-[1fr_1fr] py-[2rem] px-[2rem]">
      <Image src={Logo} alt="logo" />
      <nav className="md:flex md:gap-[2.13rem]">
        {menu.map((item: string, index: number) => (
          <Link href="#" key={index} className="block">
            {item}
          </Link>
        ))}
      </nav>

      <div className="flex ">
        <Image src={Facebook} alt="facebook icon" className="block" />
        <Image src={Twitter} alt="twitter icon" className="block" />
        <Image src={Pinterest} alt="pinterest icon" className="block" />
        <Image src={Instagram} alt="instagram icon" className="block" />
      </div>
      <p>©{new Date().getFullYear()} Loopstudios. All rights reserved.</p>
    </div>
  );
};

export default Footer;
