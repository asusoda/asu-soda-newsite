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

  interface NavLink {
    name: string;
    id_href: string;
    cssClass: string;
  }

  const navLinks: NavLink[] = [
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

  const handleNavigation = (href: string): void => {
    if (href.startsWith("#")) {
      // Redirect to root and append the hash section
      window.location.href = `/${href}`;
    } else {
      // For external links, open them in a new tab
      window.open(href, "_blank");
    }
  };

  return (
    <section className="nav-container">
      <a href="/" className="flex gap-4 items-center">
        <img src="logo/Soda_Logo_Dark_Mode.svg" className="w-28 aspect-square" />
      </a>
      <ul className="flex gap-14 items-center text-soda-white font-bold">
        {navLinks.map((el) => (
          <li key={el.name}>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(el.id_href);
              }}
              className={`${el.cssClass}`}
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
