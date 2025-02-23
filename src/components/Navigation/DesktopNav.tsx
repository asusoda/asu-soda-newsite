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
    name: "SoDA Code Challenge XI",
    id_href: "https://code.thesoda.io",
    cssClass: "nav-text-animation",
  },
  {
    name: "Leaderboard",
    id_href: "/leaderboard", // Updated to open in the same tab
    cssClass: "nav-text-animation",
  }
];

export default function DesktopNav() {
  return (
    <section className="nav-container">
      <a href="/" className="flex gap-4 items-center">
        <img src="logo/Soda_Logo_Dark_Mode.svg" className="w-28 aspect-square" alt="SoDA Logo" />
      </a>
      <ul className="flex gap-14 items-center text-soda-white font-bold">
        {navLinks.map((el) => (
          <li key={el.name}>
            <a
              href={el.id_href}
              className={`${el.cssClass}`}
              onClick={(e) => {
                if (el.id_href.startsWith("#")) {
                  e.preventDefault();
                  window.location.href = `/${el.id_href}`; // Ensures internal hash navigation
                }
              }}
            >
              {el.name}
            </a>
          </li>
        ))}
      </ul>
      <a 
        href="https://asu.campuslabs.com/engage/organization/soda" 
        aria-label="Join SoDA on SunDevilSync to stay updated on events and meetings"
      >
        <RoundedButton name="Join SoDA" url="https://asu.campuslabs.com/engage/organization/soda"/>
      </a>
    </section>
  );
}
