import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchForm.css';

const SearchForm = ({ onChange, onSearchSubmit, searchInput }) => {
  return (
    <form className="search-form" onSubmit={onSearchSubmit}>
      <label htmlFor="search-input" className="search-form_label">
        Search the NASA images database
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

        <button type="submit" className="search-form_button">
          Search
        </button>
      </span>
    </form>
  );
};

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired
}


export default SearchForm;
