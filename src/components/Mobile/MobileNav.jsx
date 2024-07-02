import PropTypes from "prop-types";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";

export default function MobileNav({ setIsOpen, isOpen }) {
  return (
    <nav className="w-full sm:hidden flex justify-between py-5 px-5">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <LiaTimesSolid className="text-4xl" />
        ) : (
          <GiHamburgerMenu className="text-4xl" />
        )}
      </button>
      <h1 className="text-purple-dark text-[21px] text-soda-red font-extrabold">
        <img src="/logo/soda-logo-red.png" className="w-10" />
      </h1>
    </nav>
  );
}

MobileNav.propTypes = {
  setIsOpen: PropTypes.node.isRequired,
  isOpen: PropTypes.node.isRequired,
};
