import React from 'react';
import avatar from '../../images/valeriia.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Student</h2>
      <div className="about-me__wrapper">
        <div className="about-me__text-block">
          <h3 className="about-me__subtitle">Valeriia Yemets</h3>
          <h4 className="about-me__info">Frontend-developer, age: 33</h4>
          <p className="about-me__description">
            I live in England in the beautiful city Ringwood. I have a son and a
            daughter and I am happy. I have a high legal education. I have
            fluent knowledge of Russian, Ukrainian, Polish and English.
            Recently, I have fallen in love with web development and I think
            that I am good at it. I am always learning something new and I love
            it.
          </p>
          <a
            href="https://github.com/Valerakod"
            className="about-me__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={avatar} alt="my picture" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
