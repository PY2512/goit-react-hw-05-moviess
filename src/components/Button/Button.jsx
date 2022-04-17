import PropTypes from "prop-types";

const Button = ({onBtnClick}) => (
    <button type="button" className="Button" onClick={onBtnClick}>
        Loading...
    </button>
);

Button.propTypes = {
    onBtnClick: PropTypes.func.isRequired,
}

export default Button;