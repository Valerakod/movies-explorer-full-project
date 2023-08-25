import React, { useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import * as movies from '../../utils/MoviesApi';
import { filterMovies, filterDuration } from '../../utils/utils';

function Movies({ loggedIn, handleLikeFilm, savedMovies, onDeleteCard }) {
  const [isShortFilm, setisShortFilm] = useState(false);
  const [isRequestError, setisRequestError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [initialCardsMovies, setInitialCardsMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  function handleShortFilmFilterToggle() {
    setisShortFilm(!isShortFilm);
    if (!isShortFilm) {
      if (filterDuration(initialCardsMovies).length === 0) {
        setFilteredMovies(filterDuration(initialCardsMovies));
      } else {
        setFilteredMovies(filterDuration(initialCardsMovies));
      }
    } else {
      setFilteredMovies(initialCardsMovies);
    }
    localStorage.setItem('shortMovies', !isShortFilm);
  }

  function updateFilteredMoviesList(movies, query, short) {
    const moviesCardList = filterMovies(movies, query, short);
    setInitialCardsMovies(moviesCardList);
    setFilteredMovies(short ? filterDuration(moviesCardList) : moviesCardList);
    localStorage.setItem('movies', JSON.stringify(moviesCardList));
    localStorage.setItem('allMovies', JSON.stringify(movies));
  }

  useEffect(() => {
    if (localStorage.getItem('shortMovies') === 'true') {
      setisShortFilm(true);
    } else {
      setisShortFilm(false);
    }
  }, []);

  function searchAndFilterMovies(query) {
    localStorage.setItem('movieSearch', query);
    localStorage.setItem('shortMovies', isShortFilm);

    if (localStorage.getItem('allMovies')) {
      const movies = JSON.parse(localStorage.getItem('allMovies'));
      updateFilteredMoviesList(movies, query, isShortFilm);
    } else {
      setIsLoading(true);
      movies
        .getMovies()
        .then((cardsData) => {
          updateFilteredMoviesList(cardsData, query, isShortFilm);
          setisRequestError(false);
          console.log(cardsData);
        })
        .catch((err) => {
          setisRequestError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  useEffect(() => {
    if (localStorage.getItem('movieSearch')) {
      if (filteredMovies.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(localStorage.getItem('movies'));
      setInitialCardsMovies(movies);
      if (localStorage.getItem('shortMovies') === 'true') {
        setFilteredMovies(filterDuration(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm
        searchAndFilterMovies={searchAndFilterMovies}
        isShortFilm={isShortFilm}
        onFilterMovies={handleShortFilmFilterToggle}
      />
      <MoviesCardList
        cards={filteredMovies}
        isRequestError={isRequestError}
        isNotFound={isNotFound}
        isLoading={isLoading}
        isSavedFilms={false}
        savedMovies={savedMovies}
        handleLikeFilm={handleLikeFilm}
        onDeleteCard={onDeleteCard}
      />
      <Footer />
    </section>
  );
}

export default Movies;
