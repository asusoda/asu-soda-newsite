import { useState } from "react";
import OpenedMobileNav from "./Mobile/OpenedMobileNav";
import MobileNav from "./Mobile/MobileNav";

import DesktopNav from "./DesktopNav";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="navigation fade-in" style={{ marginTop: 0 }}>
      {/* Primary Navigation - Hidden on mobile */}
      <DesktopNav />
      {/*Mobile Navigation*/}
      <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />
      {/*Mobile Navigation when opened*/}
      {isOpen && <OpenedMobileNav setIsOpen={setIsOpen} />}
    </nav>
  );
}

export default Navbar;
