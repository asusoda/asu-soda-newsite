import HorizontalLine from "../HorizontalLine";

export default function Footer() {
  return (
    <footer>
      <HorizontalLine />
      <main className="footer-container">
        <LeftFooterGrid />
        <MiddleFooterGrid />
        <RightFooterGrid />
      </main>
      <AllRightsReserved />
    </footer>
  );
}

function LeftFooterGrid() {
  return (
    <section className="col-span-2 max-md:col-span-2 max-md:p-2">
      <div className="flex flex-col max-md:flex-row justify-between h-full">
        <div className="flex gap-3 items-center max-sm:flex-row max-sm:items-center max-sm:hidden">
          <img src="/logo/soda-logo-white.png" className="w-8" />
          <span className="text-soda-white">Thesoda.io</span>
        </div>
      </div>
    </section>
  );
}

function MiddleFooterGrid() {
  return (
    <section className="grid grid-rows-3 gap-2">
      <a href="#">
        <p className="text-soda-white text-[16px]">Organization</p>
      </a>
      {organization.map((el, i) => (
        <a href={el.source} key={i}>
          <p className="text-soda-gray text-[16px]">{el.name}</p>
        </a>
      ))}
    </section>
  );
}

function RightFooterGrid() {
  return (
    <section className="grid grid-rows-3 gap-1">
      <a href="#">
        <p className="text-soda-white text-[16px]">Resources</p>
      </a>
      {resources.map((el, i) => (
        <a href={el.source} key={i}>
          <p className="text-soda-gray text-[16px]">{el.name}</p>
        </a>
      ))}
    </section>
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

function AllRightsReserved() {
  return (
    <div className="text-center items-center py-5">
      <p className="text-sm text-soda-gray">
        © {new Date().getFullYear()} Software Developers Association at ASU.
        <br />
        All rights reserved.
      </p>
    </div>
  );
}
