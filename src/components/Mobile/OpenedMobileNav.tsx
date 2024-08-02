import { LiaTimesSolid } from "react-icons/lia";

type setIsOpenTypes = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function OpenedMobileNav({ setIsOpen }: setIsOpenTypes) {
  return (
    <section
      className="fixed inset-0 bg-opacity-50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="absolute left-0 top-0 h-full w-3/4 bg-soda-red flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between">
          <img src="/logo/soda-logo-white.png" className="w-10 m-5"></img>
          <button onClick={() => setIsOpen(false)}>
            <LiaTimesSolid className="text-4xl m-5" />
          </button>
        </div>
        <hr className="w-[90%] mx-auto bg-soda-gray"></hr>
        <div className="flex flex-col gap-5 p-5">
          <a href="#hero" onClick={() => setIsOpen(false)}>
            <h1 className="text-[20px]">Home</h1>
          </a>
          <a href="#info" onClick={() => setIsOpen(false)}>
            <h1 className="text-[20px]">Info</h1>
          </a>
          <a href="/" onClick={() => setIsOpen(false)}>
            <h1 className="text-[20px]">Sponsors</h1>
          </a>
          <a href="#team" onClick={() => setIsOpen(false)}>
            <h1 className="text-[20px]">Team</h1>
          </a>
        </div>
      </div>
    </section>
  );
}
