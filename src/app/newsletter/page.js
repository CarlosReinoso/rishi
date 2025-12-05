"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import SectionHero from "../../components/SectionHero";
import Button from "../../components/Button";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setEmail("");
      } else {
        setSubmitStatus("error");
        console.error("Error:", data.error);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SectionHero title="Join Our Newsletter" />

      {/* Welcome Message Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Hello there,
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Are you ready to join the adventure? At The Speech Heroes, we
              believe every child's voice matters no matter how they communicate.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              We are dedicated to empowering children with Speech and Language
              delay
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              By subscribing to our mailing list, you'll receive:
            </p>
            <ul className="list-disc list-inside text-lg md:text-xl text-gray-700 leading-relaxed mb-6 space-y-2 ml-4">
              <li>News and updates about our products and books</li>
              <li>
                Updates on The Speech Heroes Vox Pops and our podcast
              </li>
              <li>
                Special offers and early access to upcoming releases
              </li>
              <li>
                Heart-warming stories of children and families making progress
                and a community cheering them on
              </li>
            </ul>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Whether you're a parent, teacher, therapist, or friend, you'll
              become part of a supportive community that champions every child's
              communication journey.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              We promise — no spam. Just meaningful updates whenever we have
              something truly worth sharing.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Simply sign up using the box below. We'll be thrilled to welcome
              you into The Speech Heroes community.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Thank you for being part of this journey. Together, we're helping
              every child become a Speech Hero.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Warm wishes,
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              Rishi, Priya and Aryan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-third/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Newsletter Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/newsletter.jpg"
                  alt="Newsletter"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Newsletter Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl md:text-4xl font-figtree text-black mb-6">
                  Subscribe Now
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-third mb-6"></div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Enter your email address below to join our community and start
                  receiving updates.
                </p>

                {submitStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 text-2xl">✓</span>
                    </div>
                    <h4 className="text-large font-figtree text-black mb-2">
                      Thank You for Subscribing!
                    </h4>
                    <p className="text-gray-600 mb-6">
                      You've been successfully added to our newsletter. We'll
                      keep you updated with the latest news and resources.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitStatus(null);
                        setEmail("");
                      }}
                      className="px-6 py-3 bg-primary text-black rounded-full hover:bg-primary/80 transition-colors font-medium"
                    >
                      Subscribe Another Email
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-black font-medium mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Enter your email address"
                      />
                    </div>

                    {submitStatus === "error" && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-600 text-sm">
                          Something went wrong. Please try again or contact us
                          directly.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-black py-4 px-8 rounded-full font-medium text-lg hover:bg-primary/80 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe to Newsletter"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Community Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-third/20 to-primary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-figtree text-black mb-6">
              Join Our WhatsApp Community
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-third mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
              Our WhatsApp group is the closest part of The Speech Heroes family.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
              It is where we share quick updates, early previews, helpful tips,
              and behind the scenes stories.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              It is also a safe and friendly space for families to support one
              another from across the globe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="https://chat.whatsapp.com/FBLsDOEQ87JH1SI11aXxbR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                variant="primary"
                className="text-lg px-8 py-4"
                showArrow={true}
              >
                Join the WhatsApp Community
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

