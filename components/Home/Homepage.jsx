"use client";

import Image from "next/image";

export default function Homepage() {
    return (
        <section className="relative w-full h-[90vh] flex items-center justify-start overflow-hidden">
            {/* === Background Image === */}
            <Image
                src="/images/homepage.jpg"
                alt="Church Background"
                fill
                className="object-cover"
                priority
            />

            {/* === Overlay Box === */}
            <div className="absolute left-[8%] md:left-[12%] bg-[#F74F22]/90 text-white p-6 md:p-8 max-w-xl rounded-md shadow-lg z-20">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    GOD GIVE US POWER <br /> TO BELIEVE
                </h1>
                <p className="mt-4 text-base md:text-lg font-medium">
                    We are a church that believes in Jesus Christ and the followers,
                    and we are a church that believes in Jesus Christ.
                </p>
            </div>

            {/* === ✅ Left Side Glowing Cross === */}
            <div className="absolute left-[5%] bottom-[65%] sm:bottom-[70%] z-30">
                <div className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 transition-all duration-500 ease-out hover:scale-110 brightness-110 shadow-[0_0_30px_rgba(247,79,34,0.8)] rounded-full">
                    <Image
                        src="/images/cross.png"
                        alt="Cross Icon"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            {/* === ✅ Right Side Overlapping Image + Pastor Name === */}
            <div className="absolute right-[4%] bottom-[12%] sm:right-[6%] sm:bottom-[14%] md:right-[5%] md:bottom-[15%] flex flex-col items-center z-20">
                <div className="relative flex items-center justify-center group">

                    {/* === Image2 (Front Image) === */}
                    <div
                        className="relative w-100 h-100 sm:w-100 sm:h-100 md:w-125 md:h-125 
                 z-20 transition-all duration-500 ease-out hover:scale-110 
                 hover:brightness-110  
                 rounded-lg"
                    >
                        <Image
                            src="/images/heroimg2.png"
                            alt="Main Cart Image"
                            fill
                            className="object-contain rounded-lg"
                        />
                    </div>
                </div>

                {/* === ✅ Pastor Name Below Image === */}
                <div className="absolute left-[39%] bottom-[-50px] sm:bottom-[-50px]">
                    <h3 className="bg-[#022147] text-[#ffff] px-6 py-2 rounded-lg shadow-md text-center font-semibold text-sm sm:text-base md:text-lg">
                        Pastor Anil
                    </h3>
                </div>


            </div>
        </section>
    );
}
