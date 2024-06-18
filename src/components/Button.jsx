import PropTypes from "prop-types";

function Button({ name }) {
  return (
    <button type="button" className="px-2 py-1 bg-soda-red rounded-lg">
      {name}
    </button>
  );
}

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
