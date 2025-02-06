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
      {/* SEO Metadata & Preloading */}
      <Helmet>
        <title>SoDA</title>
        <meta name="description" content="SoDA is one of the largest communities of students at Arizona State University." />
        <meta name="keywords" content="software developers association, soda, asu, arizona state university, computer science, recruiting, student organization" />
        {/* ✅ Preload LCP Image */}
        <link rel="preload" as="image" href="../assets/placeholder/logo-placeholder.webp" />
      </Helmet>
      <Hero />
      <AboutUs />
      <Blog />
      <SponsorsMarquee />
      <MemberCards contacts={contactsData as Contacts} />
    </main>
  );
}

export default Home;
