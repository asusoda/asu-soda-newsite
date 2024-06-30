import { useState } from "react";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navigation">
      {/* Primary Navigation - Hidden on mobile */}
      <section className="w-full justify-between hidden sm:flex py-5 px-10">
        <a href="/" className="flex gap-3 items-center">
          <img src="/logo/soda-logo-red.png" className="w-8"></img>
          <h1 className="text-purple-dark text-[21px] text-soda-white font-extrabold text-3xl">
            SoDA
          </h1>
        </a>


        <ul className="flex gap-10 items-center text-soda-white">
          <li>
            <a href="#info" className="nav-text-animation">
              Info
            </a>
          </li>
          <li>
            <a href="#sponsors" className="nav-text-animation">
              Sponsors
            </a>
          </li>
          <li>
            <a href="#team" className="nav-text-animation">
              Team
            </a>
          </li>
        </ul>
        <Button name="Join SoDA" />
      </section>


      {/*Mobile Navigation*/}
      <nav className="w-full sm:hidden flex justify-between py-5 px-5">
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
      </nav>

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
    </header>
  );
}

export default Navbar;
