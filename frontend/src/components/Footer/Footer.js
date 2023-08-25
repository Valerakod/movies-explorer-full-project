import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Educational project Yandex.Practicum х BeatFilm.
      </h3>
      <div className="footer__wrapper">
        <p className="footer__author">
          {' '}
          © {new Date().getFullYear()}. Valeriia Yemets
        </p>
        <a
          href="https://practicum.yandex.ru"
          className="footer__link"
          target="_blank"
          rel="noreferrer"
        >
          Yandex.Practicum
        </a>
        <a
          href="https://github.com/Valerakod"
          className="footer__link"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </footer>
  );
}

export default Footer;
