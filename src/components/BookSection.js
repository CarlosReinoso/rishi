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
              {/* Placeholder for book cover - will be replaced with actual book image */}
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-40 bg-gradient-to-br from-primary to-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">📚</span>
                  </div>
                  <p className="text-gray-600">Book cover coming soon!</p>
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

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-playfair">
                Get the Book
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg font-medium text-third">
                The Speech Heroes vs. The Word Stoppers is now available!
              </p>
              
              <p>
                This uplifting picture book follows a young boy and his father as they take on imaginative villains representing the real-life challenges of Speech and Language delay.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border-l-4 border-primary">
                <h3 className="text-lg font-bold text-black mb-3">Book Features:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Two art styles: soft, traditional look for real-life scenes and action-packed comic style for the superhero world
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Aimed at children aged 4 to 8, families, and educators
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Offers hope, encouragement, and representation for all kinds of voices
                  </li>
                </ul>
              </div>

              <p>
                The book features two art styles: a soft, traditional look for real-life scenes and an action-packed comic style for the superhero world.
              </p>

              <p className="text-lg font-medium">
                Perfect for children aged 4 to 8, families, and educators, the story offers hope, encouragement, and representation for all kinds of voices.
              </p>
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
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
              </a>
              
              <p className="text-sm text-gray-500">
                *Coming soon to Amazon - link will be added when live
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
