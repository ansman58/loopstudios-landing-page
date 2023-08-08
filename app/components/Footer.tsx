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
    <div className="bg-black text-white md:grid gap-[1.6rem] grid-cols-[1fr_1fr] py-[2rem] px-[2rem] place-items-center">
      <div className="flex justify-center">
        <Image src={Logo} alt="logo" className="mb-[20px]" />
      </div>
      <nav className="md:flex md:gap-[2.13rem] mb-[50px]">
        {menu.map((item: string, index: number) => (
          <Link href="#" key={index} className="block mb-[20px] text-center">
            {item}
          </Link>
        ))}
      </nav>

      <div className="flex justify-center gap-[20px] mb-[20px]">
        <Image src={Facebook} alt="facebook icon" className="block" />
        <Image src={Twitter} alt="twitter icon" className="block" />
        <Image src={Pinterest} alt="pinterest icon" className="block" />
        <Image src={Instagram} alt="instagram icon" className="block" />
      </div>
      <p className="text-center">©{new Date().getFullYear()} Loopstudios. All rights reserved.</p>
    </div>
  );
};

export default Footer;
