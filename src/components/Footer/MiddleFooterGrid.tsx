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

export function MiddleFooterGrid() {
  return (
    <section className="grid grid-rows-3 gap-2">
      <h5 className="text-soda-white text-[16px] ">Organization</h5>
      {organization.map((el, i) => (
        <a href={el.source} key={i}>
          <p className="text-soda-gray hover:text-soda-white text-[16px]">
            {el.name}
          </p>
        </a>
      ))}
    </section>
  );
}
