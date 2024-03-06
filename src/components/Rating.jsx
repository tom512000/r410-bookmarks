import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

function Rating({ value }) {
  return (
    <span>
      <FontAwesomeIcon icon={faStar} />
      {Math.round(value)}
    </span>
  );
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rating;
