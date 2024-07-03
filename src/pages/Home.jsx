import InfoCards from "../components/Info/InfoCards";
import MemberCards from "../components/Team/TeamCards";
import Hero from "../components/Hero";
import SponsorsMarquee from "../components/Sponsors/SponsorsMarquee";
import AnimatedBackGround from "../components/AnimatedBackGround";

function Home() {
  return (
    <section className="home area">
      <Hero />
      <AnimatedBackGround />
      <SponsorsMarquee />
      <MemberCards />
      <InfoCards />
    </section>
  );
}

export default Home;
