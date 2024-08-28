import { RiArrowRightSLine } from "react-icons/ri";

type RoundedButtonTypes = {
  name: string;
  url: string;
};

function RiArrowButton({ name, url }: RoundedButtonTypes) {
  return (
    <a href={url} target="_blank" className="right-arrow-btn">
      <span className="btn-text">{name}</span>

      <RiArrowRightSLine className="text-2xl text-white" />
    </a>
  );
}

export default RiArrowButton;
