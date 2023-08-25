import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ isShortFilm, searchAndFilterMovies, onFilterMovies }) {
  const [request, setRequest] = useState('');
  const [isRequestError, setIsRequestError] = useState(false);
  const location = useLocation();

  function onSubmitUserForm(e) {
    e.preventDefault();
    if (request.trim().length === 0) {
      setIsRequestError(true);
    } else {
      setIsRequestError(false);
      searchAndFilterMovies(request);
    }
  }

  function handleChangeInputRequest(e) {
    setRequest(e.target.value);
  }

  useEffect(() => {
    if (
      location.pathname === '/movies' &&
      localStorage.getItem('movieSearch')
    ) {
      const localRequest = localStorage.getItem('movieSearch');
      setRequest(localRequest);
    }
  }, [location]);
  return (
    <section className="search">
      <form className="search__form" id="form" onSubmit={onSubmitUserForm}>
        <input
          name="request"
          className="search__input"
          id="search-input"
          type="text"
          placeholder="Movie"
          required
          onChange={handleChangeInputRequest}
          value={request || ''}
        ></input>

        <button className="search__button" type="submit">
          Search
        </button>
      </form>
      <FilterCheckbox
        isShortFilm={isShortFilm}
        onFilterMovies={onFilterMovies}
      />
      {isRequestError && (
        <span className="search__form-error">Keyword required</span>
      )}
      <div className="search__border-bottom"></div>
    </section>
  );
}

export default SearchForm;
