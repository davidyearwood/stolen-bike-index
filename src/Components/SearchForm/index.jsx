import React from "react";
import Button from "../Button";
import Input from "../Input";
import CalendarIcon from "../Svg/Calendar";
import styles from "./searchForm.css";

function SearchForm() {
  return (
    <form method="GET" action="/" className={styles.l_row}>
      <div className={styles.l_col6}>
        <Input label="Search case descriptions" placeholder="Search case descriptions" />
      </div>
      <div className={`${styles.l_col2} ${styles.inputWithIcon}`}>
        <Input label="From" placeholder="From" />
        <span className={styles.icon}><CalendarIcon height={30} width={30}/></span>
      </div>
      <div className={`${styles.l_col2} ${styles.inputWithIcon}`}>
        <Input label="To" placeholder="To" />
        <span className={styles.icon}><CalendarIcon height={30} width={30}/></span>
      </div>
      <div className={`${styles.l_col2} ${styles.noMarginRight}`}>
        <Button>Find Cases</Button>
      </div>
    </form>
  );
}

export default SearchForm;
