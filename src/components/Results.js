import React from 'react';
import ResultImage from './ResultImage';
import '../styles/Results.css'

const Results = ({ results }) => {
  const display = results.map((item) => {
    const thumb = item.links.find(link => /thumb/.test(link))
    const original = item.links.find(link => /orig/.test(link))
    return (
      <ResultImage
        url={thumb}
        description={item.title}
        key={item.nasa_id}
        linkToOriginal={original}
      />
    );
  });

  return <div className="results">{display}</div>;
};

export default Results;
