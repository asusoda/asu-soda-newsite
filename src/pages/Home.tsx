import InfoCards from "../components/Info/InfoCards";
import MemberCards from "../components/Team/TeamCards";
import Hero from "../components/Hero";
import SponsorsMarquee from "../components/Sponsors/Sponsors";
import contactsData from "../components/Team/TeamList.json"; // Adjust the path as necessary
import { Contacts } from "../components/Team/Contacts";
import AboutUs from "../components/AboutUs";

function Home() {
  return (
    <main className="home area">
      <Hero />
      <AboutUs />
      <SponsorsMarquee />
      <MemberCards contacts={contactsData as Contacts} />
      <InfoCards />
    </main>
  );
}

export default Home;
