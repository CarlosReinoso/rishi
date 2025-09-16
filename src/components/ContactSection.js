"use client";
import { motion } from "framer-motion";
import Button from "./Button";
import { EMAIL_ADDRESS, INSTAGRAM_PROFILE } from "@/constants";

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/20 to-third/20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-black mb-6">
            Join the Speech Heroes Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-third mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Whether you're a parent, teacher, speech therapist, or young reader,
            you are part of this superhero team. Let's work together to give
            every child a voice.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            href="/contact"
            variant="primary"
            className="text-lg px-8 py-4"
          >
            Book a School Visit
          </Button>
          <Button
            href="/book"
            variant="secondary"
            className="text-lg px-8 py-4"
          >
            Get the Book
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-white rounded-2xl shadow-lg"
        >
          <h3 className="text-xl font-playfair text-black mb-4">Contact Us</h3>
          <p className="text-gray-600 mb-6">
            For questions, bookings, or media inquiries, please get in touch
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="flex items-center text-primary hover:text-secondary transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {EMAIL_ADDRESS}
            </a>

            <a
              href={INSTAGRAM_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary hover:text-secondary transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281H7.721c-.49 0-.875.385-.875.875s.385.875.875.875h8.558c.49 0 .875-.385.875-.875s-.385-.875-.875-.875z" />
              </svg>
              @_thespeechheroes
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center text-black">
            <Button href="/contact" variant="outline" className="!text-black">
              Send Message
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
