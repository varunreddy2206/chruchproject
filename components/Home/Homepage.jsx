"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // professional icons

export default function Homepage() {
  const [startIndex, setStartIndex] = useState(0);

  const pccMembers = [
    { id: 1, src: "/images/pastor1.webp", name: "John" },
    { id: 2, src: "/images/pastor2.jpeg", name: "Mary" },
    { id: 3, src: "/images/pastor3.jpg", name: "Paul" },
    { id: 4, src: "/images/pastor4.jpg", name: "Grace" },
    { id: 5, src: "/images/pastor5.jpg", name: "David" },
    { id: 6, src: "/images/pastor6.jpg", name: "Peter" },
  ];

  const membersToShow = 4;

  const nextMembers = () => {
    setStartIndex((prev) => (prev + 1) % pccMembers.length);
  };

  const prevMembers = () => {
    setStartIndex((prev) =>
      prev === 0 ? pccMembers.length - 1 : prev - 1
    );
  };

  // 🔹 Ensure 4 members are always visible — wraps around
  const visibleMembers = Array.from({ length: membersToShow }).map(
    (_, i) => pccMembers[(startIndex + i) % pccMembers.length]
  );

  return (
    <section className="relative w-full min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      {/* === LEFT SIDE === */}
      <div className="relative flex items-center justify-center text-white overflow-hidden min-h-[85vh] md:min-h-[90vh]">
        <Image
          src="/images/chruch-07.jpg"
          alt="Church Background"
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* === RIGHT SIDE === */}
      <div className="relative flex flex-col items-center md:items-end justify-start bg-white text-center py-20 md:py-24 px-6 md:px-10 mt-10 md:mt-16">
        {/* Pastor Image + Name */}
        <div className="absolute top-10 right-10 flex flex-col items-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 hover:scale-105 transition-transform duration-500">
            <Image
              src="/images/heroimg2.png"
              alt="Pastor Image"
              fill
              className="object-contain rounded-lg shadow-md"
            />
          </div>
          <h3 className="bg-[#022147] text-white px-6 py-2 rounded-md font-semibold text-lg md:text-xl shadow-md mt-2">
            Pastor Anil
          </h3>
        </div>

        {/* Cross Icon */}
        <div className="absolute top-[110px] right-[330px] md:right-[390px] z-30">
          <div className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-all duration-500 ease-out hover:scale-110 brightness-110 shadow-[0_0_40px_rgba(247,79,34,0.9)] rounded-full mt-[-38px]">
            <Image
              src="/images/cross.png"
              alt="Cross Icon"
              fill
              className="object-contain animate-pulse"
            />
          </div>
        </div>

        {/* Verse Box */}
        <div className="absolute top-[180px] right-[210px] md:right-[250px] bg-[#ffffff]/90 text-[#F74F22] text-left px-8 py-8 rounded-lg shadow-lg max-w-md z-10">
          <p className="text-3xl md:text-4xl italic font-semibold leading-snug">
            “Lovethy neighbour <br /> As <br /> Thyself”
          </p>
        </div>

        {/* PCC Members Carousel */}
        <div className="flex items-center justify-center mt-auto pt-[350px] space-x-3 sm:space-x-6">
          {/* Left Arrow */}
          <button
            onClick={prevMembers}
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#022147] text-[#022147] hover:bg-[#F74F22] hover:text-white hover:border-[#F74F22] transition-all duration-300 shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Members */}
          <div className="flex space-x-3 sm:space-x-5">
            {visibleMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 border-[#F74F22] overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                  <Image
                    src={member.src}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-[#022147] font-semibold text-sm sm:text-base">
                  {member.name}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextMembers}
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#022147] text-[#022147] hover:bg-[#F74F22] hover:text-white hover:border-[#F74F22] transition-all duration-300 shadow-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
