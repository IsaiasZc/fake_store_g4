import data from "./data.js";
import dom from "./dom.js";

const URL = 'https://api.escuelajs.co/api/v1/products';

// Traemos el elemento products por su id
const products = dom.$('#products');

const datos = await data.getData(URL);


datos.forEach( element => {
  // Creamos el card con la informacion del elemento
  const card = dom.newCard(element);
  console.log(element)

  // Agregamos el card al elemento products
  products.appendChild(card);
})