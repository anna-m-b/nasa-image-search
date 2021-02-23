import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Navigation.css';

const Navigation = ({ loadNextPage, loadPrevPage, pageNumber }) => {
  return (
    <div className="navigation">
      <button
        onClick={loadPrevPage}
        disabled={pageNumber <= 1}
        className={
          pageNumber <= 1 ? 'navigation_button_disabled' : 'navigation_button'
        }
      >
        Previous Page
      </button>
      <button
        onClick={loadNextPage}
        disabled={!pageNumber}
        className={
          pageNumber === 0 ? 'navigation_button_disabled' : 'navigation_button'
        }
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
