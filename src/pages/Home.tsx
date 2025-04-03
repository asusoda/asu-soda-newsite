import { Helmet } from "react-helmet-async";
import MemberCards from "../components/Team/TeamCards";
import Hero from "../components/Hero";
import SponsorsMarquee from "../components/Sponsors/Sponsors";
import Mission from "../components/Mission";
import Blog from "../components/Blog";
import HistoryTimeline from "../components/HistoryTimeline"; // Import the new component


function Home() {
  return (
    <main className="home fade-in area">
      {/* SEO Metadata & Preloading */}
      <Helmet>
        <title>SoDA</title>
        <meta name="description" content="SoDA is one of the largest communities of students at Arizona State University." />
        <meta name="keywords" content="software developers association, soda, asu, arizona state university, computer science, recruiting, student organization" />
      </Helmet>
      <Hero />
      <section id="about" className="section">
        <h1 className="section-header-text">About SoDA</h1>
          <p className="hero-small-text px-24 max-w-[100ch] max-lg:px-6 mx-auto">
            The Software Developers Association (SoDA) at Arizona State
            University is a student-run, free organization dedicated to
            serving ASU’s computer science students since 2008. SoDA is
            one of the oldest and largest communities of students on
            campus, and is the largest engineering organization.
          </p>
      </section>
      <section className="py-16">
        <Mission />
      </section>
      <section className="py-16">
        <Blog />
      </section>

      <section className="py-16">
        <SponsorsMarquee />
      </section>
      <section className="py-16">
        <MemberCards />
      </section>
      <section id="history" className="section">
        <HistoryTimeline />
      </section>
    </main>
  );
}

export default Home;
