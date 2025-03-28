import Statistics from "./Stats/Statistics";
import SocialMediaLinks from "./SocialMediaLinks";
import EventsPhotoCarousel from "./EventsPhotoCarousel";
import Stars from "./Stars";

function Hero() {
  return (
    <main className="min-h-screen md:justify-center items-center flex flex-col relative">
      <Stars className="hidden md:block md:absolute top-0 right-0 w-1/2 h-full h-1/3 z-0 pointer-events-none" />
      <section className="max-w-7xl sm:ml-16  flex-wrap flex  md:flex-row flex-col-reverse md:justify-center md:items-center relative z-10">
        <summary className="md:w-1/2 flex flex-col items-start justify-between">
          <h1 className="text-[12vw] md:text-7xl font-bold leading-tight px-6 max-md:py-4 md:mb-10">
            The <span className="text-soda-red">Software</span>{" "}
            <span className="text-soda-blue">Developers</span> Association
          </h1>
          <Statistics />
          <SocialMediaLinks />
          <div className="text-gray-400 w-11/12 md:w-full ml-5 md:text-start text-center">
            <a href="mailto:asu@thesoda.io">asu@thesoda.io</a>
          </div>
        </summary>
        <EventsPhotoCarousel />
      </section>
    </main>
  );
}

export default Hero;
