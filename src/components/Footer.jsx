import AllRightsReserved from "../components/AllRightsReserved.jsx";
import HorizontalLine from "../components/HorizontalLine.jsx";
import SocialMediaLinks from "./SocialMediaLinks.jsx";

export default function Footer() {
  return (
    <footer>
      <HorizontalLine />
      <section className="footer-container">
        <section className="col-span-2 max-md:col-span-2 max-md:p-2">
          <div className="flex flex-col max-md:flex-row justify-between h-full">
            <div className="flex gap-3 items-center max-sm:flex-row max-sm:items-center max-sm:hidden">
              <img src="/logo/soda-logo-white.png" className="w-8" />
              <span className="text-soda-white font-semibold">Thesoda.io</span>
            </div>
            <SocialMediaLinks />
          </div>
        </section>

        <section className="grid grid-rows-3 gap-2">
          <a href="#">
            <p className="text-soda-white text-[18px]">Organization</p>
          </a>
          {organization.map((el, i) => (
            <a href={el.source} key={i}>
              <p className="text-soda-gray text-[18px]">{el.name}</p>
            </a>
          ))}
        </section>

        <section className="grid grid-rows-3 gap-1">
          <a href="#">
            <p className="text-soda-white text-[18px]">Resources</p>
          </a>
          {resources.map((el, i) => (
            <a href={el.source} key={i}>
              <p className="text-soda-gray text-[18px]">{el.name}</p>
            </a>
          ))}
        </section>
      </section>
      <AllRightsReserved />
    </footer>
  );
}

const organization = [
  {
    name: "Get Involved",
    source: "/",
  },
  {
    name: "Projects",
    source: "/",
  },
  {
    name: "Documentations",
    source: "/",
  },
];

const resources = [
  {
    name: "Constitution",
    source: "/",
  },
  {
    name: "Privacy & Policy",
    source: "/",
  },
];
