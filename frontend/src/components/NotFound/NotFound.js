import React from "react"
import { Link } from "react-router-dom"
import "./NotFound.css"

function NotFound() {
  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__descrintion">Page not found</p>
      <Link to="/" className="not-found__button">
        Back
      </Link>
    </section>
  )
}

export default NotFound
