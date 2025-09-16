"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo({ isScrolled, onClick }) {
  return (
    <div className="flex-1 flex justify-center md:justify-center mt-8 md:mt-0">
      <Link
        onClick={onClick}
        href="/"
        className="flex flex-col items-center md:items-start"
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={isScrolled ? 60 : 80}
          height={isScrolled ? 60 : 80}
          className="transition-all duration-300 md:translate-y-0 translate-y-0.5"
        />
      </Link>
    </div>
  );
}
