import React from "react";
import PropTypes from "prop-types";

function Pagination({ pagination, handlePageChange }) {
  if (pagination == null) return null;
  return (
    <nav>
      <div>
        First :
        <button
          type="button"
          hidden={pagination.first == null}
          onClick={() => handlePageChange(pagination.first)}
        >
          {pagination.first}
        </button>
      </div>
      <div>
        Previous :
        <button
          type="button"
          hidden={pagination.previous == null}
          onClick={() => handlePageChange(pagination.previous)}
        >
          {pagination.previous}
        </button>
      </div>
      <div>Current : {pagination.current}</div>
      <div>
        Next :
        <button
          type="button"
          hidden={pagination.next == null}
          onClick={() => handlePageChange(pagination.next)}
        >
          {pagination.next}
        </button>
      </div>
      <div>
        Last :
        <button
          type="button"
          hidden={pagination.last == null}
          onClick={() => handlePageChange(pagination.last)}
        >
          {pagination.last}
        </button>
      </div>
    </nav>
  );
}

Pagination.propTypes = {
  pagination: PropTypes.shape({
    first: PropTypes.string,
    previous: PropTypes.string,
    current: PropTypes.string,
    next: PropTypes.string,
    last: PropTypes.string,
  }),
  handlePageChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  pagination: {
    first: null,
    previous: null,
    current: null,
    next: null,
    last: null,
  },
};

export default Pagination;
