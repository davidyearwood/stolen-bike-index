import React from "react";
import PropTypes from "prop-types";
import styles from "./input.css";

function Input({
  placeholder, label, onChange, value, type,
  ...attr
}) {
  return (
    <input
      type={type}
      className={styles.input}
      placeholder={placeholder}
      aria-label={label}
      onChange={onChange}
      value={value}
      {...attr}
    />
  );
}

Input.defaultProps = {
  placeholder: "",
  type: "text",
  value: "",
  onChange: null,
};

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default Input;
