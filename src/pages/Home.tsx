import InfoCards from "../components/Info/InfoCards";
import MemberCards from "../components/Team/TeamCards";
import Hero from "../components/Hero";
import SponsorsMarquee from "../components/Sponsors/Sponsors";
import contactsData from "../components/Team/TeamList.json"; // Adjust the path as necessary
import { Contacts } from "../components/Team/Contacts";
import AboutUs from "../components/AboutUs";
import { ShootingStars } from "../components/ui/shooting-star";
import { StarsBackground } from "../components/ui/stars-background";

function Home() {
  return (
    <main className="home area">
      <Hero />
      <AboutUs />
      <SponsorsMarquee />
      <MemberCards contacts={contactsData as Contacts} />
      <InfoCards />
      <ShootingStars minDelay={1000} maxSpeed={20} starWidth={20} />
      <StarsBackground starDensity={0.0003} />
    </main>
  );
}

export default Home;
