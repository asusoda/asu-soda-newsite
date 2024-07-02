import InfoCards from "../components/Info/InfoCards";
import MemberCards from "../components/Team/TeamCards";
import Hero from "../components/Hero";

function Home() {
  return (
    <section className="home">
      <Hero />
      <MemberCards />
      <InfoCards />
    </section>
  );
}

export default Home;
