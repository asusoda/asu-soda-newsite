import { useState } from "react";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black-dark fixed">
      {/* Primary Navigation - Hidden on mobile */}
      <section className="w-full justify-between hidden sm:flex py-5 px-10">
        <a href="/">
          <h1 className="text-purple-dark text-[21px] text-soda-red font-extrabold">
            SoDA
          </h1>
        </a>

        <div className="flex gap-10">
          <h3>Info</h3>
          <h3>Sponsors</h3>
          <h3>Team</h3>
        </div>
        <Button name="Contact" />
      </section>

      {/*Mobile Navigation*/}
      <section className="w-full sm:hidden flex justify-between py-5 px-5">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <LiaTimesSolid className="text-4xl" />
          ) : (
            <GiHamburgerMenu className="text-4xl" />
          )}
        </button>
        <h1 className="text-purple-dark text-[21px] text-soda-red font-extrabold">
          SoDA
        </h1>
      </section>

      {/*Mobile Navigation when opened*/}
      {isOpen && (
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
              <button onClick={() => setIsOpen(!isOpen)}>
                <LiaTimesSolid className="text-4xl m-5" />
              </button>
            </div>
            <hr className="w-[90%] mx-auto bg-soda-gray"></hr>
            <div className="flex flex-col gap-5 p-5">
              <a href="/">
                <h1 className="text-[20px]">Info</h1>
              </a>
              <a href="/">
                <h1 className="text-[20px]">Sponsors</h1>
              </a>
              <a href="/">
                <h1 className="text-[20px]">Team</h1>
              </a>
            </div>
          </div>
        </section>
      )}
    </nav>
  );
}

export default Navbar;
