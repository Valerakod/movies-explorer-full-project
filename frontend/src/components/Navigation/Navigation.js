import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import account from '../../images/account_check_icon.svg';

function Navigation({ handleClose }) {
    // Функция для смены цвета для активной ссылки
    const setActiveButton = ({ isActive }) =>
      isActive ? "navigation__link_active" : "navigation__link"

  return (
    <div className="navigation__page-overlay">
      <div className="navigation__overlay-wrapper"></div>
      <div className="navigation__menu">
        <button
          className="navigation__close-button"
          onClick={handleClose}
        ></button>
        <nav className="navigation__links-list">
          <NavLink
            exact
            to="/"
            className={setActiveButton}
            onClick={handleClose}
          >
            Main
          </NavLink>
          <NavLink
            to="/movies"
            className={setActiveButton}
            onClick={handleClose}
          >
            Movies
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={setActiveButton}
            onClick={handleClose}
          >
            Saved movies
          </NavLink>
        </nav>
        <Link to="/profile" className="navigation__account-button" onClick={handleClose}>
          <a className="navigation__account-text">Account </a>
          <img src={account} alt="account" />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
