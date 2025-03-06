import { Image } from "semantic-ui-react";
import placeholder from "../assets/logo-placeholder.webp";

function EventsPhotoCarousel() {
  return (
    <div className="md:mt-0 mt-12 mx-auto">
      <Image src={placeholder} width={400} className=" w-[40vw] md:w-[350px]" alt="place holder" />
    </div>
  );
}

export default EventsPhotoCarousel;
