import React from 'react';
import NavTab from '../NavTab/NavTab';
import './Promo.css';
import landingLogo from '../../images/promo-image.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__wrapper">
        <div className="promo__text-block">
          <h1 className="promo__title">
            Educational project of a student of the Faculty of
            Web&nbsp;-&nbsp;Development.
          </h1>
          <p className="promo__description">
            Scroll to learn more about this project and the creator.
          </p>
        </div>
        <img className="promo__image" src={landingLogo} alt="pict" />

        <NavTab />
      </div>
    </section>
  );
}

export default Promo;
