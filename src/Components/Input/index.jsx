import React from "react";
import PropTypes from "prop-types";
import styles from "./input.css";

function Input({ placeholder, label }) {
  return (
    <input className={styles.input} placeholder={placeholder} aria-label={label} />
  );
}

Input.defaultProps = {
  placeholder: "",
};

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default Input;
