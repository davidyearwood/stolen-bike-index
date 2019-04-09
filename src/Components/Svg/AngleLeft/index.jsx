import React from "react";
import PropTypes from "prop-types";

function AngleLeft({ height, width, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="angle-left"
      className="svg-inline--fa fa-angle-left fa-w-8"
      role="img"
      viewBox="0 0 256 512"
      height={height}
      width={width}
    >
      <path fill={fill} d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
    </svg>
  );
}

AngleLeft.defaultProps = {
  height: 50,
  width: 50,
  fill: "#000000",
};
AngleLeft.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  fill: PropTypes.string,
};
export default AngleLeft;
