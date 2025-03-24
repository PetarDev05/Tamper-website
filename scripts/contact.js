import { showMenu } from "./header.js";

showMenu();

const button = document.querySelector('.js-time-button');
const container = document.querySelector('.js-time-container');
let display;
button.addEventListener('click', () => {
  if (display) {
    container.innerHTML = '';
    display = false;
  } else {
    container.innerHTML = `
      <div class="time-div"><p class="day">Ponedeljak<p><p>08:00 - 20:00</p></div>
      <div class="time-div"><p class="day">Utorak<p><p>08:00 - 20:00</p></div>
      <div class="time-div"><p class="day">Sreda<p><p>08:00 - 20:00</p></div>
      <div class="time-div"><p class="day">Četvratak<p><p>08:00 - 20:00</p></div>
      <div class="time-div"><p class="day">Petak<p><p>08:00 - 20:00</p></div>
      <div class="time-div"><p class="day">Subota<p><p>08:00 - 18:00</p></div>
      <div class="time-div"><p class="day">Nedelja<p><p>08:00 - 18:00</p></div>
    `;
    display = true;
  }

  document.querySelector('.bs-1').classList.toggle('active');
  document.querySelector('.bs-2').classList.toggle('active');
});