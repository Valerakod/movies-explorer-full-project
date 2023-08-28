import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchError from '../SearchError/SearchError';
import {
  DESKTOP_CARDS_DISPLAY_LIMIT,
  TABLET_CARDS_DISPLAY_LIMIT,
  MOBILE_CARDS_DISPLAY_LIMIT,
} from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({
  cards,
  isLoading,
  isNotFound,
  isSavedFilms,
  savedMovies,
  isReqError,
  handleLikeFilm,
  onDeleteCard,
}) {
  const [shownMovies, setShownMovies] = useState(0);
  const { pathname } = useLocation();

  function getMovieFromSaved(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  }

  function setMoviesShownCount() {
    const display = window.innerWidth;
    console.log("Сколько отобразить карточек в зависимости от ширины экрана")
    console.log(display)
    if (display > 1279) {
      setShownMovies(16); // 16 cards
    } else if (display > 767) {
      setShownMovies(8); // 8 cards
    } else {
      setShownMovies(5); // 5 cards
    }
  }


  useEffect(() => {
    let resizeTimeout

    function handleResize() {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        setMoviesShownCount()
      }, 500)
    }
    
    setMoviesShownCount()

    window.addEventListener("resize", handleResize)

    return () => {
      clearTimeout(resizeTimeout)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // I add the number of cards with movies when clicking on the "More" button on different screen sizes
  function expandMoviesDisplay() {
    const display = window.innerWidth;
    console.log(display)
    console.log("Сколько отобразить карточек по нажатию на кнопку ЕЩЁ")
    if (display > 1279) {
      console.log(DESKTOP_CARDS_DISPLAY_LIMIT)
      setShownMovies(shownMovies + DESKTOP_CARDS_DISPLAY_LIMIT); // 4 cards
    } else if (display > 767) {
      console.log(TABLET_CARDS_DISPLAY_LIMIT)
      setShownMovies(shownMovies + TABLET_CARDS_DISPLAY_LIMIT); // 2 cards
    } else {
      console.log(MOBILE_CARDS_DISPLAY_LIMIT)
      setShownMovies(shownMovies + MOBILE_CARDS_DISPLAY_LIMIT); // 2 cards
    }
  }

  return (
    <section className="cards">
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && <SearchError errorText={'Not found'} />}
      {isReqError && !isLoading && (
        <SearchError
          errorText={
            'Sorry! An error occurred during the request. There may be a connection problem or the server is unavailable. Wait a bit and try again'
          }
        />
      )}
      {!isLoading && !isReqError && !isNotFound && (
        <>
          {pathname === '/saved-movies' ? (
            <>
              <ul className="cards__list">
                {cards.map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={getMovieFromSaved(savedMovies, card)}
                    cards={cards}
                    card={card}
                    handleLikeFilm={handleLikeFilm}
                    isSavedFilms={isSavedFilms}
                    onDeleteCard={onDeleteCard}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              <div className="cards__button-wrapper"></div>
            </>
          ) : (
            <>
              <ul className="cards__list">
                {cards.slice(0, shownMovies).map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={getMovieFromSaved(savedMovies, card)}
                    cards={cards}
                    card={card}
                    handleLikeFilm={handleLikeFilm}
                    isSavedFilms={isSavedFilms}
                    onDeleteCard={onDeleteCard}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              <div className="cards__button-wrapper">
                {cards.length > shownMovies ? (
                  <button
                    className="cards__button-wrapper cards__button"
                    onClick={expandMoviesDisplay}
                  >
                    More
                  </button>
                ) : (
                  ''
                )}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
