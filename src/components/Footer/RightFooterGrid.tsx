const resources = [
  {
    name: "Constitution",
    source:
      "https://docs.google.com/document/d/1VZmeN7BdD3D1mjQtc5td02BwbOCKrsivLQeMkF-y_1g/edit",
  },
  {
    name: "News",
    source: "https://asu.campuslabs.com/engage/organization/soda/news",
  },
  {
    name: "Gallery",
    source: "https://asu.campuslabs.com/engage/organization/soda/gallery",
  },
];

export default function RightFooterGrid() {
  return (
    <div className="flex flex-row space-x-12 -mt-6 justify-between md:justify-center">
    <section className="flex flex-col py-2 space-y-3">
        <h5 className="text-soda-white text-md">Resources</h5>
        {resources.map((el, i) => (
          <a href={el.source} key={i}>
            <p className="text-soda-gray text-[16px] hover:text-soda-white">
              {el.name}
            </p>
          </a>
        ))}
      </section></div>
  );
}
