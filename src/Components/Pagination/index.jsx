import React from "react";
import PropTypes from "prop-types";
import gridStyles from "../../styles/grid.css";
import Button from "../Button";
import AngleLeftIcon from "../Svg/AngleLeft";
import AngleRightIcon from "../Svg/AngleRight";
import styles from "./pagination.css";

const size = 20;

const generateButtons = (count, onClick, activePage) => {
  const buttons = [];
  for (let i = 1; i <= count; i += 1) {
    buttons.push(
      <li className={gridStyles.l_col1} key={`buttonNo_${i}`}>
        <Button onClick={onClick} value={i} classNames={activePage === i ? styles.isActive : ""}>{i}</Button>
      </li>,
    );
  }

  return buttons;
};
function Pagination({ buttonsCount, onClick, activePage }) {
  return (
    <ul className={`${gridStyles.l_row} ${styles.pagination}`}>
      <li className={gridStyles.l_col2}>
        <Button onClick={onClick} value="previous">
          <AngleLeftIcon height={size} width={size} fill="#ffffff" />
          Previous
        </Button>
      </li>
      {generateButtons(buttonsCount, onClick, activePage)}
      <li className={gridStyles.l_col2}>
        <Button onClick={onClick} value="next">
          Next
          <AngleRightIcon height={size} width={size} fill="#ffffff" />
        </Button>
      </li>
    </ul>
  );
}

Pagination.defaultProps = {
  onClick: e => e.preventDefault(),
  activePage: 1,
};

Pagination.propTypes = {
  buttonsCount: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  activePage: PropTypes.number,
};

export default Pagination;
