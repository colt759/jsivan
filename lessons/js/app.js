"use strict";
 // 37. ClassList и делегирование событий

const btns = document.querySelectorAll('button');

console.log(btns[0].classList.length); // Количество классов в кнопке под игдексом ноль - 2
console.log(btns[0].classList.item(0));
// Item - это метод позволяет выбрать класс который идет под определенным индексом blue

console.log(btns[0].classList.add('green'));
console.log(btns[0].classList.remove("green"));
console.log(btns[0].classList.toggle("green"));
console.log(btns[0].classList.contains('yellow')); // Возвращает true or false


//Когда я кликаю на первую кнопку, то начинаю проверять если у второй кнопки нет кдасса red то добавляем и наоборорт
btns[0].addEventListener('click', () => {
  if (!btns[1].classList.contains('red')) { // Проверяем что сласса red нет
    btns[1].classList.add('red');
  } else {
    btns[1].classList.remove('red');
  }
});
// Тоже самое что и выше но только с toggle
btns[0].addEventListener("click", () => {
  btns[1].classList.toggle('red');
});

//------ Делегирование событий ------- делегируем события с родителя к смоим потомкам--
// мы берем родительский блок  и навешиваем на него обраюотчик событий
// мы назначаем функцию для ее потомков

const wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('click', (e) => {
  if (e.target && e.target.tagName == "BUTTON") {
    console.log('jj');
  }
  // or
  // if (e.target && e.target.classList.contains('blue')) {
  //   console.log("jffj");
  // }
});


const btn = document.createElement('button');
btn.classList.add('blue');
wrapper.append(btn); // добавляем соданную кнопку во внутрь родителя - wrapper


//плохой вариат не будет распозновать новые добавленные элементы
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('kk');
  });
});





