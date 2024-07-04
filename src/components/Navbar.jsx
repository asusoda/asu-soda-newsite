import { useState } from "react";
import OpenedMobileNav from "./Mobile/OpenedMobileNav";
import MobileNav from "./Mobile/MobileNav";
import RoundedButton from "./Button/RoundedButton";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="navigation">
      {/* Primary Navigation - Hidden on mobile */}
      <section className="nav-container">
        <a href="/" className="flex gap-4 items-center">
          <img src="/logo/soda-logo-red.png" className="w-12" />
          <span className="text-[26px] font-bold">SoDA</span>
        </a>

        <ul className="flex gap-14 items-center text-soda-white font-bold">
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
        <a href="#join">
          <RoundedButton name="Join SoDA" />
        </a>
      </section>

      {/*Mobile Navigation*/}
      <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />

      {/*Mobile Navigation when opened*/}
      {isOpen && <OpenedMobileNav setIsOpen={setIsOpen} />}
    </header>
  );
}

export default Navbar;
