import PropTypes from "prop-types";

function RoundedButton({ name }) {
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
