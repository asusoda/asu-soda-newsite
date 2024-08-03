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
    <main id="sponsors">
      <h1 className="section-header-text">Our Sponsors</h1>
      <section className="sponsor-container">
        <div className="marquee-effect-container">
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
              className="w-[10vw] object-contain"
            />
          ))}
          {sponsors.map((element, index) => (
            <img
              key={index}
              src={logoMap[element.name as SponsorLogo]} // Casting element.name to SponsorLogo
              alt={element.name}
              className="w-[10vw] object-contain"
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default SponsorsMarquee;
