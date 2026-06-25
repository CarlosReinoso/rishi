"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionHero from "@/components/SectionHero";

const resourceHandouts = [
  "Creating Opportunities to Communicate",
  "DLD Advice",
  "CAS Advice",
  "AAC Handout",
  "Stammering Handout",
  "Autism Communication Resources",
];

const faqItems = [
  {
    question: "What is SLCN?",
    answer: (
      <p>
        SLCN stands for Speech, Language and Communication Needs. This term is
        often used to refer to the area of educational needs of a particular
        child or cohort within an educational setting and is currently a key
        issue in the SEND reforms.
      </p>
    ),
  },
  {
    question: "What is SEND?",
    answer: (
      <p>
        SEND stands for Special Educational Needs &amp; Disabilities. This is
        used to describe all needs and disabilities which will affect a
        child&apos;s access to traditional education. These needs can include
        speech and language as well as other difficulties e.g. in literacy. Many
        of these needs have a corresponding diagnosis that goes along with them
        such as autism, dyslexia etc. but other times, the underlying cause of
        the need is unknown but is therefore described by education and health
        professionals.
      </p>
    ),
  },
  {
    question: "Does my child need help with their communication?",
    answer: (
      <p>
        This is a question that many parents ask and it is hard to know when to
        get help, so we are keen to support families to learn about the help
        that is out there and to be able to engage with a community that
        resonates with them and their family&apos;s unique circumstances. For
        information about what typical speech, language and communication
        development looks like and for a wealth of resources, please check out{" "}
        <a
          href="https://speechandlanguage.org.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-third font-medium underline underline-offset-2 hover:text-secondary"
        >
          Speech and Language UK
        </a>
        . This is a registered charity committed to advocating for children with
        SLCN on a personal and societal level.
      </p>
    ),
  },
  {
    question:
      "What is the difference between a Speech and Language Delay vs. Disorder?",
    answer: (
      <p>
        When you hear speech and language therapists or other professionals use
        the term &ldquo;speech and language delay&rdquo; — this means that the
        child is developing along the expected progression but more slowly than
        their peers. However, a &ldquo;speech disorder&rdquo; e.g. childhood
        apraxia of speech or can often be unclassified as well as a
        &ldquo;language disorder&rdquo; e.g. developmental language disorder or a
        receptive or expressive language disorder means that the child is not
        developing along the expected pattern of development meaning that there
        are gaps or delays which are statistically significant and therefore
        classed as &ldquo;disordered&rdquo;. Delays can sometimes catch up
        without intervention (but often they don&apos;t), so just because a
        child is delayed does not mean that they do not need intervention.
        However, disorders will never &ldquo;catch up&rdquo; as they are not
        something that requires time to catch up — these children require
        specific and tailored therapy and intervention to address their unique
        difficulties and meet their individual needs.
      </p>
    ),
  },
  {
    question: "When should a child start Speech and Language Therapy?",
    answer: (
      <p>
        Children who have an identified need including if it is identified only
        by their parent/carer should be able to access the right professional
        to help determine if and when intervention is needed. However, with NHS
        waiting lists being very long, many services are not accepting referrals
        for children until they reach a certain age. Let&apos;s be very clear
        here. This does NOT mean that a child does not need therapy and will not
        benefit from it. In fact, what it means is that the service is not
        commissioned to deliver treatment to children under that age or
        threshold. It is important that parents are aware that thresholds for
        services are not linked directly to developmental information and in
        many cases actively go against early intervention. Speech Heroes is here
        to help and raise awareness and change this —{" "}
        <a
          href="#resources-list"
          className="text-third font-medium underline underline-offset-2 hover:text-secondary"
        >
          check out our handouts here
        </a>
        .
      </p>
    ),
  },
  {
    question: "Developmental Language Disorder (DLD)",
    answer: (
      <p>
        Developmental language disorder (DLD) is a condition where children
        have long-term challenges talking and/or understanding words in the
        absence of another condition which can also impact speech and language
        development such as autism. For more information about this
        communication need, check out the{" "}
        <a
          href="https://radld.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-third font-medium underline underline-offset-2 hover:text-secondary"
        >
          Raising Awareness of DLD website
        </a>
        .
      </p>
    ),
  },
  {
    question: "Selective Mutism now called Situational Mutism (SM)",
    answer: (
      <p>
        Selective Mutism (SM) is an anxiety disorder which prevents those
        affected from communicating in different situations. Speech and language
        therapists and psychologists support individuals with this in a
        collaborative way. For more information about this condition and where
        to get support and up to date information as well as training, check
        out{" "}
        <a
          href="https://www.selectivemutism.org.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-third font-medium underline underline-offset-2 hover:text-secondary"
        >
          this website
        </a>
        .
      </p>
    ),
  },
  {
    question: "What do I do if my child is Stammering?",
    answer: (
      <p>
        Stammering also called Stuttering is a condition which makes it
        difficult for a person to produce fluent speech meaning they can get
        stuck on words and prolong or repeat sounds often at the beginning of
        words or phrases. Whilst some children will stammer during periods of
        increased or rapid language development and it may resolve on its own,
        some do not. It is important to ensure that you get the right advice and
        support so that you can support a child through their natural
        development and when and how to support if stammering persists. If
        someone is stammering, do not interrupt or finish their sentences. The
        best way to show support is to pause and give them time. See our{" "}
        <a
          href="#resources-list"
          className="text-third font-medium underline underline-offset-2 hover:text-secondary"
        >
          Stammering Handout
        </a>{" "}
        for some top tips.
      </p>
    ),
  },
  {
    question:
      "Childhood Apraxia of Speech (previously called Verbal Dyspraxia)",
    answer: (
      <p>
        This is a type of speech disorder characterised by unusual errors and
        very unintelligible speech. These children can often struggle to imitate
        or generate much spoken language at all or they can communicate in full
        sentences but they are hard to understand by even familiar listeners.
        Children with a speech disorder are often assessed in detail by speech
        and language therapists to rule out this condition as there are
        implications about appropriate therapy approaches. Please read our
        advice on CAS in the{" "}
        <a
          href="#resources-list"
          className="text-third font-medium underline underline-offset-2 hover:text-secondary"
        >
          resources section
        </a>
        .
      </p>
    ),
  },
  {
    question: "My child isn't talking, are they autistic?",
    answer: (
      <p>
        Many parents worry that a delay in spoken language means a child is
        autistic. However, there are many reasons that children can be delayed
        with spoken language which need specialist assessment and investigation
        by a team of professionals. Initially, a Health Visitor is the first
        point of contact regarding delayed development or concerns around a
        child&apos;s development, and they often can refer families to the
        appropriate health professional. Communication is what speech and language
        therapists focus on, but they work closely with paediatricians,
        audiologist, occupational therapists and education staff in order to
        support children at home and in education. It is important to get in
        touch with the right professional for your child&apos;s needs. If you
        are concerned about them meeting their milestones, there is a progress
        checker on the{" "}
        <a
          href="https://progress-checker.speechandlanguage.org.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-third font-medium underline underline-offset-2 hover:text-secondary"
        >
          Speech and Language UK website
        </a>
        .
      </p>
    ),
  },
  {
    question: "How can I find a private Speech and Language Therapist?",
    answer: (
      <p>
        There is an increase of private therapy services available across the
        country. It is often good to get a personal recommendation through local
        community pages and through a google search. You can also visit the
        Association of Speech and Language Therapists in Independent Practice and
        search for an independent therapist who works in your area{" "}
        <a
          href="https://asltip.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-third font-medium underline underline-offset-2 hover:text-secondary"
        >
          here
        </a>
        .
      </p>
    ),
  },
  {
    question: "What is AAC?",
    answer: (
      <p>
        AAC stands for Alternative Augmentative Communication and refers to all
        the different communication modes that humans use to communicate with
        each other including spoken language. However, many people use this term
        to refer only to high tech robust AAC software used on a tablet or
        device. A speech and language therapist can help you to determine if your
        child would benefit from exploring this in more detail. There is no
        prerequisite for AAC exploration. This means, the therapist should always
        be open to trying this with your child and can help determine what
        different modes might be appropriate for your child. This is based on
        your child&apos;s current communication, abilities and interests and
        ultimately depends on the individual child. To find out more about the
        amazing opportunities of AAC, check out our{" "}
        <a
          href="#resources-list"
          className="text-third font-medium underline underline-offset-2 hover:text-secondary"
        >
          AAC Handout
        </a>
        .
      </p>
    ),
  },
  {
    question: "How can I help my child while we are waiting for therapy?",
    answer: (
      <p>
        Speech Heroes are looking to connect families with the right support.
        We have created a simple top tips for promoting and maximising
        communication through creating opportunities to communicate. See our{" "}
        <a
          href="#resources-list"
          className="text-third font-medium underline underline-offset-2 hover:text-secondary"
        >
          resources list
        </a>{" "}
        for top tips and information on how to support your child.
      </p>
    ),
  },
];

function FaqAccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50/80 transition-colors"
      >
        <span className="font-figtree font-semibold text-black text-lg leading-snug">
          {item.question}
        </span>
        <span
          className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-third bg-primary/20 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed space-y-4 border-t border-gray-50">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  const [openIndices, setOpenIndices] = useState(() => new Set([0]));
  const allOpen = openIndices.size === faqItems.length;

  const toggleItem = (index) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const toggleAll = () => {
    setOpenIndices(
      allOpen ? new Set() : new Set(faqItems.map((_, index) => index))
    );
  };

  return (
    <div className="bg-white text-black">
      <SectionHero
        title="FAQ"
        subtitle="Answers to common questions about speech, language and communication"
        accentFrom="from-primary"
        accentTo="to-secondary"
        large
        animated
      />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-12 leading-relaxed"
          >
            Practical guidance for parents, carers, teachers and professionals.
            Select a question below to read more.
          </motion.p>

          <div className="flex justify-end mb-6">
            <button
              type="button"
              onClick={toggleAll}
              className="px-5 py-2.5 text-sm font-medium font-figtree rounded-full border-2 border-primary text-black hover:bg-primary/20 transition-colors"
            >
              {allOpen ? "Collapse all" : "Expand all"}
            </button>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                viewport={{ once: true, margin: "-40px" }}
              >
                <FaqAccordionItem
                  item={item}
                  isOpen={openIndices.has(index)}
                  onToggle={() => toggleItem(index)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="resources-list"
        className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-third/10 scroll-mt-24"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-black font-figtree mb-4">
              Resources List
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Downloadable handouts and guides from The Speech Heroes team.
            </p>
          </motion.div>

          <ul className="grid sm:grid-cols-2 gap-4">
            {resourceHandouts.map((title, index) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="h-full flex items-center gap-3 rounded-xl border border-white bg-white/80 px-5 py-4 shadow-sm">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-third" />
                  <span className="font-figtree text-gray-800">{title}</span>
                </div>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-6">
              Need more support or want to request a handout?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-black font-medium rounded-full hover:from-secondary hover:to-third transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
