import PropTypes from "prop-types";

function Button({ name }) {
  return (
    <button
      type="button"
      className="px-3 py-1 bg-purple-dark hover:bg-purple-light rounded-lg"
    >
      {name}
    </button>
  );
}

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
