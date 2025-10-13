"use client";
import { motion } from "framer-motion";

export default function WorkshopsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-third/10 to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-playfair mb-4">
              School Visits and Workshops
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-third to-primary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer interactive visits and workshops for schools and groups
              to help children learn about speech and language delays in a fun
              and supportive way.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Our sessions include storytelling, superhero activities, and
                ways to unlock children's communication superpowers.
              </p>

              <div className="bg-white/60 rounded-xl p-6 border-l-4 border-third">
                <h3 className="text-lg font-bold text-black font-playfair mb-4">
                  What We Offer:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-third mr-3 mt-1">🎭</span>
                    <div>
                      <h6 className="font-semibold text-black font-figtree">
                        Interactive Storytelling
                      </h6>
                      <p className="text-sm text-gray-600">
                        Bring The Speech Heroes characters to life through
                        engaging stories
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-third mr-3 mt-1">🦸</span>
                    <div>
                      <h6 className="font-semibold text-black font-figtree">
                        Superhero Activities
                      </h6>
                      <p className="text-sm text-gray-600">
                        Fun games and exercises that promote communication
                        skills
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-third mr-3 mt-1">💬</span>
                    <div>
                      <h6 className="font-semibold text-black font-figtree">
                        Communication Tools
                      </h6>
                      <p className="text-sm text-gray-600">
                        Practical strategies to help children find their voice
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-third mr-3 mt-1">🎵</span>
                    <div>
                      <h6 className="font-semibold text-black font-figtree">
                        Music & Movement
                      </h6>
                      <p className="text-sm text-gray-600">
                        Inclusive activities that celebrate all forms of
                        expression
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-fourth/20 to-fifth/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-black font-playfair mb-3">
                  Perfect For:
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <span className="text-fourth mr-2">🏫</span>
                    Primary Schools
                  </div>
                  <div className="flex items-center">
                    <span className="text-fourth mr-2">👥</span>
                    Youth Groups
                  </div>
                  <div className="flex items-center">
                    <span className="text-fourth mr-2">🎯</span>
                    SEN Departments
                  </div>
                  <div className="flex items-center">
                    <span className="text-fourth mr-2">👨‍👩‍👧‍👦</span>
                    Family Events
                  </div>
                </div>
              </div>

              <p className="text-lg font-medium text-third">
                Contact us to book a visit or to discuss how we can support your
                school.
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
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-third to-primary text-white font-medium rounded-full hover:from-primary hover:to-secondary transition-all duration-300 transform hover:scale-105"
              >
                Book a Visit
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/60 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-black font-playfair mb-6 text-center">
                Workshop Highlights
              </h3>

              <div className="space-y-6">
                <motion.div
                  
                  className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-4"
                >
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">🎭</span>
                    <h6 className="font-bold text-black font-figtree">
                      Character Role Play
                    </h6>
                  </div>
                  <p className="text-sm text-gray-600">
                    Children become Speech Heroes and learn to overcome Word
                    Stoppers
                  </p>
                </motion.div>

                <motion.div
                
                  className="bg-gradient-to-r from-fourth/20 to-fifth/20 rounded-lg p-4"
                >
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">🎵</span>
                    <h6 className="font-bold text-black font-figtree">
                      Music & Movement
                    </h6>
                  </div>
                  <p className="text-sm text-gray-600">
                    Sing along with our songs and discover rhythm as a
                    communication tool
                  </p>
                </motion.div>

                <motion.div
                 
                  className="bg-gradient-to-r from-third/20 to-primary/20 rounded-lg p-4"
                >
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">🦸</span>
                    <h6 className="font-bold text-black font-figtree">
                      Superpower Discovery
                    </h6>
                  </div>
                  <p className="text-sm text-gray-600">
                    Help children identify and celebrate their unique
                    communication strengths
                  </p>
                </motion.div>
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
        </div>
      </div>
    </section>
  );
}
