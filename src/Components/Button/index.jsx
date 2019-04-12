import React from "react";
import PropTypes from "prop-types";
import styles from "./btn.css";

function Button({ children, classNames, ...attr }) {
  return <button type="button" className={classNames !== "" ? `${classNames} ${styles.btn}` : styles.btn} {...attr}>{children}</button>;
}

Button.defaultProps = {
  classNames: "",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
};

export default Button;
