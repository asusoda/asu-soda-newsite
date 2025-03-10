import { Helmet } from "react-helmet-async";
import MemberCards from "../components/Team/TeamCards";
import Hero from "../components/Hero";
import SponsorsMarquee from "../components/Sponsors/Sponsors";
import AboutUs from "../components/AboutUs";
import Blog from "../components/Blog";

function Home() {
  return (
    <main className="home  fade-in area">
      {/* SEO Metadata & Preloading */}
      <Helmet>
        <title>SoDA</title>
        <meta name="description" content="SoDA is one of the largest communities of students at Arizona State University." />
        <meta name="keywords" content="software developers association, soda, asu, arizona state university, computer science, recruiting, student organization" />
      </Helmet>
      <Hero />
      <AboutUs />
      <Blog />
      <SponsorsMarquee />
      <MemberCards />
    </main>
  );
}

export default Home;
