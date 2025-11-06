"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PccMembers() {
  const directors = [
    { name: "James Anderson", role: "Pcc Member", img: "/images/pastor7.avif" },
    { name: "Amelia Fairchild", role: "Pcc Member", img: "/images/pastor8.avif" },
    { name: "Thomas Ellington", role: "Pcc Member", img: "/images/pastor9.jpg" },
    { name: "Olivia Westwood", role: "Pcc Member", img: "/images/pastor10.jpg" },
    { name: "Ethan Brooks", role: "Pcc Member", img: "/images/pastor11.avif" },
    { name: "Sophia Clarke", role: "Pcc Member", img: "/images/pastor12.jpg" },
    { name: "Sarah D", role: "Pcc Member", img: "/images/pastor1.webp" },
    { name: "Isabella Foster", role: "Pcc Member", img: "/images/pastor2.jpeg" },
  ];

  return (
    <section className="w-full flex justify-center bg-[#ffffff] px-6 md:px-10 lg:px-16 py-16">
      <div className="w-full max-w-7xl">
        {/* Heading */}
        <h2 className="uppercase tracking-wide font-medium flex items-center justify-center space-x-2 text-[#F74F22] text-sm lg:text-base">
          <span className="text-[#F74F22] text-lg">+</span>
          <span className="font-bold">Our PCC Members</span>
        </h2>


        {/* Section Tagline */}
        <p className="text-center text-[#022147] mt-4 mb-12 max-w-2xl mx-auto">
          Meet the visionary leaders driving our mission forward with dedication,
          expertise, and innovation.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {directors.map((director, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-[#022147] rounded-2xl shadow-lg overflow-hidden group relative"
            >
              {/* Image */}
              <div className="relative p-4">
                <img
                  src={director.img}
                  alt={director.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>

              {/* Info */}
              <div className="px-4 pb-6 text-center">
                {/* === Cross + Name + Cross === */}
                <div className="flex items-center justify-center gap-3">
                  <Image
                    src="/images/cross.png"
                    alt="Cross Left"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                  <h3 className="text-lg font-semibold text-white">
                    {director.name}
                  </h3>
                  <Image
                    src="/images/cross.png"
                    alt="Cross Right"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>

                <p className="text-[#F74F22] text-sm mt-2">{director.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
