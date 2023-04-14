/* manipular el DOM */

// traer elemento del DOM por selector CSS
const $ = (selector) => document.querySelector(selector);

// Traemos el elemento products por su id
const products = $('#products');

// Crear elemento
const newE = tag => document.createElement(tag);

const newCard = (obj) => {
  const div = newE('div');
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
    <a href="#" id="${obj.id}" onClick="console.log(this.id)">
      <img class="click" src="./img/icons/bt_add_to_cart.svg" alt="add to cart">
    </a>
  </div> 
  `;

  return div
}

// FUncion para crear los cards en el elemento Products
const showCards = (arr) => {

  products.innerHTML = '';

  arr.forEach( element => {
    // Creamos el card con la informacion del elemento
    const card = newCard(element);
  
    // Agregamos el card al elemento products
    products.appendChild(card);
  })
}

// Añadir las categorias al DOM
const addCategories = (categories) => {

  // selecciono el elemento padre
  const list = $('#categories');

  categories.forEach( elem => {
    const li = newE('li');
    li.className = `text-nowrap pointer py-1 px-3 border border-2 rounded-3 c-vl-pink ${elem === 'All' ? 'act-categorie' : '' }`; //condiciono la clase act-categorie solo para el elemento 'All'

    li.innerHTML = elem;

    list.appendChild(li);
  })

}

export default {
  addCategories,
  newCard,
  showCards,
  $,
}