"use client";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import { useState } from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import { NAV_ITEMS } from "@/constants";

export default function SpeechHeroesHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile-only white navbar - visible from md down */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-white">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Left: Social Media Icons */}
          <div className="flex items-center">
            <SocialMediaIcons isScrolled={true} />
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center items-center">
            <Image
              src="/logo.png"
              alt="The Speech Heroes Logo"
              width={60}
              height={60}
              priority
            />
          </div>

          {/* Right: Hamburger Menu */}
          <div className="flex items-center">
            <button
              className="focus:outline-none"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="black"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal - visible from md down */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-60 z-40 flex justify-end">
          <div className="w-full bg-primary h-full flex flex-col p-8 relative animate-slide-in-right">
            <button
              className="absolute top-4 right-4 text-black text-3xl focus:outline-none"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              &times;
            </button>
            <div className="flex-1 flex flex-col justify-center items-center gap-8">
              <div className="flex flex-col items-center mb-8">
                <Image
                  src="/logo.png"
                  alt="The Speech Heroes Logo"
                  width={80}
                  height={80}
                  priority
                />
              </div>

              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xl font-medium hover:text-secondary transition font-figtree text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* Social Media Icons in Mobile Menu */}
              <div className="mt-8">
                <SocialMediaIcons isScrolled={true} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile: Direct image without section wrapper - visible from md down */}
      <div className="md:hidden" style={{ marginTop: "110px" }}>
        <Image
          src="/hero-mobile.jpg"
          alt="The Speech Heroes - Empowering Children with Speech & Language Delays"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
          priority
          className="object-contain"
        />
      </div>

      {/* Desktop: Section with background - hidden from md down */}
      <section
        className="hidden md:block relative h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{ backgroundColor: "#74E9E3" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Calmer gradient overlay - sky blue to white */}
        {/* <div
          className="absolute inset-0 z-5"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(135, 206, 235, 0.3) 0%, rgba(173, 216, 230, 0.2) 40%, rgba(240, 248, 255, 0.1) 70%, transparent 100%)`,
          }}
        ></div> */}

        {/* Subtle dark overlay for text readability */}
        {/* <div className="absolute inset-0 z-6 bg-black/20"></div> */}

        {/* Animated background patterns - more subtle */}
        <div className="absolute inset-0 z-1 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-20 w-3 h-3 bg-white/15 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [0, -12, 0],
              x: [0, -12, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-40 right-40 w-4 h-4 bg-primary/20 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [0, -18, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute top-60 right-60 w-2 h-2 bg-fourth/25 rounded-full blur-sm"
          />
        </div>

        {/* Content container with improved layout */}
        {/* <div className="absolute inset-0 flex items-center justify-between p-4 md:p-8 lg:p-12 z-10">
          {/* Left side - Text content */}
        {/* <div className="flex-1 max-w-2xl">
            {/* Main heading */}
        {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-4 leading-tight drop-shadow-2xl">
                The Speech Heroes
              </h1>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-xl md:text-2xl text-white/90 font-medium drop-shadow-lg"
              >
                Where imagination meets courage
              </motion.div>
            </motion.div>

            {/* Short, impactful tagline */}
        {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mb-8"
            >
              <p className="text-lg md:text-xl text-white/95 leading-relaxed drop-shadow-lg max-w-lg">
                Every child has a voice. Every parent is a hero.
              </p>
            </motion.div>

            {/* Enhanced button section */}
        {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
              >
                <Button variant="primary" href="/characters">
                  Discover the Heroes
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
              >
                <Button variant="secondary" href="/book">
                  Get Your Copy
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side - Illustration space (currently using background image) */}
        {/* <div className="hidden lg:block flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="relative w-full h-96"
            >
              {/* Floating animation for the hero illustration */}
        {/* <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-fourth/20 rounded-3xl blur-xl"
              />
            </motion.div>
          </div>
        </div> */}
      </section>

      {/* Enhanced scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-2 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div> */}
    </>
  );
}
