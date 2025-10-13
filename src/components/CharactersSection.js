"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CharacterImage from "./CharacterImage";

export default function CharactersSection() {
  const speechHeroes = [
    {
      name: "Aryan",
      image: "/Aryan png.png",
      description:
        "Aryan is a boy with a big imagination and a lot to say. Sometimes the words take longer to come out, and that can be hard. But Aryan has learned that there are many ways to communicate; through signs, actions, drawings, and sounds. Every time he faces a challenge, he keeps going. That is his superpower.",
      superpower: "Persistence & Creativity",
    },
    {
      name: "Rishi",
      image: "/super rishi png.png",
      description:
        "Rishi is Aryan's dad and biggest supporter. He listens, encourages, and celebrates every achievement, no matter how small. He has learned to be patient and creative, finding different ways to help Aryan express himself.",
      superpower: "Support & Encouragement",
    },
  ];

  const wordStoppers = [
    {
      name: "Frustrato",
      image: "/frustrato png.png",
      strength:
        "Explodes emotions like a volcano. He covers everything in hot lava when things feel overwhelming.",
      weakness: "Calm breathing and emotional tools can cool him down.",
    },
    {
      name: "Hurry Up",
      image: "/hurry up png.png",
      strength:
        "Zooms around shouting. Makes children feel rushed and anxious.",
      weakness: "Patience and pacing stop him in his tracks.",
    },
    {
      name: "Silo",
      image: "/silo png.png",
      strength: "Makes voices disappear.",
      weakness: "Eye contact, connection, and confidence.",
    },
    {
      name: "Captain Confuso",
      image: "/confuso png.png",
      strength: "Spins thoughts and words into dizzy circles.",
      weakness: "Visuals, signs, and support tools bring focus and clarity.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-figtree mb-4">
            Meet the Characters
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
        </motion.div>

        {/* Speech Heroes */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-third"
          >
            The Speech Heroes
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {speechHeroes.map((hero, index) => (
              <motion.div
                key={hero.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  transition: { duration: 0.3 },
                }}
                className="group relative bg-gradient-to-br from-cyan-50 via-primary/10 to-secondary/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-primary/20 hover:border-primary/40 overflow-hidden backdrop-blur-sm"
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/30 to-third/30 rounded-full blur-2xl transform -translate-x-8 translate-y-8"></div>
                </div>

                <div className="text-center mb-6 relative z-10">
                  <div className="mb-6 relative">
                    {/* Glow effect behind image */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                    <div className="relative">
                      <CharacterImage
                        src={hero.image}
                        alt={hero.name}
                        size="xlarge"
                        className="group-hover:animate-float-slow"
                      />
                    </div>
                  </div>

                  {/* Enhanced character name and superpower */}
                  <div className="relative">
                    <h4 className="text-3xl font-bold text-black font-figtree mb-3 group-hover:text-primary transition-colors duration-300">
                      {hero.name}
                    </h4>
                    <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4 group-hover:w-32 transition-all duration-300"></div>
                    <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                      {hero.superpower}
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <p className="text-gray-700 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-300">
                    {hero.description}
                  </p>
                </div>

                {/* Subtle corner accent */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Word Stoppers */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative w-full max-w-4xl h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] mx-auto px-4">
              <Image
                src="/the word stoppers title.png"
                alt="The Word Stoppers"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-lead text-gray-600 max-w-2xl mx-auto">
              Mysterious, sneaky, and strong, the Word Stoppers live inside the
              mind, where they try to stop communication in its tracks. But
              every villain has a weakness...
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {wordStoppers.map((villain, index) => (
              <motion.div
                key={villain.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  transition: { duration: 0.3 },
                }}
                className="group relative bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-purple-200/50 hover:border-purple-300/70 flex flex-col overflow-hidden backdrop-blur-sm"
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full blur-3xl transform translate-x-8 -translate-y-8"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-400 to-purple-400 rounded-full blur-2xl transform -translate-x-6 translate-y-6"></div>
                </div>

                {/* Character image with enhanced styling */}
                <div className="text-center mb-6 flex-shrink-0 relative z-10">
                  <div className="mb-6 relative">
                    {/* Glow effect behind image */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full blur-xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                    <div className="relative">
                      <CharacterImage
                        src={villain.image}
                        alt={villain.name}
                        size="large"
                        className="group-hover:animate-float-slow"
                      />
                    </div>
                  </div>

                  {/* Enhanced character name */}
                  <div className="relative">
                    <h4 className="text-2xl font-bold text-black font-figtree mb-2 group-hover:text-purple-700 transition-colors duration-300">
                      {villain.name}
                    </h4>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
                  </div>
                </div>

                {/* Enhanced content sections */}
                <div className="space-y-6 flex-grow relative z-10">
                  {/* Strength section */}
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 border-l-4 border-emerald-400 group-hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                      <h5 className="text-small font-bold text-emerald-700 font-figtree uppercase tracking-wide">
                        Strength
                      </h5>
                    </div>
                    <p className="text-small text-gray-700 leading-relaxed pl-5">
                      {villain.strength}
                    </p>
                  </div>

                  {/* Weakness section */}
                  <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-4 border-l-4 border-red-400 group-hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></div>
                      <h5 className="text-small font-bold text-red-700 font-figtree uppercase tracking-wide">
                        Weakness
                      </h5>
                    </div>
                    <p className="text-small text-gray-700 leading-relaxed pl-5">
                      {villain.weakness}
                    </p>
                  </div>
                </div>

                {/* Subtle corner accent */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-purple-200/30 to-indigo-200/30 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-black font-figtree mb-4">
              Ready to Join the Adventure?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              They show that Speech and Language delays do not define who you
              are. With understanding, creativity, and support, every child can
              grow in confidence and find their own voice.
            </p>
            <a
              href="/book"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:from-secondary hover:to-third transition-all duration-300 transform hover:scale-105"
            >
              Get the Book
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
