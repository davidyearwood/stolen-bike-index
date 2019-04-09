import React from "react";
import PropTypes from "prop-types";
import styles from "./btn.css";

function Button({ children }) {
  return <button type="button" className={styles.btn}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
