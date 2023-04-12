import data from "./data.js";
import dom from "./dom.js";

const URL = 'https://api.escuelajs.co/api/v1/products';

// Traemos el elemento products por su id
const products = dom.$('#products');

const datos = await data.getData(URL);

// Obten las categorias de los productos
const categories = data.getCategories(datos);

// Insertar las categorias
dom.addCategories(categories);

// Seleccoiona la lista de categorias
const catList = [...dom.$('#categories').children];
let catActive = 0;

// Añadimos los eventos a cada elemento de categoria
catList.forEach( (categorie, index) => {
  

  categorie.addEventListener('click', () => {
    // Si existe la clase, termina la function
    if (categorie.classList.contains('act-categorie')) return ;

    // Si no existe, continuamos con la funcion
    categorie.classList.add('act-categorie');

    // Seleccionamos el nodo que tenía la clase activo
    let old = catList[catActive];

    // Removemos la clase activo del nodo antiguo
    old.classList.remove('act-categorie');

    catActive = index;
  })
} )


datos.forEach( element => {
  // Creamos el card con la informacion del elemento
  const card = dom.newCard(element);

  // Agregamos el card al elemento products
  products.appendChild(card);
})