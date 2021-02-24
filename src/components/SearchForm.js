import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchForm.css';

const SearchForm = ({ onChange, onSearchSubmit, searchInput }) => {
  return (
    <div className="search-form">
      <label htmlFor="search-input" className="search-form_label">
        Search the NASA media database
      </label>
      <span className="search-form_input-and-button">
        <input
          type="text"
          placeholder="Enter a search term"
          id="search-input"
          className="search-form_input"
          value={searchInput}
          onChange={onChange}
        />

        <button onClick={onSearchSubmit} name="image" className="search-form_button">
          Search images
        </button>

        <button onClick={onSearchSubmit} name="video" className="search-form_button">
          Search videos
        </button>
      </span>
    </div>
  );
};

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired
}


export default SearchForm;
