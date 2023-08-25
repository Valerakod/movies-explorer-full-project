import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { filterMovies, filterDuration } from '../../utils/utils';

function SavedMovies({ loggedIn, onDeleteCard, savedMovies }) {
  const [isNotFound, setIsNotFound] = useState(false);
  const [isSearchRequest, setSearchRequest] = useState('');
  const [isFilteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isShortFilm, setShortFilm] = useState(false);

  function handleShortFilmFilterToggle() {
    setShortFilm(!isShortFilm);
  }

  function searchAndFilterMovies(req) {
    setSearchRequest(req);
  }

  useEffect(() => {
    if (isFilteredMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [isFilteredMovies]);

  useEffect(() => {
    const moviesCardList = filterMovies(savedMovies, isSearchRequest);
    setFilteredMovies(
      isShortFilm ? filterDuration(moviesCardList) : moviesCardList
    );
  }, [savedMovies, isShortFilm, isSearchRequest]);

  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm
        onFilterMovies={handleShortFilmFilterToggle}
        searchAndFilterMovies={searchAndFilterMovies}
      />
      <MoviesCardList
        cards={isFilteredMovies}
        isSavedFilms={true}
        savedMovies={savedMovies}
        onDeleteCard={onDeleteCard}
        isNotFound={isNotFound}
      />
      <Footer />
    </section>
  );
}

export default SavedMovies;
