export function showMenu() {
  const burgerMenu = document.querySelector('.js-navigation');
  const burgerIcon = document.querySelector('.js-burger-menu-icon');
  const burgerLink = document.querySelectorAll('.js-off-screen-link');

  burgerIcon.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    burgerIcon.classList.toggle('active');
  });

  burgerLink.forEach((link) => {
    link.addEventListener('click', () => {
      burgerMenu.classList.toggle('active');
      burgerIcon.classList.toggle('active');
    });
  });
}