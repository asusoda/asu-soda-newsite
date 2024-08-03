import Statistics from "./Stats/Statistics";
import SocialMediaLinks from "./SocialMediaLinks";
import EventsPhotoCarousel from "./EventsPhotoCarousel";
//import AnimatedBackGround from "./AnimatedBackGround";

function Hero() {
  return (
    <>
      <main className="hero">
        <section className="hero-container">
          <summary className="left-hero">
            <h1 className="hero-large-text">
              The Software Developers Association (SoDA)
            </h1>
            <p className="hero-small-text">
              SoDA is one of the largest communities of students at Arizona
              State University. We provide opportunities to collaborate on
              projects outside of the classroom, learn from university and
              industry professionals, and prepare for a career as a software
              developer.
            </p>
            <Statistics />
            <SocialMediaLinks />
          </summary>
          <EventsPhotoCarousel />
        </section>
      </main>
    </>
  );
}

export default Hero;
