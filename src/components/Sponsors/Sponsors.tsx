import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import sponsors from "./sponsors.json";
import amazon from "./logo/amazon.png";
import statefarm from "./logo/statefarm.png";
import drivetime from "./logo/drivetime.png";
import deloitte from "./logo/deloitte.png";
import goldmansachs from "./logo/goldmansachs.png";
import garmin from "./logo/garmin.png";
import starbucks from "./logo/starbucks.png";
import paypal from "./logo/paypal.png";
import godaddy from "./logo/godaddy.png";
import axosoft from "./logo/axosoft.png";
import workiva from "./logo/workiva.png";
import generalmotors from "./logo/generalmotors.png";
import americanexpress from "./logo/americanexpress.png";

type SponsorLogo =
  | "amazon"
  | "statefarm"
  | "drivetime"
  | "deloitte"
  | "goldmansachs"
  | "garmin"
  | "starbucks"
  | "paypal"
  | "godaddy"
  | "americanexpress"
  | "axosoft"
  | "workiva"
  | "generalmotors";

function SponsorsMarquee() {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const logoMap: Record<SponsorLogo, string> = {
    amazon,
    statefarm,
    drivetime,
    deloitte,
    goldmansachs,
    garmin,
    starbucks,
    paypal,
    godaddy,
    americanexpress,
    axosoft,
    workiva,
    generalmotors,
  };

  return (
    <main id="sponsors" className="flex flex-col items-center">
      <h1 className="section-header-text">Sponsors</h1>
      <section className="sponsor-container">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto px-8"
        >
          <CarouselContent className="ml-0">
            {sponsors.map((element, index) => (
              <CarouselItem key={index} className="px-8 basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="flex items-center justify-center h-full min-h-[120px] py-10">
                  <img
                    src={logoMap[element.name as SponsorLogo]}
                    alt={element.name}
                    className="w-full h-auto max-h-20 object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
}

export default SponsorsMarquee;
