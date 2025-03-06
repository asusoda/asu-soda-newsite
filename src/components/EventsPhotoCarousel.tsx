import { Image } from "semantic-ui-react";
import placeholder from "../assets/logo-placeholder.webp";

function EventsPhotoCarousel() {
  return (
    <div className=" mx-auto">
      <Image src={placeholder} width={400} className=" w-[40vw] md:w-[25vw]" alt="place holder" />
    </div>
  );
}

export default EventsPhotoCarousel;
