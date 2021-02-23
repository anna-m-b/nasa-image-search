import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) => {
  if (error.response) {
    return (
      <p className="error-message">
        Oops, something went wrong. Please try again!
      </p>
    );
  }

  if (error.message) {
    return <p className="error-message">Please enter a search term.</p>;
  }
};

ErrorMessage.propTypes = {
  error: PropTypes.object.isRequired,
};

export default ErrorMessage;
