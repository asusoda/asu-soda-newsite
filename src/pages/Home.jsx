import InfoCards from "../components/Info/InfoCards";
import MemberCards from "../components/Team/TeamCards";
import Hero from "../components/Hero";
import SponsorsMarquee from "../components/Sponsors/SponsorsMarquee";
import Contact from "../components/Contact/Contact";

function Home() {
  return (
    <section className="home area">
      <Hero />
      <SponsorsMarquee />
      <MemberCards />
      <InfoCards />
      {/* <Contact /> */}
    </section>
  );
}

export default Home;
