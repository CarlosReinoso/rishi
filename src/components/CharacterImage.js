"use client";
import Image from "next/image";

export default function CharacterImage({
  src,
  alt,
  size = "large", // small, medium, large, xlarge
  className = "",
}) {
  const sizeClasses = {
    small: "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32",
    medium: "w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48",
    large: "w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64",
    xlarge:
      "w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80",
  };

  return (
    <div className={`relative ${sizeClasses[size]} mx-auto ${className}`}>
      <Image src={src} alt={alt} fill className="object-contain" priority />
    </div>
  );
}
