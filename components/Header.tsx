"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Share2 } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Socials from "./Socials";
import MobileNav from "./MobileNav";
import Image from "next/image";
import Logo from "@/public/images/SmallSquareLogoJpg-removebg-preview.png";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSocialsOpen, setIsSocialsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  // Hide/show header on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
        setIsSocialsOpen(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close socials when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isSocialsOpen && !(event.target as Element).closest(".socials-container")) {
        setIsSocialsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isSocialsOpen]);

  const toggleSocials = () => {
    setIsSocialsOpen(!isSocialsOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full px-4 xs:px-5 sm:px-6 md:px-6 lg:px-8 mt-4 z-30 h-16 lg:h-[60px] flex items-center transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex flex-row items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="max-w-[45px] xs:max-w-[50px] md:max-w-[55px] lg:max-w-[60px] xl:max-w-[65px]">
          <Image
            src={Logo}
            alt="portfolio-logo"
            // width={65}
            // height={65}
            className="w-full h-auto"
            priority
          />
        </Link>

        {/* Nav + Socials grouped */}
        <div className="hidden md:flex items-center gap-x-3 md:gap-x-4 lg:gap-x-5 xl:gap-x-6 relative">
          {/* Nav links */}
          <nav
            className="
              flex gap-x-3 md:gap-x-4 lg:gap-x-5 xl:gap-x-6 font-semibold 
              px-4 md:px-5 lg:px-6 xl:px-8 py-2.5 md:py-3 lg:py-3 rounded-full
              bg-white shadow-lg border border-gray-200
              dark:bg-gray-800 dark:border-gray-700
              text-sm md:text-sm lg:text-base
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "nav-link active" : "nav-link"}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social icons toggle button (md to lg only) */}
          <div className="md:block xl:hidden relative socials-container">
            <button
              onClick={toggleSocials}
              className={`ml-1 md:ml-2 lg:ml-3 p-2 md:p-2.5 rounded-full bg-white shadow-lg border border-gray-200 
                dark:bg-gray-800 dark:border-gray-700 transition-all duration-300
                hover:shadow-xl hover:scale-105 ${
                  isSocialsOpen ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700" : ""
                }`}
              aria-label="Toggle social media links"
            >
              <Share2
                className={`w-4 h-4 md:w-4 md:h-4 text-gray-600 dark:text-gray-300 transition-all duration-300 ${
                  isSocialsOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : ""
                }`}
              />
            </button>

            {/* Dropdown social icons */}
            <div
              className={`absolute top-full right-0 mt-2 transition-all duration-300 ease-out ${
                isSocialsOpen
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-4 invisible"
              }`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-3 md:p-3 min-w-[160px] md:min-w-[170px]">
                <div className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 text-center">
                  Connect with me
                </div>
                <Socials className="flex flex-col gap-1" isVertical={true} />
              </div>
            </div>
          </div>

          {/* Regular social icons (xl and up) */}
          <Socials className="hidden xl:flex ml-4 2xl:ml-6" />

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="ml-2 md:ml-3 lg:ml-4 xl:ml-5 p-1.5 md:p-2 rounded-full dark:bg-gray-800 dark:border-gray-700 transition-colors hover:shadow-lg hover:scale-105"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 md:w-4 md:h-4 text-gray-800 dark:text-gray-200" />
            ) : (
              <Sun className="w-4 h-4 md:w-4 md:h-4 text-yellow-400" />
            )}
          </button>
        </div>

        {/* MobileNav only below md */}
        <div className="md:hidden flex justify-end items-center">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;