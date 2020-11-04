"use strict";
// lesson18 Практика, часть 3




// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");
//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");
//   }
// }
// // start();
// const personalMuvieDb = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// function writeYourGenres() {
//   for (let i = 1; i < 4; i++) {
//     const film = prompt(`Ваш любимый фильм под номером ${i} ?`, "");
//     if (film != null && film != "") {
//       personalMuvieDb.genres[i-1] = film;
//     } else {
//       i--;
//     }
//   }
// }

// writeYourGenres();
// console.log(personalMuvieDb);

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из посмледних фильмов?", "");
//     const b = +prompt("Насколько оцените его?", "");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//       personalMuvieDb.movies[a] = b;
//     } else {
//       i--;
//     }
//   }
// }

// // rememberMyFilms();

// function detectPersonallevel() {
//   if (personalMuvieDb.count <= 10) {
//     alert("Просмотрено довольно мало фильмов");
//   } else if (personalMuvieDb.count > 10 && personalMuvieDb.count <= 30) {
//     alert("Вы класический зритель");
//   } else if (personalMuvieDb.count > 30) {
//     alert("Вы киноман");
//   } else {
//     console.log("Произошла ошибка");
//   }
// }

// // detectPersonallevel();

// function showMyDb(hidden) {
//   if (!hidden) {
//     console.log(personalMuvieDb);
//   }
// }

// showMyDb(personalMuvieDb.privat);



// function first() {
//   setTimeout(function () {
//     console.log('first');
//   }, 1000);
// }
// function second() {
//   console.log('second');
// }
// first();
// second();

// function lern(lang, callback) {
//   console.log(lang);
//   callback();
// }

// lern('js', function () {
//   console.log('eeee');
// });

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  }
};

console.log(Object.keys(options).length); // Проверяеь количество в объекте

const { border, bg } = options.colors; // деструктуризация объектов
console.log(border);

for (let key in options) {
  if (typeof (options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство '${i}' имеет значение '${options[key][i]}'`);
    }
  }
  console.log(`Свойство '${key}' имеет значение '${options[key]}'`);
}
