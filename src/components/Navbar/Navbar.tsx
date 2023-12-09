import React from "react";
import MobileMenu from "../MobileMenu";

export const Navbar = ({ backgroundColor = "transparent" }: INavbarProps) => {
  return (
    <nav
      className={`flex flex-1 h-16 w-screen justify-center items-center`}
      style={{ backgroundColor }}
    >
      <span className="text-white text-lg lg:hidden">Menu</span>
      <div className="hidden lg:flex justify-center item-center w-full h-full [&>a]:w-full [&>a]:max-w-[232px] [&>a]:text-center [&>a]:text-xl [&>a]:text-white [&>a]:flex [&>a]:justify-center [&>a]:items-center">
        <a className="border-b-[5px] h-full">MENU</a>
        <a>ENTER</a>
        <a>CONTACT</a>
      </div>
      <MobileMenu />
    </nav>
  );
};
