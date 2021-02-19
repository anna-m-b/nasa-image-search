import React from 'react';
import '../styles/SearchForm.css';

const SearchForm = ({ onChange, searchInput, onSearchSubmit }) => {
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

export default SearchForm;
