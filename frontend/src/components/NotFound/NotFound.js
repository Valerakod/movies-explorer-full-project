import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-2)
  }

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__description">Page not found</p>
      <button
        className="not-found__button"
        onClick={ goBack }
        type="button"
      >
        Back
      </button>
    </section>
  );
}

export default NotFound; 