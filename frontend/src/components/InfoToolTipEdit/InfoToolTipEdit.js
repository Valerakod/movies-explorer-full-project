import React from 'react';
import successfully from '../../images/successfully.svg';
import unsuccessfully from '../../images/unsuccessfully.svg';
import '../InfoToolTip/InfoToolTip.css';

function InfoToolTipEdit(props) {
  return (
    <div
      className={`popup popup_type_tooltip ${
        props.isOpen ? 'popup_opened' : ''
      }`}
      onClick={props.onCloseOverlay}
    >
      <div className="popup__container">
        {props.isEdit ? (
          <>
            <img
              className="popup__signup-image"
              src={`${successfully}`}
              alt="Editing was successful."
            />
            <p className="popup__signup-title">Editing successful!</p>
          </>
        ) : (
          <>
            <img
              className="popup__signup-image"
              src={`${unsuccessfully}`}
              alt="Editing done incorrectly."
            />
            <p className="popup__signup-title">
              Something went wrong. Please try again!
            </p>
          </>
        )}
        <button
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoToolTipEdit;
