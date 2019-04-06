import React from "react";
import PropTypes from "prop-types";
import styles from "./btn.css";

function Button({ children, onClick }) {
  return <button type="button" className={styles.btn} onClick={onClick}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
