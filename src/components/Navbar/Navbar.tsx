import React from "react";
import MobileMenu from "../MobileMenu";

export const Navbar = ({ backgroundColor = "transparent" }: INavbarProps) => {
  return (
    <nav
      className={`flex h-16 w-full justify-center items-center`}
      style={{ backgroundColor }}
    >
      <span className="text-white text-lg">Menu</span>
      <MobileMenu />
    </nav>
  );
};
