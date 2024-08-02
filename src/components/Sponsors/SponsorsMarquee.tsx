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
    <section id="sponsors">
      <h1 className="text-white font-bold text-2xl md:text-4xl text-center p-5">
        Our Sponsors
      </h1>
      <section className="flex flex-row overflow-x-hidden bg-white">
        <div className="py-8 pl-20 flex flex-row animate-marquee whitespace-nowrap gap-8">
          {sponsors.map((element, index) => (
            <img
              key={index}
              src={logoMap[element.name as SponsorLogo]} // Casting element.name to SponsorLogo
              alt={element.name}
              className="w-[10vw] object-contain"
            />
          ))}
          {sponsors.map((element, index) => (
            <img
              key={index}
              src={logoMap[element.name as SponsorLogo]} // Casting element.name to SponsorLogo
              alt={element.name}
              className="w-[12vw] object-contain"
            />
          ))}
        </div>
      </section>
    </section>
  );
}

export default SponsorsMarquee;
