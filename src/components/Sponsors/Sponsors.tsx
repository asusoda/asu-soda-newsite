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
import amazon from "./logo/amazon.webp";
import statefarm from "./logo/statefarm.webp";
import drivetime from "./logo/drivetime.webp";
import deloitte from "./logo/deloitte.webp";
import goldmansachs from "./logo/goldmansachs.webp";
import garmin from "./logo/garmin.webp";
import starbucks from "./logo/starbucks.webp";
import paypal from "./logo/paypal.webp";
import godaddy from "./logo/godaddy.webp";
import axosoft from "./logo/axosoft.webp";
import workiva from "./logo/workiva.webp";
import generalmotors from "./logo/generalmotors.webp";
import americanexpress from "./logo/americanexpress.webp";

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
              <CarouselItem key={index} className="px-2 basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="flex items-center justify-center h-full min-h-[120px] py-4 md:py-10">
                  <img
                    src={logoMap[element.name as SponsorLogo]}
                    alt={element.name}
                    className="w-full h-auto object-contain max-h-[80px]"
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
