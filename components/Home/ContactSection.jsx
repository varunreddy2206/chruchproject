"use client";
import { FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactSection() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section className="relative bg-white text-[#022147] py-20 overflow-hidden">
      {/* Animated background effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#F74F22_0%,_transparent_70%)]"
      />

      <motion.div
        className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {/* Left Side */}
        <motion.div variants={item}>
          <p className="uppercase tracking-wide font-medium flex items-center space-x-2 text-[#F74F22] text-sm lg:text-base">
            <span className="text-[#F74F22] text-lg">+</span>
            <span className="font-bold">Get in Touch</span>
          </p>


          {/* === Added Gallery Logo + Heading === */}
          <div className="flex items-center gap-4 mt-4">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/gallerylogo.png"
                alt="Gallery Logo"
                width={100}
                height={100}
                className="rounded-full shadow-lg"
              />
            </motion.div>

            <h2 className="text-4xl font-bold leading-snug">
              Let’s Build Something Great Together
            </h2>
          </div>
          {/* === End Added Section === */}

          <p className="mt-4 text-[#022147] max-w-md">
            Have questions, ideas, or need guidance? Reach out and let’s start
            creating something impactful for your community.
          </p>

          {/* Contact Info */}
          <motion.div className="mt-8 space-y-6" variants={container}>
            <motion.div className="flex items-center gap-4" variants={item}>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#022147]">
                <FaPhoneAlt className="text-pink-300 text-lg" />
              </div>
              <div>
                <p className="text-[#F74F22]">Call For Inquiry</p>
                <p className="text-xl font-semibold">+000 (222) 000 00</p>
              </div>
            </motion.div>

            <motion.div className="flex items-center gap-4" variants={item}>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#022147]">
                <FaEnvelope className="text-pink-300 text-lg" />
              </div>
              <div>
                <p className="text-[#F74F22]">Send Us Email</p>
                <p className="text-xl font-semibold">info@example.com</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          className="relative bg-[#022147] rounded-2xl p-8 shadow-2xl border border-[#F74F22]/40 backdrop-blur-sm"
          variants={item}
        >
          <h3 className="text-2xl font-bold mb-2 text-white">
            We’re Here for You
          </h3>
          <p className="text-[#F74F22] mb-6">
            Whether it’s prayer, counseling, or fellowship — you’re always welcome here.
          </p>

          <motion.form
            className="space-y-4"
            variants={container}
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Name & Email */}
            <motion.div className="grid grid-cols-2 gap-4" variants={container}>
              <motion.div className="relative" variants={item}>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded-md bg-transparent border border-[#F74F22] placeholder-[#F74F22] text-white focus:outline-none focus:ring-2 focus:ring-[#F74F22]"
                />
                <FaUser className="absolute right-3 top-3 text-[#F74F22]" />
              </motion.div>

              <motion.div className="relative" variants={item}>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-md bg-transparent border border-[#F74F22] placeholder-[#F74F22] text-white focus:outline-none focus:ring-2 focus:ring-[#F74F22]"
                />
                <MdEmail className="absolute right-3 top-3 text-[#F74F22]" />
              </motion.div>
            </motion.div>

            {/* Service Dropdown */}
            <motion.select
              className="w-full p-3 rounded-md bg-transparent border border-[#F74F22] text-[#F74F22] focus:outline-none focus:ring-2 focus:ring-[#F74F22]"
              variants={item}
            >
              <option className="bg-[#022147]">What you choose</option>
              <option className="bg-[#022147]">Morning Prayer</option>
              <option className="bg-[#022147]">Counselling</option>
              <option className="bg-[#022147]">Volunteer Programs</option>
            </motion.select>

            {/* Message */}
            <motion.textarea
              rows="4"
              placeholder="Write a request"
              className="w-full p-3 rounded-md bg-transparent border border-[#F74F22] placeholder-[#F74F22] text-white focus:outline-none focus:ring-2 focus:ring-[#F74F22]"
              variants={item}
            ></motion.textarea>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="flex items-center justify-center gap-3 w-full md:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#F74F22] to-[#c04827] text-black font-semibold shadow-md hover:shadow-xl transition-all"
              variants={item}
            >
              Send request
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <IoIosArrowForward className="text-[#F74F22] text-lg" />
              </span>
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
}
