"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { YOUTUBE_VIDEO } from "@/constants";

export default function MusicSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-fourth/10 to-fifth/10">
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-figtree">
                Our Music Project - Speech Bound
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-fourth to-fifth rounded-full"></div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Last year something clicked for Aryan after his first term at
                school where he had been learning phonics; he discovered a love
                for music, rhythm, and even beatboxing.
              </p>

              <p>
                One evening in their living room, Rishi noticed that Aryan
                connected to music and enjoyed singing, he turned to Priya and
                said, "It's time to make a song."
              </p>

              <p>
                What started as a wild idea slowly spiralled into something
                real. With no prior music experience, Rishi and Aryan took
                several weeks to write lyrics for their song, continuing to
                practice each night until it was perfect. With help from their
                trusted friend Ranjit they recorded the track using a kids'
                headset, a rode mic, and basic recording software.
              </p>

              <p>
                From there, they dreamed even bigger; creating a full script for
                a children's music video with absolutely zero budget. Every
                scene was built from Rishi's imagination, determination, and the
                belief that a message about Speech and Language delay could be
                powerful, fun, and full of heart.
              </p>

              <div className="bg-white/60 rounded-xl p-6 border-l-4 border-fourth">
                <p className="text-lg font-medium text-black">
                  Speech Bound reflects Aryan's struggles and Rishi's
                  encouragement as a dad. It was released on World Voice Day. As
                  part of this project, they launched a fundraiser for Speech
                  and Language UK, setting out to raise £5,000 to support the 2
                  million children in the UK affected by Speech and Language
                  delays.
                </p>
              </div>

              <p>
                The song has since led to radio features on BBC Radio WM with
                Mya Khan and featured on a number of podcasts and live shows.
                Rishi and Aryan have been touring Youth Festivals and performed
                in front of hundreds of people.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/60 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-fourth">£2000</div>
                  <div className="text-sm text-gray-600">raised to date</div>
                </div>
                <div className="bg-white/60 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-fourth">
                    BBC Radio
                  </div>
                  <div className="text-sm text-gray-600">
                    Featured on WM & Unity FM
                  </div>
                </div>
              </div>

              <p className="text-lg font-medium text-third">
                Speech Bound has become a rallying call for awareness,
                inclusion, and creative expression for all children who find it
                hard to be heard.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <a
                href={YOUTUBE_VIDEO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-fourth to-fifth text-white font-medium rounded-full hover:from-fifth hover:to-sixth transition-all duration-300 transform hover:scale-105"
              >
                Watch the Music Video
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Video Embed */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              {/* YouTube Video Embed */}
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/3quja6Ekv2k"
                  title="The Speech Heroes Music Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Decorative elements */}
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
              className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-60"
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
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-fourth rounded-full opacity-60"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
