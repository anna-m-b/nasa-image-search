import React from 'react';
import PropTypes from 'prop-types';
import ResultImage from './ResultImage';
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
        <ResultImage
          thumb={item.thumb}
          description={item.title}
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
