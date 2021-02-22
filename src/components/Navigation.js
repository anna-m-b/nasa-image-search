import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ loadNextPage, loadPrevPage, pageNumber }) => {
  return (
    <div className="navigation">
      <button
        className="prev-page_button"
        onClick={loadPrevPage}
        disabled={pageNumber <= 1}
      >
        Previous Page
      </button>
      <button
        className="next-page_button"
        onClick={loadNextPage}
        disabled={!pageNumber}
      >
        Next Page
      </button>
    </div>
  );
};

Navigation.propTypes = {
  loadNextPage: PropTypes.func.isRequired,
  loadPrevPage: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
};

export default Navigation;
