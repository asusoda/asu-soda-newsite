import Statistics from "./Stats/Statistics";
import SocialMediaLinks from "./SocialMediaLinks";
import EventsPhotoCarousel from "./EventsPhotoCarousel";
//import AnimatedBackGround from "./AnimatedBackGround";
import Typewriter from "typewriter-effect";
import { Button } from "@heroui/react";

function Hero() {
  return (
    <>
      <main className="hero  ">
        <section className="hero-container">
          <summary className="left-hero">
            <h1 className="hero-large-text  md:mb-10">
              The <span className="text-[#CA2352]">Software</span> <span className="text-[#3A64E4]">Developers</span> Association
            </h1>
            <Statistics />
            <SocialMediaLinks />
            <div className=" text-gray-400 w-11/12 md:w-full ml-5 md:text-start text-center">asu@thesoda.io</div>
          </summary>
          <EventsPhotoCarousel />
        </section>
      </main>
    </>
  );
}

export default Hero;
