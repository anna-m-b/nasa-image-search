import React, { useState } from 'react';
import '../styles/App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import Results from './Results';
import getImagesData from '../requests/getImagesData';
import Navigation from './Navigation';
import Loading from './Loading';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState();
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onSearchSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSearchResults();
    try {
      const results = await getImagesData(searchInput);
      setSearchResults(results);
      setPageNumber(1);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  const loadNextPage = async () => {
    const results = await getImagesData(searchInput, pageNumber + 1);
    setSearchResults(results);
    setPageNumber((prevPage) => prevPage + 1);
  };

  const loadPrevPage = async () => {
    const results = await getImagesData(searchInput, pageNumber - 1);
    setSearchResults(results);
    setPageNumber((prevPage) => prevPage - 1);
  };

  return (
    <div className="App">
      <Header />
      <SearchForm
        onChange={onChange}
        searchInput={searchInput}
        onSearchSubmit={onSearchSubmit}
      />
      {isLoading && <Loading />}
      {isError && (
        <p className="error-message">
          Oops, something went wrong. Please try again!
        </p>
      )}
      {searchResults && !searchResults.length && (
        <p className="no-results-message">
          Oh no! Nothing was found in the database.
        </p>
      )}
      {searchResults && searchResults.length > 0 && (
        <Results results={searchResults} />
      )}
      <Navigation
        loadNextPage={loadNextPage}
        loadPrevPage={loadPrevPage}
        pageNumber={pageNumber}
      />
    </div>
  );
}

export default App;
