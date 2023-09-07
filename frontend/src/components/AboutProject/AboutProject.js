import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="about">
      <div className="about-project__wrapper">
        <h2 className="about-project__title">About project</h2>
        <ul className="about-project__text-block">
          <li className="about-project__info">
            <h3 className="about-project__info-header">
              This project includes 5 stages
            </h3>
            <p className="about-project__info-description">
              Planning, creating the backend, layout, adding functionality and
              final improvements.
            </p>
          </li>
          <li className="about-project__info">
            <h3 className="about-project__info-header">
              It took 5 weeks to complete the project
            </h3>
            <p className="about-project__info-description">
              Each stage had a soft and strict deadline that needed to be follow
              in order to successfully pass.
            </p>
          </li>
        </ul>
        <div className="about-project__time">
          <h3 className="about-project__time-header about-project__time-header_green">
            1 week
          </h3>
          <h3 className="about-project__time-header">4 weeks</h3>
          <p className="about-project__time-description">Back-end</p>
          <p className="about-project__time-description">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
