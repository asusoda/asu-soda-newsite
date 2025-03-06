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
const organization = [
  {
    name: "Get Involved",
    source: "https://asu.campuslabs.com/engage/organization/soda",
  },
  {
    name: "Projects",
    source: "https://github.com/orgs/asusoda/repositories",
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
    <div className="flex flex-row space-x-12 -mt-6 justify-center">
      <section className="flex flex-col py-2 space-y-3">
      <h5 className="text-soda-white   text-md ">Organization</h5>
      {organization.map((el, i) => (
        <a href={el.source} key={i}>
          <p className="text-soda-gray hover:text-soda-white text-[16px]">
            {el.name}
          </p>
        </a>
      ))}
    </section>
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
