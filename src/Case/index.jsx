import React from "react";
import PropTypes from "prop-types";
import styles from "./case.css";
import BikeImg from "../images/bike-placeholder.jpg";
import unixToDate from "../util/unixToDate";

function Case({
  title, description, date, address, imgSrc,
}) {
  return (
    <div className={styles.case}>
      <div className={styles.col1}>
        <img className={styles.img} src={imgSrc} alt="" />
      </div>
      <div className={`${styles.col2} ${styles.caseContent}`}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <p className={styles.description}>
          <span className={styles.date}>{unixToDate(date)}</span>
          <span> - </span>
          <span className={styles.address}>
            {address}
          </span>
        </p>
      </div>
    </div>
  );
}

Case.defaultProps = {
  imgSrc: BikeImg,
};

Case.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
};

export default Case;
