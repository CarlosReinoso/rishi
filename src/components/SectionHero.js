"use client";
import { motion } from "framer-motion";

export default function SectionHero({
  title,
  subtitle,
  accentFrom,
  accentTo,
  large = false,
  animated = false,
}) {
  const showAccentBar = accentFrom && accentTo;

  const titleClasses =
    "text-black font-figtree font-medium mb-4 md:mb-6 text-xl md:text-2xl lg:text-3xl xl:text-4xl";

  const content = (
    <>
      <h1 className={large ? titleClasses : `${titleClasses} mt-20 md:mt-18`}>
        {title}
      </h1>

      {showAccentBar && (
        <div
          className={`w-24 h-1 bg-gradient-to-r ${accentFrom} ${accentTo} rounded-full mx-auto ${subtitle ? "mb-6" : "mb-0"}`}
        ></div>
      )}

      {subtitle && (
        <p className="text-lead text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </>
  );

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-b from-primary/90 via-primary/60 to-third ${
        large ? "min-h-[28vh] md:min-h-[36vh] py-20 md:py-28" : "h-[20vh] md:h-[30vh]"
      }`}
    >
      {/* Animated wave shapes */}
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            className="animate-float-slow"
            d="M0,50 C20,40 40,60 60,50 C80,40 100,60 100,50 L100,100 L0,100 Z"
            fill="white"
          />
        </svg>
        <svg
          className="absolute top-0 right-0 w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            className="animate-float-slower"
            d="M100,30 C80,20 60,40 40,30 C20,20 0,40 0,30 L0,100 L100,100 Z"
            fill="white"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            className="animate-float-slowest"
            d="M0,70 C20,60 40,80 60,70 C80,60 100,80 100,70 L100,100 L0,100 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"></div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        {animated ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {content}
          </motion.div>
        ) : (
          content
        )}
      </div>
    </div>
  );
}
