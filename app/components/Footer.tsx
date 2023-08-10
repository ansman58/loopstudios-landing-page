import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../assets/images/logo.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import Facebook from "../assets/images/icon-facebook.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import style from "./styles.module.scss";
import clsx from "clsx";

const Footer = () => {
  const menu = ["About", "Careers", "Events", "Products", "Support"];

  return (
    <div
      className={clsx(
        style.footer,
        "bg-black text-white py-[2rem] px-[2rem] md:px-[50px] lg:px-[100px]"
      )}
    >
      <div className={clsx(style.logo, "flex justify-center md:justify-start")}>
        <Image src={Logo} alt="logo" className="mb-[20px] md:mb-0" />
      </div>
      <nav
        className={clsx(
          style.links,
          "md:flex md:gap-[2.13rem] md:justify-end mb-[50px] md:mb-0"
        )}
      >
        {menu.map((item: string, index: number) => (
          <Link
            href="#"
            key={index}
            className="block mb-[20px] md:mb-0 text-center hover:border-b-2 hover:border-white hover:border-solid"
          >
            {item}
          </Link>
        ))}
      </nav>

      <div
        className={clsx(
          style.socials,
          "flex justify-center items-center md:justify-start gap-[20px] mb-[20px] md:mb-0"
        )}
      >
        <Image src={Facebook} alt="facebook icon" className="block" />
        <Image src={Twitter} alt="twitter icon" className="block" />
        <Image src={Pinterest} alt="pinterest icon" className="block" />
        <Image src={Instagram} alt="instagram icon" className="block" />
      </div>
      <p className={clsx(style.copyright, "text-center md:text-right")}>
        ©{new Date().getFullYear()} Loopstudios. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
