import Statistics from "./Stats/Statistics";
import SocialMediaLinks from "./SocialMediaLinks";
import EventsPhotoCarousel from "./EventsPhotoCarousel";
//import AnimatedBackGround from "./AnimatedBackGround";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <>
      <main className="hero  ">
        <section className="hero-container">
          <summary className="left-hero">
            <h1 className="hero-large-text  mb-10">
              The Software Developers Association
            </h1>
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
