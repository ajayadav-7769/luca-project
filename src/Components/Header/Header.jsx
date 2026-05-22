import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // 👈 route detect
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isSeriesActive =
    location.pathname === "/series" || location.pathname === "/all-episodes";

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [menuOpen]);

  return (
    <header className="w-full pt-3 relative z-50">
      {/* TOP BAR */}
      <div className="flex justify-between items-center p-5 sm:px-10 lg:px-20">
        {/* Logo */}
        <a href="/" className="z-50">
          <img src="/Logo/header-logo.png" alt="logo" className="h-10 sm:h-14" />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 font-semibold items-center">
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}>
            <button
              className={`relative flex items-center gap-1 font-semibold ${
                isSeriesActive ? "text-[#39A7C5]" : ""
              }`}>
              Series
              {/* Arrow */}
              <span
                className={`transition-transform duration-300 ${
                  dropdownOpen ? "rotate-270" : "rotate-90"
                }`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </span>
              {/* Underline */}
              {isSeriesActive && (
                <span className="absolute left-0 -bottom-1 w-full underline-zigzag1"></span>
              )}
            </button>

            {/* Dropdown */}
            <div
              className={`absolute top-full left-0 mt-2 w-[180px] bg-white border rounded-xl shadow-lg transition-all duration-200 ${
                dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}>
              <a
                href="/series"
                className={`block px-4 py-2 hover:bg-gray-100 ${
                  location.pathname === "/series" ? "text-[#39A7C5]" : ""
                }`}>
                Series
              </a>

              <a
                href="/all-episodes"
                className={`block px-4 py-2 hover:bg-gray-100 ${
                  location.pathname === "/all-episodes" ? "text-[#39A7C5]" : ""
                }`}>
                All Episodes
              </a>
            </div>
          </div>

          <a target="_blank" href="https://highperforming-teams.com/">
            Author's Website
          </a>

          <a href="#contact">Contact Us</a>
        </nav>

        {/* MOBILE ICON */}
        <button
          className="md:hidden z-50"
          onClick={() => setMenuOpen(!menuOpen)}>
          <img
            src={menuOpen ? "/cross.svg" : "/menu.svg"}
            alt="menu"
            className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              menuOpen ? "w-5 rotate-180 scale-110" : "w-7"
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundImage: "url('/bg.png')" }}>
        {/* LINKS */}
        <div className="flex flex-col items-center justify-center h-[80%] gap-8 text-2xl font-semibold">
          <div className="flex flex-col items-center">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-2 text-2xl font-semibold ${
                isSeriesActive ? "text-[#39A7C5]" : ""
              }`}>
              Series
              <span
                className={`transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}>
                ▾
              </span>
            </button>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="flex flex-col items-center mt-3 gap-3 text-lg">
                <a
                  href="/series"
                  onClick={() => setMenuOpen(false)}
                  className={`${
                    location.pathname === "/series" ? "text-[#39A7C5]" : ""
                  }`}>
                  Series
                </a>

                <a
                  href="/all-episodes"
                  onClick={() => setMenuOpen(false)}
                  className={`${
                    location.pathname === "/all-episodes"
                      ? "text-[#39A7C5]"
                      : ""
                  }`}>
                  All Episodes
                </a>
              </div>
            )}
          </div>

          <a
            href="https://highperforming-teams.com/"
            target="_blank"
            onClick={() => setMenuOpen(false)}>
            Author's Website
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </a>
        </div>

        {/* SOCIAL */}
        <div className="flex justify-center gap-6 mt-6">
          <img src="/Footer/mobile-ld.png" className="h-10" />
          <img src="/Footer/mobile-yt.png" className="h-10" />
        </div>

        {/* FOOTER */}
        <div className="absolute bottom-5 w-full text-center text-sm text-gray-600">
          <hr className="mb-3 w-[90%] mx-auto" />© 2026 Luca. All rights
          reserved.
        </div>
      </div>
    </header>
  );
};

export default Header;
