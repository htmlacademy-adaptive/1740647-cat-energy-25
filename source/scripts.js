const menuButton = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
//Не понимаю для чего делать отдельный класс menu--nojs если можно программно сделать модификатор menu--closed. Который при загрузке JS будет вешаться.
menu.classList.add('menu--closed');

menuButton.addEventListener('click', () => {
  let menuIsClosed = menu.classList.contains('menu--closed');
  menuIsClosed? menu.classList.remove('menu--closed') : menu.classList.add('menu--closed');
})
