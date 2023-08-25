const router = require('express').Router();
const express = require('express');
const { movieValidation, movieIdValidation } = require('../validation/movie');

const {
  getUserMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movie');

router.use(express.json());
router.get('/movies', getUserMovies);
router.post('/movies', movieValidation, createMovie);

router.delete('/movies/:movieId', movieIdValidation, deleteMovie);

module.exports = router;
