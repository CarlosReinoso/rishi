"use client";
import { motion } from "framer-motion";

export default function ResourcesSection() {
  const resources = [
    {
      title: "Speech and Language UK",
      description: "Information, guidance, and free resources for parents.",
      url: "https://speechandlanguage.org.uk/",
      icon: "🏥",
      category: "Support Organization",
    },
    {
      title: "NHS Speech and Language Therapy Services",
      description:
        "Search for your local NHS services for assessment and therapy.",
      url: "https://www.nhs.uk/service-search/other-services/Speech-and-language-therapist/LocationSearch/343",
      icon: "🏥",
      category: "Healthcare Services",
    },
  ];

  const tips = [
    {
      title: "Trust your instincts",
      description:
        "If you're concerned about a child's speech, your feelings are valid and important.",
    },
    {
      title: "Speak to professionals",
      description:
        "Contact your GP, health visitor, or school for a referral to a Speech and Language therapist.",
    },
    {
      title: "Keep detailed notes",
      description:
        "Document your child's strengths and challenges to share with professionals.",
    },
    {
      title: "Celebrate small wins",
      description:
        "Every step forward in communication is worth celebrating, no matter how small.",
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
            Resources & Support
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Helpful resources and guidance for families navigating speech and
            language delays
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Resources */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-black font-figtree mb-8 text-center lg:text-left">
              Helpful Resources
            </h3>

            <div className="space-y-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-primary/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{resource.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h6 className="text-lg font-bold text-black font-figtree">
                          {resource.title}
                        </h6>
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                          {resource.category}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">
                        {resource.description}
                      </p>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-secondary font-medium transition-colors duration-200"
                      >
                        Visit Resource
                        <svg
                          className="ml-1 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Tips */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-black font-figtree mb-8 text-center lg:text-left">
              If You're Concerned About a Child's Speech
            </h3>

            <div className="space-y-4">
              {tips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-fourth/10 to-fifth/10 rounded-lg p-4 border-l-4 border-fourth"
                >
                  <h6 className="font-bold text-black font-figtree mb-2">
                    {tip.title}
                  </h6>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-third/20 to-primary/20 rounded-xl p-6 text-center"
            >
              <h4 className="text-lg font-bold text-black font-figtree mb-3">
                Need More Support?
              </h4>
              <p className="text-gray-600 mb-4">
                We're here to help families navigate their Speech and Language
                journey.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-third to-primary text-white font-medium rounded-full hover:from-primary hover:to-secondary transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Shop Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Shop - Coming Soon
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're working on bringing you more Speech Heroes merchandise,
              books, and resources. Stay tuned for updates!
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white/60 text-gray-600 font-medium rounded-full">
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Coming Soon
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
