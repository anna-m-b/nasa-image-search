import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ResultThumb.css';

const ResultThumb = ({ thumb, description, id, mediaType }) => {
  const media = mediaType === 'image' ? 'jpg' : 'mp4';
  return (
    <div className="result-thumb">
      <a
        href={`http://images-assets.nasa.gov/${mediaType}/${id}/${id}~orig.${media}`}
      >
        <img
          className="result-thumb_img"
          src={thumb}
          alt={description}
          data-testid="result-image"
          id={id}
        />
      </a>
      <p className="result-thumb_title">{description}</p>
    </div>
  );
};

ResultThumb.propTypes = {
  thumb: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ResultThumb;


