import { Image } from "semantic-ui-react";
import RoundedButton from "../Button/RiArrowButton";
import { Link } from "react-router-dom";


export default function DesktopNav() {
  return (
    <section className="nav-container ">
      <Link to="/" className="flex gap-4 items-center">
        <Image src="logo/Soda_Logo_Dark_Mode.svg" className="w-28 " alt="SoDA Logo" />
      </Link>
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
        <RoundedButton name="SIGN UP" url="https://asu.campuslabs.com/engage/organization/soda"/>
      </a>
    </section>
  );
}
