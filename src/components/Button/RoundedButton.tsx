import PropTypes from "prop-types";

type RoundedButtonTypes = {
  name: string;
};

function RoundedButton({ name }: RoundedButtonTypes) {
  return (
    <button type="button" className="rounded-btn">
      <span className="btn-text">{name}</span>
    </button>
  );
}

export default RoundedButton;

RoundedButton.propTypes = {
  name: PropTypes.string.isRequired,
};
