"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHero from "@/components/SectionHero";

const mediaFeatures = [
  {
    title: "ITV News London",
    description:
      "Rishi and Aryan were interviewed live by ITV News London at Excel London ahead of the London Marathon 2026, sharing why Rishi was running 26.2 miles for the 2 million children across the UK living with speech and language delays.",
    cta: "Watch the Interview on ITV News London",
    href: "https://www.instagram.com/reel/DXmtomVjHMO/",
  },
  {
    title: "UK StartUp Awards 2026 Midlands",
    description:
      "The Speech Heroes has been named a finalist for Consumer Products StartUp of the Year at the Midlands regional final of the UK StartUp Awards. If we win the regional title, we head to the national final at Ideas Fest this September.",
    cta: "Read More About the UK StartUp Awards",
    href: "https://startupawards.uk/",
  },
  {
    title: "Forbes",
    description:
      "The Speech Heroes was featured in Forbes as one of five inspiring businesses built from life's most challenging moments, recognising Rishi's journey from a father writing a rap song for his son to building the world's first superhero brand for children with speech and language challenges.",
    cta: "Read the Full Story on Forbes",
    href: "https://www.forbes.com/sites/jodiecook/2026/03/30/5-founders-who-built-businesses-from-their-hardest-moments/",
  },
  {
    title: "Speech and Language UK",
    description:
      "Speech and Language UK caught up with Rishi to hear about their journey from releasing Speech Bound, to performing at youth festivals, publishing their book and taking on the London Marathon for the children who need it most.",
    cta: "Read the Full Story on Speech and Language UK",
    href: "https://speechandlanguage.org.uk/about-us/news-and-blogs/youre-the-coolest-dad-from-songs-to-books-and-now-26-2-miles-lets-catch-up-with-fundraisers-rishi-and-aryan/",
  },
];

const schoolVisits = [
  {
    title: "St Johns Primary School, Wolverhampton",
    description:
      "Rishi visited St Johns Primary School in Wolverhampton for a very special Speech Heroes workshop. The children enjoyed a live reading of The Speech Heroes Vs. The Word Stoppers, bringing the characters to life right in front of them. To top it off, the children were set an exciting competition to design their very own Speech Heroes character, with prizes up for grabs for the most creative entries. The energy, imagination and enthusiasm in that room was absolutely incredible.",
    image: "/school-1.webp",
    alt: "Speech Heroes workshop at St Johns Primary School, Wolverhampton",
    width: 4000,
    height: 6000,
  },
  {
    title: "Author Visit and Workshop, West Bromwich Central Library",
    description:
      "The Speech Heroes headed to West Bromwich Central Library for an author visit and workshop, giving young readers the chance to meet the story behind the book. It was a wonderful afternoon of storytelling, creativity and connection, reminding every child in that room that their voice matters and their imagination has no limits.",
    image: "/school-2.webp",
    alt: "Author visit and workshop at West Bromwich Central Library",
    width: 4000,
    height: 6000,
  },
];

function ExternalLinkButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary to-secondary text-black font-medium rounded-full hover:from-secondary hover:to-third transition-all duration-300 transform hover:scale-105 text-base md:text-lg"
    >
      {children}
      <svg
        className="ml-2 w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  );
}

export default function MediaPage() {
  return (
    <div className="bg-white text-black">
      <SectionHero
        title="As Seen In The Media"
        subtitle="Stories, interviews and recognition from across the UK"
        accentFrom="from-primary"
        accentTo="to-secondary"
        large
        animated
      />

      {/* Media features */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {mediaFeatures.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-black font-figtree mb-4">
                {item.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">{item.description}</p>
              <ExternalLinkButton href={item.href}>{item.cta}</ExternalLinkButton>
            </motion.article>
          ))}
        </div>
      </section>

      {/* School visits */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-third/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-figtree mb-4">
              School Visits and Workshops
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-third to-primary rounded-full mx-auto mb-6"></div>
            <p className="text-lead text-gray-600 max-w-3xl mx-auto mb-4">
              Bringing The Speech Heroes to life, one classroom at a time.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              The Speech Heroes is not just a brand. It is a movement. And that
              movement starts in the places where children learn, play and grow.
              Here is a look at some of the incredible events and visits we have
              been part of so far.
            </p>
          </motion.div>

          <div className="space-y-16 max-w-5xl mx-auto">
            {schoolVisits.map((visit, index) => (
              <motion.article
                key={visit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
                    <Image
                      src={visit.image}
                      alt={visit.alt}
                      width={visit.width}
                      height={visit.height}
                      className="w-full h-auto object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="text-2xl md:text-3xl font-bold text-black font-figtree mb-4">
                    {visit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{visit.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black font-figtree mb-6">
              Want to Book The Speech Heroes for Your School, Event or Festival?
            </h2>
            <p className="text-lead text-gray-600 mb-8 max-w-2xl mx-auto">
              We would love to come to you. Whether you are a school, library,
              community group, or event organiser, we bring energy, creativity,
              and a powerful message that children and families will never forget.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-black font-medium rounded-full hover:from-secondary hover:to-third transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Get in Touch to Book Your Visit Today
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
