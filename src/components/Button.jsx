import PropTypes from "prop-types";

function Button({ name }) {
  return (
    <button type="button" className="btn">
      <span className="btn-text">{name}</span>
    </button>
  );
}

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
