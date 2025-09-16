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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Welcome to The Speech Heroes
          </h2>
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
                Every child and every parent is a{" "}
                <span className="font-semibold text-blue-600">superhero</span>{" "}
                in their own way. Sometimes our powers are{" "}
                <span className="font-semibold text-blue-600">loud</span>,
                sometimes they are{" "}
                <span className="font-semibold text-purple-600">quiet</span> but
                they are always there, waiting to be{" "}
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
                The Speech Heroes is a world where{" "}
                <span className="font-semibold text-blue-600">imagination</span>{" "}
                meets{" "}
                <span className="font-semibold text-purple-600">
                  real-life challenges
                </span>
                . Inspired by our own journey as a family, we created songs,
                stories and characters that give children with speech and
                language delays a{" "}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                  voice
                </span>
                .
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                Here, every adventure is about{" "}
                <span className="font-semibold text-blue-600">courage</span>,{" "}
                <span className="font-semibold text-purple-600">
                  connection
                </span>
                , and finding ways to be{" "}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  heard
                </span>
                . Whether you are a parent, teacher, speech and language
                therapist, professional, or young reader, you are part of this
                superhero team.
              </motion.p>
            </motion.div>
          </div>
        </div>

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
