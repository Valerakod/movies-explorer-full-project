import React from "react";
import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Portfolio</h3>
      <nav className="portfolio__list">
        <a
          href="https://valerakod.github.io/how-to-learn/"
          className="portfolio__link portfolio__link-border"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__description">Static website</p>
          <img
            className="portfolio__image"
            src={arrow}
            alt="arrow for link"
          />
        </a>
        <a
          href="https://valerakod.github.io/russian-travel/"
          className="portfolio__link portfolio__link-border"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__description">Responsive website</p>
          <img
            className="portfolio__image"
            src={arrow}
            alt="arrow for link"
          />
        </a>
        <a
          href="https://valerakod.github.io/mesto/"
          className="portfolio__link"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__description">Single Page Application</p>
          <img
            className="portfolio__image"
            src={arrow}
            alt="arrow for link"
          />
        </a>
      </nav>
    </section>
  );
}

export default Portfolio;
