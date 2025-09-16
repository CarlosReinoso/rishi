"use client";
import Image from "next/image";
import { motion } from "framer-motion";

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-playfair mb-4">
            Meet the Characters
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every child with a speech and language delay battles with these
            villains on a daily basis. But with the right support, every child
            can be a Speech Hero!
          </p>
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={hero.image}
                      alt={hero.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-black mb-2">
                    {hero.name}
                  </h4>
                  <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-medium">
                    {hero.superpower}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-center">
                  {hero.description}
                </p>
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
            <div className="relative w-[500px] h-80 mx-auto">
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mysterious, sneaky, and strong, the Word Stoppers live inside the
              mind, where they try to stop communication in its tracks. But
              every villain has a weakness...
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {wordStoppers.map((villain, index) => (
              <motion.div
                key={villain.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-fourth/30 flex flex-col"
              >
                <div className="text-center mb-6 flex-shrink-0">
                  <div className="relative w-40 h-40 mx-auto mb-4">
                    <Image
                      src={villain.image}
                      alt={villain.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-4">
                    {villain.name}
                  </h4>
                </div>

                <div className="space-y-4 flex-grow">
                  <div>
                    <h5 className="text-sm font-semibold text-green-600 mb-2">
                      Strength:
                    </h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {villain.strength}
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-red-600 mb-2">
                      Weakness:
                    </h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {villain.weakness}
                    </p>
                  </div>
                </div>
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
            <h3 className="text-2xl font-bold text-black mb-4">
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
