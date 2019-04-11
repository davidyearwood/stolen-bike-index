import React from "react";
import PropTypes from "prop-types";
import gridStyles from "../../styles/grid.css";
import Button from "../Button";
import AngleLeftIcon from "../Svg/AngleLeft";
import AngleRightIcon from "../Svg/AngleRight";
import styles from "./pagination.css";

const size = 20;

const generateButtons = (count) => {
  const buttons = [];
  for (let i = 1; i <= count; i += 1) {
    buttons.push(
      <li className={gridStyles.l_col1} key={`buttonNo_${i}`}>
        <Button>{i}</Button>
      </li>,
    );
  }

  return buttons;
};
function Pagination({ buttonsCount }) {
  return (
    <ul className={`${gridStyles.l_row} ${styles.pagination}`}>
      <li className={gridStyles.l_col2}>
        <Button>
          <AngleLeftIcon height={size} width={size} fill="#ffffff" />
          Previous
        </Button>
      </li>
      {generateButtons(buttonsCount)}
      <li className={gridStyles.l_col2}>
        <Button>
          Next
          <AngleRightIcon height={size} width={size} fill="#ffffff" />
        </Button>
      </li>
    </ul>
  );
}

Pagination.propTypes = {
  buttonsCount: PropTypes.number.isRequired,
};

export default Pagination;
