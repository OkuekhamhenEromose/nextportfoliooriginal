"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Socials from "./Socials";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    };

    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [openMenu]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="text-[#003366] lg:hidden flex items-center">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-white dark:bg-gray-800 dark:border-gray-700 transition-colors hover:shadow-lg mr-2 hover:scale-105 active:scale-95"
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-400" />
        )}
      </button>

      {/* Menu Icon */}
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer flex justify-end p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 hover:scale-105 active:scale-95"
      >
        <Menu />
      </div>

      {/* Backdrop */}
      {openMenu && (
        <div 
          className="fixed inset-0 bg-opacity-50 z-40 animate-fade-in"
          onClick={() => setOpenMenu(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen w-full max-w-xs bg-white dark:bg-gray-800 z-50 transform transition-transform duration-500 ease-out ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon and Theme Toggle */}
        <div className="absolute top-6 right-6 flex items-center gap-3 z-10">
          {/* Theme Toggle inside menu */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white dark:bg-gray-800 dark:border-gray-700 transition-colors hover:shadow-lg hover:scale-110 active:scale-90"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-400" />
            )}
          </button>

          {/* Close Icon */}
          <div
            onClick={() => setOpenMenu(false)}
            className="text-[#003366] dark:text-gray-200 cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200 hover:scale-110 active:scale-90"
          >
            <X size={28} />
          </div>
        </div>

        {/* Menu Links */}
        <div className="flex-1 flex flex-col justify-center items-center px-8 h-full">
          <ul className="space-y-4 w-full">
            {navItems.map((item, index) => (
              <li 
                key={item.name}
                className="flex justify-center animate-fade-in-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpenMenu(false)}
                  className={`nav-link text-xl font-bold inline-block px-3 py-1 transition-all duration-300 hover:scale-105 ${
                    pathname === item.href ? "active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons - Bottom */}
        <div className="flex justify-center items-center py-6 px-4 mb-20 w-full">
          <div className="text-center w-full animate-fade-in-up" style={{ animationDelay: '900ms' }}>
            <p className="text-sm font-semibold text-[#003366] dark:text-gray-400 mb-2">
              Connect with me
            </p>
            <Socials className="flex justify-center gap-3" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;