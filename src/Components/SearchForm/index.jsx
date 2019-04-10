import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import Input from "../Input";
import CalendarIcon from "../Svg/Calendar";
import styles from "./searchForm.css";

function SearchForm({
  onCaseChange, caseValue, startDateValue, onStartDateChange,
  endDateValue, onEndDateChange, onButtonClick, onFormSubmit,
}) {
  return (
    <form method="GET" className={styles.l_row} data-testid="search-form" onSubmit={onFormSubmit}>
      <div className={styles.l_col6}>
        <Input
          label="Search case descriptions"
          placeholder="Search case descriptions"
          onChange={onCaseChange}
          value={caseValue}
          name="Case"
        />
      </div>
      <div className={`${styles.l_col2} ${styles.inputWithIcon}`}>
        <Input
          label="From"
          placeholder="From"
          type="date"
          onChange={onStartDateChange}
          value={startDateValue}
          name="From"
          data-testid="fromDate"
        />
        <span className={styles.icon}><CalendarIcon height={30} width={30} /></span>
      </div>
      <div className={`${styles.l_col2} ${styles.inputWithIcon}`}>
        <Input
          label="To"
          placeholder="To"
          type="date"
          onChange={onEndDateChange}
          value={endDateValue}
          name="To"
        />
        <span className={styles.icon}><CalendarIcon height={30} width={30} /></span>
      </div>
      <div className={`${styles.l_col2} ${styles.noMarginRight}`}>
        <Button onClick={onButtonClick}>Find Cases</Button>
      </div>
    </form>
  );
}

SearchForm.defaultProps = {
  caseValue: "",
  endDateValue: "",
  startDateValue: "",
  onEndDateChange: e => e.preventDefault(),
  onStartDateChange: e => e.preventDefault(),
  onCaseChange: e => e.preventDefault(),
  onButtonClick: e => e.preventDefault(),
  onFormSubmit: e => e.preventDefault(),
};

SearchForm.propTypes = {
  onCaseChange: PropTypes.func,
  caseValue: PropTypes.string,
  onEndDateChange: PropTypes.func,
  onStartDateChange: PropTypes.func,
  endDateValue: PropTypes.string,
  startDateValue: PropTypes.string,
  onButtonClick: PropTypes.func,
  onFormSubmit: PropTypes.func,
};

export default SearchForm;
