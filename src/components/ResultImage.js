import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ResultImage.css';

const ResultImage = ({ thumb, description, id }) => {
  return (
    <div className="result-image">
      <a href={`http://images-assets.nasa.gov/image/${id}/${id}~orig.jpg`}>
        <img
          className="result-image_img"
          src={thumb}
          alt={description}
          data-testid="result-image"
          id={id}
        />
      </a>
    </div>
  );
};

ResultImage.propTypes = {
  thumb: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default ResultImage;
