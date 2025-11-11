"use client";

import Image from "next/image";

export default function TopBar() {
  return (
    <div
      className="
        fixed top-0 left-0 w-full 
        bg-white text-[#022147] 
        py-3 px-4 md:px-8 
        flex items-center justify-between 
        z-50 shadow-sm border-b border-gray-200
      "
      style={{ height: "70px" }}
    >
      {/* === Left Logo === */}
      <div className="flex items-center flex-shrink-0">
        <Image
          src="/images/cross.png"
          alt="Church Logo Left"
          width={32}
          height={32}
          className="object-contain sm:w-[38px] sm:h-[38px]"
        />
      </div>

      {/* === Center Text (Perfectly Centered in Same Line) === */}
      <div
        className="
          absolute left-1/2 transform -translate-x-1/2 
          flex flex-col sm:flex-row items-center sm:items-baseline 
          text-center space-x-0 sm:space-x-2
        "
      >
        <h1
          className="
            font-extrabold tracking-wide
            text-[14px] xs:text-[16px]
            sm:text-[29px] md:text-[29px] lg:text-[49px]
            text-[#022147]
            whitespace-nowrap
          "
        >
          St. Johns Lutheran Church
        </h1>
        <span
          className="
            text-[#022147]
            font-semibold
            text-[12px] xs:text-[14px]
            sm:text-[18px] md:text-[24px]
            whitespace-nowrap
          "
        >
          Since 2000
        </span>
      </div>

      {/* === Right Logo === */}
      <div className="flex items-center flex-shrink-0">
        <Image
          src="/images/cross.png"
          alt="Church Logo Right"
          width={32}
          height={32}
          className="object-contain sm:w-[38px] sm:h-[38px]"
        />
      </div>
    </div>
  );
}
