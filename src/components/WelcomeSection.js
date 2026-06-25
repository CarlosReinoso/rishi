"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Welcome to The Speech Heroes
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            The world&apos;s first superhero brand for children with speech and
            language challenges.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Content with Image */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Father and Son Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                <Image
                  src="/father-and-son.jpeg"
                  alt="Father and son - The Speech Heroes family journey"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                {/* Interactive overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Heart icon overlay */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-red-500 text-lg">❤️</span>
                </motion.div>
              </div>

              {/* Enhanced floating decorative elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-70 shadow-lg"
              />
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, -15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-70 shadow-lg"
              />
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  x: [0, 8, 0],
                  rotate: [0, 8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute top-1/2 -left-8 w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-60 shadow-lg"
              />
              <motion.div
                animate={{
                  y: [0, -18, 0],
                  x: [0, -10, 0],
                  rotate: [0, -12, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3,
                }}
                className="absolute top-1/3 -right-8 w-7 h-7 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60 shadow-lg"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-700"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Every child has a superpower. Sometimes it shines loudly,
                sometimes it shines quietly but it is always there, just
                waiting to be{" "}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                  unlocked
                </span>
                .
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                The Speech Heroes was created for the{" "}
                <span className="font-semibold text-blue-600">
                  2 million families
                </span>{" "}
                across the UK who are navigating the world of speech and language
                challenges. Through superheroes, stories and songs, we give every
                child a hero they can truly see themselves in. A hero who faces
                the same challenges they do and{" "}
                <span className="font-semibold text-purple-600">
                  rises above them
                </span>
                .
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                This is a place where every adventure is built on{" "}
                <span className="font-semibold text-blue-600">courage</span>,{" "}
                <span className="font-semibold text-purple-600">connection</span>{" "}
                and the belief that every child deserves to be{" "}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  heard
                </span>
                , in whatever way they communicate best.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                Whether you are a parent searching for{" "}
                <span className="font-semibold text-blue-600">support</span>, a
                teacher looking for the right tools, a speech and language
                therapist or a young reader ready for{" "}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                  adventure
                </span>
                ,{" "}
                <span className="font-semibold text-purple-600">
                  you belong here
                </span>
                .
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
                className="font-semibold text-gray-800"
              >
                You are part of the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Speech Heroes team
                </span>
                .
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16 md:mt-20 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Coming Soon
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-8"></div>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-700">
            <p>
              The Speech Heroes universe is growing. We are currently exploring
              the world of{" "}
              <span className="font-semibold text-blue-600">animation</span>,
              bringing our beloved characters to life on screen in a way that
              will{" "}
              <span className="font-semibold text-purple-600">connect</span> with
              children and families like never before. Watch this space. The
              adventure is{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                only just beginning
              </span>
              .
            </p>
            <p className="font-semibold text-gray-800">
              No family should ever feel{" "}
              <span className="text-blue-600">alone</span> on this journey. And
              with The Speech Heroes by your side, you{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                never will
              </span>
              .
            </p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center space-x-4"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-8 h-8 bg-blue-400 rounded-full opacity-60"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="w-6 h-6 bg-purple-400 rounded-full opacity-60"
          />
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="w-10 h-10 bg-pink-400 rounded-full opacity-60"
          />
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="w-7 h-7 bg-yellow-400 rounded-full opacity-60"
          />
        </motion.div>
      </div>
    </section>
  );
}
