import { LiaTimesSolid } from "react-icons/lia";

type setIsOpenTypes = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function OpenedMobileNav({ setIsOpen }: setIsOpenTypes) {

  const handleNavigation = (href) => {
    if (href.startsWith("#")) {
      window.location.href = `/${href}`;
    } else {
      window.open(href, "_blank");
    }
    setIsOpen(false);
  };

  return (
    <section
      className="fixed inset-0 bg-opacity-50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="absolute left-0 top-0 h-full w-3/4 bg-soda-red flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)}>
            <LiaTimesSolid className="text-4xl m-5" />
          </button>
        </div>
        <hr className="w-full mx-auto bg-soda-gray"></hr>
        <div className="flex flex-col gap-5 p-5">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("#hero");
            }}
          >
            <h1 className="text-[20px]">Home</h1>
          </a>
          <a
            href="#info"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("#info");
            }}
          >
            <h1 className="text-[20px]">Info</h1>
          </a>
          <a
            href="#sponsors"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("#sponsors");
            }}
          >
            <h1 className="text-[20px]">Sponsors</h1>
          </a>
          <a
            href="#team"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("#team");
            }}
          >
            <h1 className="text-[20px]">Team</h1>
          </a>
          <a
            href="https://asu.campuslabs.com/engage/organization/soda/events"
            target="_blank"
            onClick={() => setIsOpen(false)}
          >
            <h1 className="text-[20px]">Events</h1>
          </a>
          <a
            href="https://hack.thesoda.io"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("https://hack.thesoda.io");
            }}
          >
            <h1 className="text-[20px]">HackSoDA24</h1>
          </a>
        </div>
      </div>
    </section>
  );
}
