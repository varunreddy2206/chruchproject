"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Briefcase,
  Folder,
  Layers,
  Laptop,
  Smartphone,
  Code,
} from "lucide-react";
import { motion } from "framer-motion";

const dropdownServices = [
  { title: "Business Consulting", href: "/business-consulting", icon: Briefcase },
  { title: "Invest Process", href: "/invest-process", icon: Folder },
  { title: "IT Services", href: "/it-services", icon: Layers },
  { title: "Online Training", href: "/online-training", icon: Laptop },
  { title: "Mobile Solutions", href: "/mobile-solutions", icon: Smartphone },
  { title: "Facility Management Services", href: "/facility-management", icon: Code },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/Events" },
    { name: "About Us", href: "/aboutus" },
    { name: "Gallery", href: "/gallery" },
    { name: "PccMembers", href: "/PccMembers" },
    { name: "Pastors", href: "/Pastors" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#FFFFFF] shadow-md z-[]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-3 lg:py-2 lg:mt-2 relative">
        {/* === Left Side: Logo + Navigation === */}
        <div className="flex items-center">
          {/* === Cross Logo (Visible only on desktop) === */}
          <div className="hidden lg:block relative w-16 h-16 mr-4">
            <Image
              src="/images/cross.png"
              alt="Cross Icon"
              fill
              className="object-contain"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#022147] mr-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center relative">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#022147] text-[16px] font-medium hover:text-[#F74F22] transition duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* === Right Side: Jesus Button === */}
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
        <div className="md:hidden bg-[#ffff] border-t border-gray-300 shadow-md">
          <nav className="flex flex-col items-center space-y-3 p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-[#022147] hover:text-[#F74F22] text-lg transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Jesus Button in mobile menu */}
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
  );
}
