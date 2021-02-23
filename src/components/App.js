import React, { useState } from 'react';
import '../styles/App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import Results from './Results';
import getImagesData from '../requests/getImagesData';
import Navigation from './Navigation';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState();
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onSearchSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSearchResults();
    setError();
    try {
      const results = await getImagesData(searchInput.trim());
      setSearchResults(results);
      results.length && setPageNumber(1);
    } catch (error) {
      setError(error);
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
      {error && <ErrorMessage error={error} />}
      {searchResults && <Results results={searchResults} />}
      {searchResults && (
        <Navigation
          loadNextPage={loadNextPage}
          loadPrevPage={loadPrevPage}
          pageNumber={pageNumber}
        />
      )}
    </div>
  );
}

export default App;
