import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import Input from "../Input";
import CalendarIcon from "../Svg/Calendar";
import styles from "./searchForm.css";

function SearchForm({
  onCaseChange, caseValue, fromDateValue, onFromDateChange, toDateValue, onToDateChange,
}) {
  return (
    <form method="GET" action="/" className={styles.l_row} data-testid="search-form">
      <div className={styles.l_col6}>
        <Input label="Search case descriptions" placeholder="Search case descriptions" onChange={onCaseChange} value={caseValue} />
      </div>
      <div className={`${styles.l_col2} ${styles.inputWithIcon}`}>
        <Input label="From" placeholder="From" type="date" onChange={onFromDateChange} value={fromDateValue} />
        <span className={styles.icon}><CalendarIcon height={30} width={30} /></span>
      </div>
      <div className={`${styles.l_col2} ${styles.inputWithIcon}`}>
        <Input label="To" placeholder="To" type="date" onChange={onToDateChange} value={toDateValue} />
        <span className={styles.icon}><CalendarIcon height={30} width={30} /></span>
      </div>
      <div className={`${styles.l_col2} ${styles.noMarginRight}`}>
        <Button>Find Cases</Button>
      </div>
    </form>
  );
}

SearchForm.defaultProps = {
  caseValue: "",
  toDateValue: "",
  fromDateValue: "",
  onToDateChange: null,
  onFromDateChange: null,
  onCaseChange: null,
};

SearchForm.propTypes = {
  onCaseChange: PropTypes.func,
  caseValue: PropTypes.string,
  onToDateChange: PropTypes.func,
  onFromDateChange: PropTypes.func,
  toDateValue: PropTypes.string,
  fromDateValue: PropTypes.string,
};

export default SearchForm;
