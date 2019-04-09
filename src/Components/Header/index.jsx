import React from "react";
import styles from "./header.css";
import logo from "../../images/caps-logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" className={styles.img} />
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Stolen Bike Index</h1>
        <p className={styles.subTitle}>Chicago Police Department</p>
      </div>
    </header>
  );
}

export default Header;
