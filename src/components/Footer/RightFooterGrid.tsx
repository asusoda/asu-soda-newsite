const resources = [
  {
    name: "Contact",
    source: "https://asu.campuslabs.com/engage/organization/soda",
  },
  {
    name: "Constitution",
    source:
      "https://docs.google.com/document/d/1VZmeN7BdD3D1mjQtc5td02BwbOCKrsivLQeMkF-y_1g/edit",
  },
  {
    name: "Privacy & Policy",
    source: "/",
  },
];

export default function RightFooterGrid() {
  return (
    <section className="grid grid-rows-3 gap-1">
      <h5 className="text-soda-white text-[16px]">Resources</h5>
      {resources.map((el, i) => (
        <a href={el.source} key={i}>
          <p className="text-soda-gray text-[16px] hover:text-soda-white">
            {el.name}
          </p>
        </a>
      ))}
    </section>
  );
}
