import AllRightsReserved from "../components/AllRightsReserved.jsx";
import HorizontalLine from "../components/HorizontalLine.jsx";

export default function Footer() {
  return (
    <footer>
      <HorizontalLine />
      <section className="footer-container">
        <section className="max-md:col-span-2 max-md:p-5">
          <div className="flex flex-col justify-between">
            <div className="flex gap-3 items-center">
              <img src="/logo/soda-logo-white.png" className="w-8" />
              <span className="text-soda-white">Thesoda.io</span>
            </div>
            <SocialMediaLinks />
          </div>
        </section>

        <section className="grid grid-rows-3 gap-2">
          <a href="#">
            <p className="text-soda-white">Organization</p>
          </a>
          {organization.map((el, i) => (
            <a href={el.source} key={i}>
              <p className="text-soda-gray text-[14px]">{el.name}</p>
            </a>
          ))}
        </section>

        <section className="grid grid-rows-3 gap-1">
          <a href="#">
            <p className="text-soda-white">Resources</p>
          </a>
          {resources.map((el, i) => (
            <a href={el.source} key={i}>
              <p className="text-soda-gray text-[14px]">{el.name}</p>
            </a>
          ))}
        </section>
      </section>
      <AllRightsReserved />
    </footer>
  );
}

function SocialMediaLinks() {
  return <></>;
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
