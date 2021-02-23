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
      const thumb = item.links.find((link) => /thumb/.test(link));
      const original = item.links.find((link) => /orig/.test(link));
      return (
        <ResultImage
          url={thumb}
          description={item.title}
          key={item.nasa_id}
          linkToOriginal={original}
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
