'use strict';

const box = document.querySelector('.box');

box.style.backgroundColor = 'blue';

const hearts = document.querySelectorAll(".heart");

const wrapper = document.querySelector('.wrapper');
// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "blue";
// }

// hearts.forEach(item => {
//   item.style.backgroundColor = "blue";
// });

const div = document.createElement('div');
// const text = document.createTextNode('i was here');
div.classList.add('black');
document.body.append(div); // Добаляет в конец body
wrapper.append(div);
wrapper.prepend(div); // Добавляет в начало
hearts[0].before(div);
hearts[0].after(div);
hearts[0].remove();
box.replaceWith(hearts[2]);
div.insertAdjacentHTML("afterbegin", '<h1>hello</h1>');