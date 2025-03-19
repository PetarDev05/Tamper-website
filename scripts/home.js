import { showMenu } from "./header.js";
import { buttons, getButton, products, getRightProducts, startingValues, starting } from "./data.js";

showMenu();

starting();

let content = '';
buttons.forEach((button) => {
  const HTML = `
    <button class="product-button js-product-button" data-button-id="${button.id}" data-button-type="${button.type}">${button.name}</button>
  `;

  content += HTML;
  document.querySelector('.js-menu-holder').innerHTML = content;

  document.querySelectorAll('.js-product-button').forEach((button) => {
    button.addEventListener('click', () => {
      const buttonId = button.dataset.buttonId;
      const name = getButton(buttonId);
      const heading = document.querySelector('.js-menu-item-name');
      heading.innerHTML = name;

      const buttonType = button.dataset.buttonType;
      const rightProducts = getRightProducts(buttonType);
      let divs = '';
      rightProducts.forEach((rightProduct) => {
        const HTML = `
          <div class="menu-item">
            <div class="name-price">
              <p class="name">${rightProduct.name}</p>
              <p class="price">${rightProduct.price} RSD</p>
            </div>
            <img src="${rightProduct.image}" alt="" class="item-image">
          </div>
        `;

        divs += HTML;

        document.querySelector('.js-products-holder').innerHTML = divs;

      });
    });
  });
});

const arrow = document.querySelector('.js-button-appear');
arrow.addEventListener('click', () => {
  document.querySelector('.js-menu-navigation').classList.toggle('active');
  document.querySelector('.js-button-appear').classList.toggle('active');
  document.querySelector('.line-1').classList.toggle('active');
  document.querySelector('.line-2').classList.toggle('active');
});

const menuTable = document.querySelector('.js-menu');
const menu = document.querySelector('.js-menu-navigation');

menuTable.addEventListener('click', () => {
  document.querySelector('.js-menu-navigation').classList.remove('active');
  document.querySelector('.js-button-appear').classList.remove('active');
  document.querySelector('.line-1').classList.remove('active');
  document.querySelector('.line-2').classList.remove('active');
});

menu.addEventListener('click', () => {
  document.querySelector('.js-menu-navigation').classList.remove('active');
  document.querySelector('.js-button-appear').classList.toggle('active');
  document.querySelector('.line-1').classList.toggle('active');
  document.querySelector('.line-2').classList.toggle('active');
});