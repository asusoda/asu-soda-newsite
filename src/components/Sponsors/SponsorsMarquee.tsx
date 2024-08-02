import axosoft from "./logo/axosoft.png";
import workiva from "./logo/workiva.png";
import generalmotors from "./logo/generalmotors.png";
import americanexpress from "./logo/americanexpress.png";

type SponsorName =
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

type Sponsor = {
  name: SponsorName;
};

const sponsors: Sponsor[] = [
  { name: "amazon" },
  { name: "statefarm" },
  { name: "drivetime" },
  { name: "deloitte" },
  { name: "goldmansachs" },
  { name: "garmin" },
  { name: "starbucks" },
  { name: "paypal" },
  { name: "godaddy" },
  { name: "americanexpress" },
  { name: "axosoft" },
  { name: "workiva" },
  { name: "generalmotors" },
];

function SponsorsMarquee() {
  const logoMap: Record<SponsorName, string> = {
    amazon: "./logo/amazon.png",
    statefarm: "./logo/statefarm.png",
    drivetime: "./logo/drivetime.png",
    deloitte: "./logo/deloitte.png",
    goldmansachs: "./logo/goldmansachs.png",
    garmin: "./logo/garmin.png",
    starbucks: "./logo/starbucks.png",
    paypal: "./logo/paypal.png",
    godaddy: "./logo/godaddy.png",
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
              src={logoMap[element.name]}
              alt={element.name}
              className="w-[10vw] object-contain"
            />
          ))}
          {sponsors.map((element, index) => (
            <img
              key={index}
              src={logoMap[element.name]}
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
