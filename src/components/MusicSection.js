"use client";
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
                Our Music Project – Speech Bound
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-fourth to-fifth rounded-full"></div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                When Aryan was diagnosed with a speech and language challenge,
                communication became one of the biggest obstacles our family had
                ever faced. He struggled to understand words, express himself
                and make sense of language.
              </p>

              <p>As a dad, Rishi was determined to find a way to reach him.</p>

              <p>
                One thing stood out above everything else: music. Aryan would
                light up whenever he heard a beat. Rishi realised that while
                spoken words were difficult, music seemed to unlock something
                special.
              </p>

              <p>
                One evening at home, he turned to Priya and said, &ldquo;I&apos;m
                going to write a rap song.&rdquo;
              </p>

              <p>
                Despite having no music experience, Rishi spent weeks writing
                lyrics inspired by Aryan&apos;s journey, practicing them
                together every night.
              </p>

              <p className="text-lg font-medium text-black">
                Then something incredible happened.
              </p>

              <p>
                Aryan started repeating the words back. For a child who
                struggled to communicate, hearing him say the lyrics was an
                emotional breakthrough. Music had become more than entertainment,
                it had become a bridge to communication, giving Aryan the
                confidence to say words he had previously found difficult.
              </p>

              <p>
                Seeing this progress convinced Rishi that the song needed to be
                shared with other families. With the support of their close
                friend, Ranjit, they recorded Speech Bound using a children&apos;s
                gaming headset, a Rode microphone and basic recording software.
              </p>

              <p>
                The dream quickly grew bigger. With no budget, they created a
                children&apos;s music video entirely from Rishi&apos;s
                imagination, determination and belief that a story about speech
                and language challenges could be powerful, uplifting and fun.
              </p>

              <div className="bg-white/60 rounded-xl p-6 border-l-4 border-fourth">
                <p className="text-lg font-medium text-black">
                  Speech Bound tells the story of a child finding their voice
                  through the encouragement of a parent who never gives up. It
                  was released on World Voice Day, alongside a fundraiser for
                  Speech and Language UK, with the goal of raising £5,000 to
                  support the 2 million children in the UK who experience speech
                  and language challenges.
                </p>
              </div>

              <p>
                Since its release, Speech Bound has gained national attention,
                featuring on BBC Radio WM with Mya Khan, multiple podcasts, radio
                stations and live events. The project has taken Rishi and Aryan
                to festivals across the UK, with their biggest performance on the
                main stage, so far at Soul Revolution Festival 2026, where they
                performed Speech Bound in front of hundreds of people and inspired
                families with their story.
              </p>

              <p className="text-lg font-medium text-third">
                What began as one father&apos;s attempt to help his son
                communicate became the spark that inspired The Speech Heroes, a
                growing universe of stories, characters and creativity designed
                to help children find their voice.
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
