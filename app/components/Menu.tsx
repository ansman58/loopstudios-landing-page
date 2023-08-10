import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";

interface IMenu {
  className?: string;
}

const Menu = (props: IMenu) => {
  const menu = ["About", "Careers", "Events", "Products", "Support"];

  const [isMobileMenu, setIsMobileMenu] = React.useState(false);

  const onToggleMenu = () => setIsMobileMenu(!isMobileMenu);

  return (
    <div className="relative">
      {isMobileMenu && (
        <div
          className="fixed inset-0 z-20 bg-black"
          onClick={onToggleMenu}
        ></div>
      )}
      <header
        className={clsx(
          props.className,
          "z-30 w-full flex px-[25px] md:px-[50px] lg:px-[100px] md:justify-between h-9 md:h-0 md:pt-[50px] items-center md:relative top-0 justify-between md:bg-[unset]"
        )}
      >
        <h1
          className={clsx(
            "font-alata text-white text-[2.25rem] md:basis-[45%] relative z-40"
          )}
        >
          loopstudios
        </h1>
        <nav
          className={clsx(
            {
              [" md:flex"]: !isMobileMenu,
              ["translate-x-[0%] opacity-100 delay-75 duration-500 transition-transform ease-in-out mt-[70px]"]:
                isMobileMenu,
            },
            "absolute md:relative left-0 md:gap-[1rem] top-9 px-[25px] md:px-[40px] lg:px-[100px] translate-x-[-120%] md:translate-x-[0%] opacity-0 md:opacity-100 md:top-0 w-full  md:flex-row md:items-center md:h-[unset] md:justify-end flex h-screen flex-col z-40"
          )}
        >
          {menu.map((item: string, index: number) => (
            <Link
              href="#"
              key={index}
              className="text-[1.6rem] md:text-[18px] lg:text-[1.6rem] text-white hover:border-b-2 hover:border-white hover:border-solid"
            >
              {item}
            </Link>
          ))}
        </nav>
        <button className="relative z-40 md:hidden" onClick={onToggleMenu}>
          {isMobileMenu ? (
            <HiOutlineX className="text-white text-[1.5rem]" />
          ) : (
            <FaBars className="text-white text-[1.5rem]" />
          )}
        </button>
      </header>
    </div>
  );
};

export default Menu;
