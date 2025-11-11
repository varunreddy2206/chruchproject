"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [mobileAboutDropdown, setMobileAboutDropdown] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/Events" },
    {
      name: "About Us",
      href: "/aboutus",
      dropdown: [{ name: "Pastors", href: "/Pastors" }],
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Pcc", href: "/PccMembers" },
    {name:"Members",href:"/Members"}
  ];

  // Hide header on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".about-dropdown")) setAboutDropdown(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      {/* === Main Header === */}
      <header
        className={`fixed 
          top-[70px] sm:top-[60px] md:top-[70px] lg:top-[68px]
          left-0 w-full 
          bg-white/95 backdrop-blur-sm shadow-md 
          z-40 transition-transform duration-300
          ${showHeader ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4 relative overflow-x-hidden">

          {/* === Left Side === */}
          <div className="flex items-center">
            {/* Logo */}
            {/* <div className="hidden lg:block relative w-20 h-20 mr-4">
              <Image
                src="/images/cross.png"
                alt="Cross Icon"
                fill
                className="object-contain"
                priority
              />
            </div> */}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#022147] mr-3"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 items-center relative">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="relative about-dropdown">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className="text-[#022147] text-[16px] font-medium hover:text-[#F74F22] transition duration-300"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => setAboutDropdown(!aboutDropdown)}
                        className="hover:text-[#F74F22] transition-transform ml-1"
                        aria-label="Toggle dropdown"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            aboutDropdown ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {aboutDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-36 bg-white border border-gray-200 rounded-md shadow-md py-1 z-50"
                        >
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-4 py-1.5 text-[#022147] hover:bg-[#F74F22]/10 hover:text-[#F74F22] text-sm"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[#022147] text-[16px] font-medium hover:text-[#F74F22] transition duration-300"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* === Right Side CTA === */}
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/contactus"
              className="border-2 border-[#F74F22] bg-[#022147] text-white px-5 py-2 rounded-md font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:bg-[#F74F22] hover:text-white hover:shadow-[0_0_20px_rgba(247,79,34,0.4)]"
            >
              Get in Touch With Ministry
            </Link>
          </motion.div>
        </div>

        {/* === Mobile Menu === */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
            <nav className="flex flex-col items-center space-y-4 py-4">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="text-center w-full">
                    <div className="flex flex-col items-center">
                      <Link
                        href={item.href}
                        className="text-[#022147] text-lg font-medium hover:text-[#F74F22]"
                        onClick={() => {
                          setIsOpen(false);
                          setMobileAboutDropdown(false);
                        }}
                      >
                        {item.name}
                      </Link>

                      <button
                        onClick={() =>
                          setMobileAboutDropdown(!mobileAboutDropdown)
                        }
                        className="flex items-center justify-center mt-1"
                        aria-label="Toggle dropdown"
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            mobileAboutDropdown
                              ? "rotate-180 text-[#F74F22]"
                              : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileAboutDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col mt-2 space-y-2"
                          >
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="text-[#022147] hover:text-[#F74F22] text-sm"
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileAboutDropdown(false);
                                }}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[#022147] hover:text-[#F74F22] text-lg transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}

              <Link
                href="/contactus"
                className="mt-3 inline-block border-2 border-[#F74F22] bg-[#022147] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#F74F22] hover:text-white hover:shadow-[0_0_20px_rgba(247,79,34,0.4)] transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch With Ministry
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
