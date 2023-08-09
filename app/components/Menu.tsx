"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { use } from "react";
import { FaBars } from "react-icons/fa6";
import { HiOutlineX } from "react-icons/hi";

interface IMenu {
  className?: string;
}
const Menu = (props: IMenu) => {
  const menu = ["About", "Careers", "Events", "Products", "Support"];

  const [isMobileMenu, setisMobileMenu] = React.useState(false);

  const onToggleMenu = () => setisMobileMenu(!isMobileMenu);

  return (
    <header
      className={clsx(
        props.className,
        "z-10 w-full flex md:justify-between bg-back h-9 md:h-0 md:pt-[50px] items-center md:relative top-0 justify-between relative md:bg-[unset]"
      )}
    >
      <h1 className="font-alata text-white text-[2.25rem] md:basis-[45%]">
        loopstudios
      </h1>
      <nav
        className={clsx(
          { ["hidden md:flex"]: !isMobileMenu },
          "absolute md:relative top-9 md:gap-[1rem] md:top-0 w-full bg-black md:bg-[unset] md:flex-row md:items-center md:h-[unset] md:justify-end flex h-screen flex-col"
        )}
      >
        {menu.map((item: string, index: number) => (
          <Link href="#" key={index} className="text-[1.6rem] text-white hover:border-b-2 hover:border-white hover:border-solid">
            {item}
          </Link>
        ))}
      </nav>
      <button className="md:hidden" onClick={onToggleMenu}>
        <FaBars className="text-white text-[1.5rem]" />
      </button>
    </header>
  );
};

export default Menu;
