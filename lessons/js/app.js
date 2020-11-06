"use strict";

//Урок 34 События на мобильных устройствах

//touchstart
//touchmove
//touched
//touchenter
//touchleave
//touchcancel

window.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box');
  box.addEventListener('touchstart', (e) => {
    e.preventDefault();
    console.log('start');
    console.log(e.targetTouches[0].pageX);

  });

   box.addEventListener('touchmove', (e) => {
    e.preventDefault();
    console.log('move');
   });
  
   box.addEventListener("touchend", (e) => {
     e.preventDefault();
     console.log("end");
   });
});

// touches список всех пальцев на экране
// targetTouches все пальцы которые взаимодействуют с конкретным елементом
// chengedTouches список пальцев участвующих в текущем событии