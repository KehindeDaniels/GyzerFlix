import React, { useState } from "react";
import searchIcon from "../assets/img/search.svg";
import profile from "../assets/img/profile.png";
import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false); // State for mobile menu visibility

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Function to close mobile menu when NavLink is clicked
  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <div className="max-w-[1500px] mx-auto px-16 py-4">
      <header className="flex items-center justify-between">
        <p className="font-bold text-white">
          Gyzer<span className="text-[#3DD2CC]">Flix</span>
        </p>

        {/* Hamburger menu toggle */}
        <div className="hamburger text-white font-bold sm:hidden text-3xl flex gap-4 cursor-pointer" onClick={toggleMobileMenu}>
          &#9776;
          <div>
            <img src={profile} alt="" className="w-12" />
          </div>
        </div>

        {/* Mobile navigation */}
        <nav className={`mobilenav-menu sm:hidden absolute top-5 py-8 m-8 text-slate-300 bg-[#6666] inset-0 rounded-xl backdrop-blur-sm z-10 ${showMobileMenu ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col items-center gap-7 inset-x-0">
            <NavLink to={"/"} onClick={closeMobileMenu}>
              <li className={`${location.pathname === "/" ? "text-[#3DD2CC]" : "text-[#fff]"}`}>
                <a href="">Home</a>
              </li>
            </NavLink>
            <NavLink to={"/favourites"} onClick={closeMobileMenu}>
              <li className={`${location.pathname === '/favourites' ? "text-[#3DD2CC]" : "text-[#fff]"}`}>
                <a href="">Favourites</a>
              </li>
            </NavLink>
          </ul>
        </nav>

        {/* Desktop navigation */}
        <nav className="gap-16 items-center text-slate-300 hidden sm:flex">
          <ul className="flex gap-16">
            <NavLink to={"/"}>
              <li className={`${location.pathname === "/" ? "text-[#3DD2CC]" : "text-[#fff]"}`}>
                <a href="">Home</a>
              </li>
            </NavLink>
            <NavLink to={"/favourites"}>
              <li className={`${location.pathname === '/favourites' ? "text-[#3DD2CC]" : "text-[#fff]"}`}>
                <a href="">Favourites</a>
              </li>
            </NavLink>
          </ul>
          <div>
            <img src={profile} alt="" className="w-12" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
