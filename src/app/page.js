import SpeechHeroesHero from "@/components/SpeechHeroesHero";
import WelcomeSection from "@/components/WelcomeSection";
import AboutSection from "@/components/AboutSection";
import CharactersSection from "@/components/CharactersSection";
import MusicSection from "@/components/MusicSection";
import BookSection from "@/components/BookSection";
import WorkshopsSection from "@/components/WorkshopsSection";
import ResourcesSection from "@/components/ResourcesSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <SpeechHeroesHero />
      <WelcomeSection />
      <AboutSection />
      <CharactersSection />
      <MusicSection />
      <BookSection />
      <WorkshopsSection />
      <ResourcesSection />
      <ContactSection />
    </div>
  );
}
