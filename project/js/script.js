"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const removeAds = document.querySelectorAll(".promo__adv img"),
    bgImg = document.querySelector(".promo__bg"),
    genre = document.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"), // форма с классом add
    addInput = addForm.querySelector(".adding__input"), // в нутри формы находим input
    checkbox = addForm.querySelector('[type="checkbox"]');
  // btn = document.querySelector("button");

  const deleteAds = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  const makeChanges = () => {
    genre.textContent = "Драма";
    bgImg.style.backgroundImage = "url('img/bg.jpg')";
  };

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    //Если в инпуте не пустая строка тогда:
    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 21)}...`;
      }
        if (favorite) {
            console.log('Добавили любимый фильм');
      }
      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);
      createMovieList(movieDB.movies, movieList);
    }

    //addForm.reset(); //Сбрасывает форму
    event.target.reset(); //Сбрасывает форму
  });

  function createMovieList(films, parent) {
      parent.innerHTML = "";
      
      sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove(); //Удаляем родителя
        movieDB.movies.splice(i, 1); //удаляемый элемент под индексом i, и 1 - это колическтво удаляемых елементов

        createMovieList(films, parent);
      });
    });
  }

  deleteAds(removeAds);
  makeChanges();
  createMovieList(movieDB.movies, movieList);
});
