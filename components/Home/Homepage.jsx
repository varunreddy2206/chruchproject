"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      <div className="relative flex flex-col items-center justify-start bg-white text-center py-16 md:py-20 px-4 sm:px-6 md:px-10 mt-10 md:mt-16">
        {/* === Verse + Pastor Section === */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          {/* Verse */}
          <div className="text-[#F74F22] text-center lg:text-left max-w-md">
            <p className="text-2xl sm:text-3xl md:text-5xl italic font-semibold leading-snug drop-shadow-sm">
              “Lovethy neighbour <br /> As <br /> Thyself”
            </p>
          </div>

          {/* Pastor */}
          <div className="flex flex-col items-center justify-center mt-6 lg:mt-0">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/heroimg2.png"
                alt="Pastor Image"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
            <h3 className="bg-[#022147] text-white px-5 py-2 rounded-md font-semibold text-base sm:text-lg md:text-xl shadow-md mt-2">
              Pastor Anil
            </h3>

            {/* Cross Icon */}
            <div className="mt-4 flex items-center justify-center">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full shadow-[0_0_25px_rgba(247,79,34,0.8)] flex items-center justify-center">
                <Image
                  src="/images/cross.png"
                  alt="Cross Icon"
                  fill
                  className="object-contain animate-pulse"
                />
              </div>
            </div>
          </div>
        </div>

        {/* === PCC MEMBERS TITLE === */}
        <h2 className="text-[#022147] font-bold text-xl sm:text-2xl md:text-3xl mt-10 mb-4 text-center">
          Our PCC Members
        </h2>

        {/* === PCC Members Carousel === */}
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 transition-all duration-500">
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4">
            {/* Left Arrow */}
            <button
              onClick={prevMembers}
              className="tablet-arrow-size flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border border-[#022147] text-[#022147] hover:bg-[#F74F22] hover:text-white hover:border-[#F74F22] transition-all duration-300 shadow-sm md:translate-x-4"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Members */}
            <div className="flex space-x-2 sm:space-x-3 md:space-x-4 justify-center tablet-space-fix">
              {visibleMembers.map((member) => (
                <div key={member.id} className="flex flex-col items-center">
                  <div
                    className="relative 
        w-12 h-12 
        sm:w-14 sm:h-14 
        md:w-[4.2rem] md:h-[4.2rem]
        tablet-pcc-size
        rounded-full border-4 border-[#F74F22] overflow-hidden shadow-md 
        hover:scale-105 transition-transform duration-300"
                  >
                    <Image
                      src={member.src}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="tablet-member-text mt-2 text-[#022147] font-semibold text-xs sm:text-sm md:text-base">
                    {member.name}
                  </p>
                </div>
              ))}
            </div>


            {/* Right Arrow */}
            <button
              onClick={nextMembers}
              className="tablet-arrow-size flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border border-[#022147] text-[#022147] hover:bg-[#F74F22] hover:text-white hover:border-[#F74F22] transition-all duration-300 shadow-sm md:-translate-x-4"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
