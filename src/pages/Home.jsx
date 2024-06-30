import InfoCards from "../components/Info/InfoCards";
import MemberCards from "../components/Team/TeamCards";

function Home() {
  return (
    <section className="home">
      <MemberCards />
      <InfoCards />
    </section>
  );
}

export default Home;
