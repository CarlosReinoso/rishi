"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BookPage() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-fourth/20 to-fifth/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-playfair mb-6">
              Get the Book
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-fourth to-fifth rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The Speech Heroes vs. The Word Stoppers - An uplifting picture
              book that helps children find their voice
            </p>
          </motion.div>
        </div>
      </section>

      {/* Book Details Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Book Image */}
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
                    <div className="w-48 h-64 bg-gradient-to-br from-primary to-secondary rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-4xl">📚</span>
                    </div>
                    <p className="text-gray-600 font-medium">
                      Book cover coming soon!
                    </p>
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

            {/* Book Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-black font-playfair">
                  The Speech Heroes vs. The Word Stoppers
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg font-medium text-third">
                  This uplifting picture book follows a young boy and his father
                  as they take on imaginative villains representing the
                  real-life challenges of Speech and Language delay.
                </p>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border-l-4 border-primary">
                  <h3 className="text-lg font-bold text-black mb-3">
                    Book Features:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Two art styles: soft, traditional look for real-life
                      scenes and action-packed comic style for the superhero
                      world
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Aimed at children aged 4 to 8, families, and educators
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Offers hope, encouragement, and representation for all
                      kinds of voices
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Includes discussion questions for parents and teachers
                    </li>
                  </ul>
                </div>

                <p>
                  The book features two art styles: a soft, traditional look for
                  real-life scenes and an action-packed comic style for the
                  superhero world.
                </p>

                <p className="text-lg font-medium">
                  Perfect for children aged 4 to 8, families, and educators, the
                  story offers hope, encouragement, and representation for all
                  kinds of voices.
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

                <p className="text-sm text-gray-500">
                  *Coming soon to Amazon - link will be added when live
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About the Illustrator */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-third/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-black font-playfair">
                  Who Is Jon Foard?
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-third to-primary rounded-full"></div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Hi, I'm Jon, a Digital Illustrator from Derby, United Kingdom.
                  I live with my wife Beth, my two kids, Jonah and Margot and
                  our two cats, Edie and Mabel. I love to draw and create fun
                  characters and places.
                </p>

                <p>
                  I did a lot of drawing as a kid, but I didn't really start to
                  take it seriously until about 2021, when I started to learn
                  how to do it digitally. After a lot of practice and YouTube
                  tutorials, I was able to get my prints in the Derby Museum
                  gift shop, which led to some small jobs, and then my first
                  book for a self published author.
                </p>

                <div className="bg-white/60 rounded-xl p-6 border-l-4 border-third">
                  <p className="text-lg font-medium text-black">
                    "I was really excited to work with Rishi and Aryan on the
                    Speech Heroes, it was a unique opportunity to work in a
                    comic book art style, drawing cool superheroes! But even
                    better was knowing it was raising awareness about Speech and
                    Language delay and how it impacts the kids that have it, and
                    shares the help they can receive in an exciting way."
                  </p>
                </div>

                <p>
                  I love my job and I've learned a lot along the way. But none
                  of it would be possible without the help and support of my
                  loving family.
                </p>
              </div>
            </motion.div>

            {/* Illustrator Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Jon.jpg"
                  alt="Jon Foard - Digital Illustrator"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black font-playfair mb-6">
              Join the Adventure
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Help us spread awareness about speech and language delays and
              support children in finding their voice. Every purchase helps us
              reach more families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:from-secondary hover:to-third transition-all duration-300 transform hover:scale-105"
              >
                Pre-order Now
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-medium rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
