"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import BookSection from "@/components/BookSection";

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-figtree mb-6">
              The Speech Heroes Vs. The Word Stoppers
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-fourth to-fifth rounded-full mx-auto mb-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Book Details Section */}

      <BookSection />

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
                <h2 className="text-3xl md:text-4xl font-bold text-black font-figtree">
                  Meet the Illustrator
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-third to-primary rounded-full"></div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Hi, I'm Jon, a Digital Illustrator from Derby, United Kingdom.
                  I live with my wife Beth, my two kids, Jonah and Margot and
                  our two cats, Edie and Mabel. I love to draw and create fun
                  characters and places. I've worked on several unique
                  children's books and a few private commissions.
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
                  <p className="text-emphasis text-black">
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

      {/* Meet the Author */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Author Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/rishi.png"
                  alt="Rishi Kaushal - Author"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-black font-figtree">
                  Meet the Author
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  I am Rishi Kaushal, a dad whose biggest inspiration is my son
                  Aryan. Aryan battles with Developmental Language Disorder, and
                  our family has learnt that this journey is not a short one.
                  Every day brings new challenges, but we face them together,
                  and as a father I will always encourage Aryan to rise, to try
                  again, and to know his voice matters.
                </p>

                <p>
                  That determination is what inspired The Speech Heroes. In this
                  story, children see the battles that take place inside the
                  mind of every kid with a Speech and Language delay, with
                  villains that try to stop words and the confidence and bravery
                  it takes to overcome them.
                </p>

                <div className="bg-white/60 rounded-xl p-6 border-l-4 border-primary">
                  <p className="text-emphasis text-black">
                    "I wrote this book because I know how many children live
                    with Speech and Language difficulties, and how it can leave
                    families feeling unseen or isolated. This book is my way of
                    showing that no child is alone in this journey."
                  </p>
                </div>

                <p>
                  Our battle continues, but we will not give in. Through
                  creativity, storytelling, and connection, I want to help
                  children everywhere believe in their own superpowers.
                </p>

                <p className="text-emphasis text-third">
                  Looking ahead, my dream is for The Speech Heroes to grow into
                  more than just a book. I want it to become a leading space for
                  children's tools and resources. A place families, schools,
                  professionals and communities can come to for support,
                  creativity and hope.
                </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-black font-figtree mb-6">
              Join the Adventure
            </h2>
            <p className="text-lead text-gray-600 mb-8 max-w-2xl mx-auto">
              Help us spread awareness about Speech and Language delays and
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
