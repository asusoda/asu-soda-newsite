import RoundedButton from "../Button/RiArrowButton";

const navLinks = [
  {
    name: "Info",
    id_href: "#info",
    cssClass: "nav-text-animation",
  },
  {
    name: "Sponsors",
    id_href: "#sponsors",
    cssClass: "nav-text-animation",
  },
  {
    name: "Team",
    id_href: "#team",
    cssClass: "nav-text-animation",
  },
  {
    name: "Events",
    id_href: "https://asu.campuslabs.com/engage/organization/soda/events",
    cssClass: "nav-text-animation",
  },
 {
    name: "HackSoDA24",
    id_href: "https://hack.thesoda.io",
    cssClass: "nav-text-animation",
  }
];

export default function DesktopNav() {
  return (
    <section className="nav-container">
      <a href="/" className="flex gap-4 items-center">
        <img src="/logo/Compact_Dark_Mode.svg" className="w-20 aspect-square" />
      </a>
      <ul className="flex gap-14 items-center text-soda-white font-bold">
        {navLinks.map((el) => (
          <li>
            <a
              href={el.id_href}
              className={`${el.cssClass}`}
              target={el.id_href.startsWith("https://") ? "_blank" : "_self"}
            >
              {el.name}
            </a>
          </li>
        ))}
      </ul>
      <a href="https://asu.campuslabs.com/engage/organization/soda">
        <RoundedButton name="Join SoDA" url="https://asu.campuslabs.com/engage/organization/soda"/>
      </a>
    </section>
  );
}
