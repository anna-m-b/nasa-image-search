import React from 'react';

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
      <button className="next-page_button" onClick={loadNextPage}>
        Next Page
      </button>
    </div>
  );
};

export default Navigation;
