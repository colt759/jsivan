"use strict";
// lesson15 Практика, часть 2

const numberOfFilms = +prompt("Сколько фильмов вы уже смотрели", "");





const personalMuvieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};


for (let i = 0; i < 2; i++) {
  const a = prompt("Один из посмледних фильмов?", "");
  const b = +prompt("Насколько оцените его?", "");

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMuvieDb.movies[a] = b;
  } else {
    i--;
  }
}

if (personalMuvieDb.count <= 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (personalMuvieDb.count > 10 && personalMuvieDb.count <= 30) {
  alert("Вы класический зритель");
} else if (personalMuvieDb.count > 30) {
  alert("Вы киноман");
} else {
  console.log('Произошла ошибка');
}

console.log(personalMuvieDb);

