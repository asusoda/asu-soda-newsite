import { Helmet } from "react-helmet-async";
import MemberCards from "../components/Team/TeamCards";
import Hero from "../components/Hero";
import SponsorsMarquee from "../components/Sponsors/Sponsors";
import contactsData from "../components/Team/TeamList.json"; // Adjust the path as necessary
import { Contacts } from "../components/Team/Contacts";
import AboutUs from "../components/AboutUs";
import Blog from "../components/Blog";

function Home() {
  return (
    <main className="home area">
      {/* SEO Metadata */}
      <Helmet>
        <title>SoDA</title>
        <meta name="description" content="SoDA is one of the largest communities of students at Arizona State University." />
        <meta name="keywords" content="software developers association, soda, asu, arizona state university, computer science, recruting, student organistaion" />
      </Helmet>

      {/* <ShootingStars minDelay={1000} maxSpeed={20} starWidth={40} />
      <StarsBackground starDensity={0.0009} /> */}
      <Hero />
      <AboutUs />
      <Blog />
      <SponsorsMarquee />
      <MemberCards contacts={contactsData as Contacts} />
      {/* disabled due to lack of Notion/SDS event sync */}
      {/* <InfoCards />  */}
    </main>
  );
}

export default Home;
