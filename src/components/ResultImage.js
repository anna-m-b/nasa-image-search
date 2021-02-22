import React from 'react';
import '../styles/ResultImage.css';

const ResultImage = ({ url, description, linkToOriginal }) => {
  return (
    <div className="result-image">
      <a href={linkToOriginal}>
        <img className="result-image_img" src={url} alt={description} />
      </a>
    </div>
  );
};

// ResultImage.PropTypes 

export default ResultImage;
