import React from "react";
import successfully from "../../images/successfully.svg";
import unsuccessfully from "../../images/unsuccessfully.svg";
import "./InfoToolTip.css";

function InfoToolTip(props) {
  return (
    <div
      className={`popup popup_type_tooltip ${
        props.isOpen ? "popup_opened" : ""
      }`}
      onClick={props.onCloseOverlay}
    >
      <div className="popup__container">
        {props.isSuccess ? (
          <>
          <img
            className="popup__signup-image"
            src={`${successfully}`}
            alt="Registration completed successfully."
          />
          <p className="popup__signup-title">
          You have successfully registered! Welcome to the website!
          </p>
        </>
      ) : (
        <>
          <img
            className="popup__signup-image"
            src={`${unsuccessfully}`}
            alt="Registration failed."
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
  )
}

export default InfoToolTip