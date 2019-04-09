import React from "react";
import styles from "./error.css";

function ErrorMessage() {
  return (
    <p className={styles.errorMessage}>Ooops, something went wrong</p>
  );
}

export default ErrorMessage;
