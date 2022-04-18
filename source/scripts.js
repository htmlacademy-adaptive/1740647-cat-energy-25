const menuButton = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  let menuIsClosed = menu.classList.contains('menu--closed');
  if (menuIsClosed) {
    menu.classList.remove('menu--closed');
  } else {
    menu.classList.add('menu--closed');
  }
})
