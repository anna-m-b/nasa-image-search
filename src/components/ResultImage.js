import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ResultImage.css';

const ResultImage = ({ url, description, linkToOriginal }) => {
  return (
    <div className="result-image">
      <a href={linkToOriginal}>
        <img
          className="result-image_img"
          src={url}
          alt={description}
          data-testid="result-image"
        />
      </a>
    </div>
  );
};

ResultImage.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkToOriginal: PropTypes.string.isRequired,
}

export default ResultImage;
