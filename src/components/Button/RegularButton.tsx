import PropTypes from "prop-types";

function RegularButton({ name }) {
  return (
    <button type="button" className="regular-btn">
      <span className="btn-text">{name}</span>
    </button>
  );
}

export default RegularButton;

RegularButton.propTypes = {
  name: PropTypes.string.isRequired,
};
