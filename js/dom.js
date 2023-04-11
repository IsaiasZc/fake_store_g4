/* manipular el DOM */

// traer elemento del DOM por selector CSS
const $ = (selector) => document.querySelector(selector);

const newCard = (obj) => {
  const div = document.createElement('div');
  div.className = 'card-img';

  // Insertar los elementos del card
  div.innerHTML = `
  <div class="img card-img-modified">
    <img class="w-100 h-100 rounded-4" src="${obj.images[0]}" alt="${obj.title}">
  </div>
  <div class="info d-flex justify-content-between mt-3">
    <p class="d-flex flex-column">
      <span class="fw-bold">$${obj.price},00</span>
      <span>${obj.title}</span>
    </p>
    <div>
      <img src="./img/icons/bt_add_to_cart.svg" alt="add to cart">
    </div>
  </div>
  `

  return div
}

export default {
  newCard,
  $,
}