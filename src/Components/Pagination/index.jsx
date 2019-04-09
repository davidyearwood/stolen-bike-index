import React from "react";
import gridStyles from "../../styles/grid.css";
import Button from "../Button";
import AngleLeftIcon from "../Svg/AngleLeft";
import AngleRightIcon from "../Svg/AngleRight";
import DoubleLeftIcon from "../Svg/DoubleLeft";
import DoubleRightIcon from "../Svg/DoubleRight";
import styles from "./pagination.css";

const size = 20;

function Pagination() {
  return (
    <ul className={`${gridStyles.l_row} ${styles.pagination}`}>
      <li className={gridStyles.l_col2}>
        <Button>
          <DoubleLeftIcon height={size} width={size} fill="#ffffff" />
          First
        </Button>
      </li>
      <li className={gridStyles.l_col2}>
        <Button>
          <AngleLeftIcon height={size} width={size} fill="#ffffff" />
          Prev
        </Button>
      </li>
      <li className={gridStyles.l_col1}><Button>1</Button></li>
      <li className={gridStyles.l_col1}><Button>2</Button></li>
      <li className={gridStyles.l_col1}><Button>3</Button></li>
      <li className={gridStyles.l_col2}>
        <Button>
          Next
          <AngleRightIcon height={size} width={size} fill="#ffffff" />
        </Button>
      </li>
      <li className={gridStyles.l_col2}>
        <Button>
          Last
          <DoubleRightIcon height={size} width={size} fill="#ffffff" />
        </Button>
      </li>
    </ul>
  );
}

export default Pagination;
