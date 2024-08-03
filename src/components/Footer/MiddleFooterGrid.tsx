export function MiddleFooterGrid() {
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
