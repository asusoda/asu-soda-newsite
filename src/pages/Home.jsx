import InfoCards from "../components/Info/InfoCards";
import MemberCards from "../components/Team/TeamCards";
import Hero from "../components/Hero";
import SponsorsMarquee from "../components/Sponsors/SponsorsMarquee";

function Home() {
  return (
    <section className="home area">
      <Hero />
      <SponsorsMarquee />
      <MemberCards />
      <InfoCards />
      {/* <AnimatedBackGround /> */}
    </section>
  );
}

export default Home;
