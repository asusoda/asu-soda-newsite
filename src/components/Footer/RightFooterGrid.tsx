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

export default function RightFooterGrid() {
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
