import { RiArrowRightSLine } from "react-icons/ri";

type RoundedButtonTypes = {
  name: string;
};

function RiArrowButton({ name }: RoundedButtonTypes) {
  return (
    <button type="button" className="right-arrow-btn">
      <span className="btn-text">{name}</span>
      <RiArrowRightSLine className="text-2xl text-white" />
    </button>
  );
}

export default RiArrowButton;
