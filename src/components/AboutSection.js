"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { getAryanAgeText } from "@/utils/ageCalculator";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-playfair">
                About Us
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                We're the Kaushal family — Rishi, Priya, and Aryan — a family on
                a mission to raise awareness about Speech and Language delays in
                children.
              </p>

              <p>
                Our journey began when Aryan, now {getAryanAgeText()}, was
                diagnosed with a Speech and Language delay in particular
                Developmental Language Delay. Like many families, we faced the
                worry and uncertainty of navigating a world not always built to
                understand children who communicate differently.
              </p>

              <p>
                With limited support available rather than feeling alone, we
                chose to turn our experience into something creative and
                hopeful. Last year with Rishi's imagination, Priya's steady
                support, and Aryan's determination,{" "}
                <strong>The Speech Heroes were born!</strong>
              </p>

              <p className="text-lg font-medium text-third">
                A world of story, song, and Superheroes built on empathy and
                expression.
              </p>

              <p>
                Priya has been a constant source of encouragement behind the
                scenes, and care to every step of the journey. Rishi, a creative
                advocate and runner who has long raised awareness on issues like
                Domestic Abuse and Homelessness, now uses his energy to
                spotlight the importance of communication for all children.
              </p>

              <p className="text-lg font-medium">
                Our hope is that The Speech Heroes brings comfort to families
                like ours and reminds every child that their voice, in whatever
                form, is powerful.
              </p>
            </div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <a
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:from-secondary hover:to-third transition-all duration-300 transform hover:scale-105"
              >
                Read Our Full Story
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div> */}
          </motion.div>

          {/* Right side - Family Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Family Pic.jpg"
                alt="The Kaushal Family - Rishi, Priya, and Aryan"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              {/* Overlay with family names */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent p-6">
                <div className="relative">
                  {/* Branded accent line */}
                  <div className="absolute -top-2 left-0 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>

                  <div className="text-white space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold font-playfair tracking-wide text-white">
                      The Kaushal Family
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-fourth rounded-full"></div>
                      <p className="text-base font-medium text-primary/90 tracking-wide">
                        Rishi, Priya, and Aryan
                      </p>
                      <div className="w-2 h-2 bg-fourth rounded-full"></div>
                    </div>
                  </div>

                  {/* Subtle brand pattern overlay */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-fourth rounded-full opacity-60"
            />
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-60"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
