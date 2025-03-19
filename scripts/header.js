export function showMenu() {
  const burgerMenu = document.querySelector('.js-navigation');
  const burgerIcon = document.querySelector('.js-burger-menu-icon');

  burgerIcon.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    burgerIcon.classList.toggle('active');
  });
}