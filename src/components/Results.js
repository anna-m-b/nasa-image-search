import React from 'react';
import PropTypes from 'prop-types';
import ResultThumb from './ResultThumb';
import '../styles/Results.css';

const Results = ({ results }) => {
  if (!results.length) {
    return (
      <p className="no-results-message">
        Oh no! Nothing was found in the database.
      </p>
    );
  } else {
    const display = results.map((item) => {
      return (
        <ResultThumb
          thumb={item.thumb}
          description={item.title}
          mediaType={item.media_type}
          key={item.nasa_id}
          id={item.nasa_id}
        />
      );
    });

    return (
      <div className="results" data-testid="results">
        {display}
      </div>
    );
  }
};

Results.propTypes = {
  results: PropTypes.array.isRequired,
}

export default Results;
