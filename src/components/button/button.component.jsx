import './button.styles.css';

const BUTTON_TYPES = {
    filled: "fill",
    inverted: "nofill"
}

const Button = ({buttonType, children, onClickHandler}) => {
    return(
        <button className={` ${BUTTON_TYPES[buttonType]}`} onClick={onClickHandler}>{children}</button>
    )
}

export default Button;