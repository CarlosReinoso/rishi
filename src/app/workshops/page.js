import { motion } from "framer-motion";

export default function WorkshopsPage() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-third/20 to-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-playfair mb-6">
              School Visits & Workshops
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-third to-primary rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Interactive visits and workshops for schools and groups to help
              children learn about speech and language delays in a fun and
              supportive way
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black font-playfair mb-6">
              What We Offer
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our sessions include storytelling, superhero activities, and ways
              to unlock children's communication superpowers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎭",
                title: "Interactive Storytelling",
                description:
                  "Bring The Speech Heroes characters to life through engaging stories that children can relate to and learn from.",
              },
              {
                icon: "🦸",
                title: "Superhero Activities",
                description:
                  "Fun games and exercises that promote communication skills while celebrating every child's unique abilities.",
              },
              {
                icon: "💬",
                title: "Communication Tools",
                description:
                  "Practical strategies and techniques to help children find their voice and express themselves confidently.",
              },
              {
                icon: "🎵",
                title: "Music & Movement",
                description:
                  "Inclusive activities that celebrate all forms of expression through rhythm, song, and creative movement.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-center leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-fourth/10 to-fifth/10">
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
                  Perfect For
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-fourth to-fifth rounded-full"></div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Our workshops are designed to be inclusive and engaging for
                  all children, with a special focus on supporting those with
                  speech and language delays.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/60 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🏫</div>
                    <div className="font-semibold text-black">
                      Primary Schools
                    </div>
                    <div className="text-sm text-gray-600">Ages 4-8</div>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">👥</div>
                    <div className="font-semibold text-black">Youth Groups</div>
                    <div className="text-sm text-gray-600">
                      Community centers
                    </div>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="font-semibold text-black">
                      SEN Departments
                    </div>
                    <div className="text-sm text-gray-600">
                      Special needs support
                    </div>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
                    <div className="font-semibold text-black">
                      Family Events
                    </div>
                    <div className="text-sm text-gray-600">
                      Community gatherings
                    </div>
                  </div>
                </div>

                <p className="text-lg font-medium text-third">
                  Contact us to book a visit or to discuss how we can support
                  your school.
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

            {/* Workshop Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/60 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-black mb-6 text-center">
                  Workshop Highlights
                </h3>

                <div className="space-y-6">
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-4"
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">🎭</span>
                      <h4 className="font-bold text-black">
                        Character Role Play
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Children become Speech Heroes and learn to overcome Word
                      Stoppers
                    </p>
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="bg-gradient-to-r from-fourth/20 to-fifth/20 rounded-lg p-4"
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">🎵</span>
                      <h4 className="font-bold text-black">Music & Movement</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Sing along with our songs and discover rhythm as a
                      communication tool
                    </p>
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                    className="bg-gradient-to-r from-third/20 to-primary/20 rounded-lg p-4"
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">🦸</span>
                      <h4 className="font-bold text-black">
                        Superpower Discovery
                      </h4>
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

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black font-playfair mb-6">
              What People Say
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "The Speech Heroes workshop was absolutely fantastic! The children were completely engaged and it really helped them understand that everyone communicates differently.",
                author: "Sarah M.",
                role: "Primary School Teacher",
              },
              {
                quote:
                  "Aryan and Rishi's story resonated so much with our students. It's wonderful to see children with speech delays feel represented and empowered.",
                author: "David L.",
                role: "SEN Coordinator",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 shadow-lg"
              >
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  {testimonial.quote}
                </p>
                <div className="border-t border-primary/20 pt-4">
                  <p className="font-semibold text-black">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black font-playfair mb-6">
              Ready to Book a Visit?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's work together to create an inclusive environment where every
              child feels heard and valued. Contact us to discuss your needs and
              book a workshop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:from-secondary hover:to-third transition-all duration-300 transform hover:scale-105"
              >
                Book Now
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <a
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-medium rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Learn More
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
