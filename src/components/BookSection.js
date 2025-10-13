"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BookSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Book Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/book-cover.jpg"
                alt="The Speech Heroes vs. The Word Stoppers - Book Cover"
                width={400}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
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

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-figtree">
                Get the Book
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-emphasis text-third">
                The Speech Heroes Vs. The Word Stoppers is now available!
              </p>

              <p>
                In a world full of noise, Aryan discovers the power of
                communication in many forms.
              </p>

              <p>
                Join Aryan as he faces the Word Stoppers, villains every child
                with a Speech and Language delay knows and follow him as he
                becomes the Superhero of his own story.
              </p>

              <p>
                A powerful colourful picture book about courage, communication,
                and the magic of every voice. Packed with comic-style energy,
                The Speech Heroes delivers a thrilling superhero adventure that
                children will love
              </p>

              <p>
                The book is aimed at children aged 4 to 8, along with their
                families, practitioners, and professionals who support them.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border-l-4 border-primary">
                <h3 className="text-emphasis text-black mb-3">Review:</h3>
                <p className="text-gray-700 italic mb-4">
                  'The Speech Heroes' offers a thoughtful and unique portrayal
                  of the emotions and experiences of a young child with speech,
                  language, and communication needs. These are based around the
                  first-hand experiences of Aryan and his father, Rishi who have
                  been working jointly to raise awareness and educate others.
                  This book is highly recommended for children, families,
                  caregivers, and educators supporting young people.
                </p>
                <p className="text-gray-600 font-medium">
                  Sahar Nashir
                  <br />
                  Specialist Speech and Language Therapist
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-4 space-y-4"
            >
              <a
                href="#"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:from-secondary hover:to-third transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Get Your Copy Today
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                  />
                </svg>
              </a>

              <p className="text-small text-gray-500">
                *Coming soon to Amazon - link will be added when live
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
