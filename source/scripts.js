const menuButton = document.querySelector('.header__burger');
const burger = document.querySelector('.header__burger-icon');
const menu = document.querySelector('.menu');
//Не понимаю для чего делать отдельный класс menu--nojs если можно программно сделать модификатор menu--closed. Который при загрузке JS будет вешаться.
menu.classList.add('menu--closed');

menuButton.addEventListener('click', () => {
  let menuIsClosed = menu.classList.contains('menu--closed');
  if(menuIsClosed) {
    menu.classList.remove('menu--closed');
    burger.classList.add('header__burger-icon--opened');
  } else {
    menu.classList.add('menu--closed');
    burger.classList.remove('header__burger-icon--opened');
  }
})
