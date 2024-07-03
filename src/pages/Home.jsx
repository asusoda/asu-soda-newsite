import InfoCards from "../components/Info/InfoCards";
import MemberCards from "../components/Team/TeamCards";
import Hero from "../components/Hero";
import SponsorsMarquee from "../components/Sponsors/SponsorsMarquee";

function Home() {
  return (
    <section className="home">
      <Hero />
      <SponsorsMarquee />
      <MemberCards />
      <InfoCards />
    </section>
  );
}

export default Home;
