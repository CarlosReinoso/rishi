import { Playfair_Display, Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const generateMetadata = async () => {
  return {
    title:
      "The Speech Heroes | Empowering Children with Speech & Language Delays",
    description:
      "The Speech Heroes is a world where imagination meets real-life challenges. Songs, stories and characters that give children with speech and language delays a voice, and show them they are stronger than they think.",
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/Aryan png.png",
    },
    keywords:
      "speech and language delay, children's book, speech therapy, language development, superheroes, children's music, speech heroes, word stoppers, Aryan Kaushal, Rishi Kaushal, speech and language UK, children's resources, inclusive education",
    authors: [{ name: "The Kaushal Family" }],
    creator: "Rishi Kaushal",
    publisher: "The Speech Heroes",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://thespeechheroes.com"), // Replace with your actual domain
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title:
        "The Speech Heroes | Empowering Children with Speech & Language Delays",
      description:
        "The Speech Heroes is a world where imagination meets real-life challenges. Songs, stories and characters that give children with speech and language delays a voice.",
      url: "https://thespeechheroes.com", // Replace with your actual domain
      siteName: "The Speech Heroes",
      images: [
        {
          url: "/Speech heroes png.png", // Your hero image
          width: 1200,
          height: 630,
          alt: "The Speech Heroes - Empowering Children with Speech & Language Delays",
        },
      ],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "The Speech Heroes | Empowering Children with Speech & Language Delays",
      description:
        "The Speech Heroes is a world where imagination meets real-life challenges. Songs, stories and characters that give children with speech and language delays a voice.",
      images: ["/Speech heroes png.png"], // Your hero image
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "healthcare",
    classification: "medical",
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "The Speech Heroes",
        description:
          "A world where imagination meets real-life challenges. Songs, stories and characters that give children with speech and language delays a voice.",
        founder: {
          "@type": "Person",
          name: "Rishi Kaushal",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "GB",
        },
        specialty: [
          "Speech and Language Delay",
          "Children's Books",
          "Educational Resources",
          "School Workshops",
          "Children's Music",
        ],
        url: "https://thespeechheroes.com",
      }),
    },
  };
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${figtree.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
