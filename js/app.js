"use strict";
// lesson12

const numberOfFilms = +prompt("Сколько фильмов вы уже смотрели", "");
const a = prompt("Один из посмледних фильмов?", "");
const b = +prompt("Насколько оцените его?", "");
const c = prompt("Один из посмледних фильмов?", "");
const d = +prompt("Насколько оцените его?", "");



const personalMuvieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

personalMuvieDb.movies[a] = b;
personalMuvieDb.movies[c] = d;

console.log(personalMuvieDb);
