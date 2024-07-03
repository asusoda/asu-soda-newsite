import Statistics from "./Stats/Statistics";
import SocialMediaLinks from "./SocialMediaLinks";
import EventsPhotoCarousel from "./EventsPhotoCarousel";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="md:w-1/2 flex flex-col items-center justify-between">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight px-6">
            The Software Developers Association
          </h1>
          <p className="mt-4 text-xl px-6">
            The premiere software development club for Arizona State University
            students.
          </p>
          <Statistics />
          <SocialMediaLinks />
        </div>
        <EventsPhotoCarousel />
      </div>
    </section>
  );
}

export default Hero;



