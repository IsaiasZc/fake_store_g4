/* Manipulacion de los datos */

const getData = async (URL) => {
  return fetch(URL)
    .then(response => response.json())
    .then(response => response)
    .catch(error => error);
};

const getCategories = (data) => {
  let categories = data.map( elem => elem.category.name);

  // COnvertimos a SET para obtener las categorias sin valores repetidos
  categories = new Set(categories);

  // Convertimos el SET a un Array
  categories = ['All',...categories];

  return categories
};

const filtrar = (arr, filtro) => {
  
  let filtered = arr.filter( elem => elem.category.name === filtro)

  return filtered
};

const filterByName = (arr, filtro) => {
  
  let filtered = arr.filter( elem => {
    return elem.title.toLowerCase().includes(filtro.toLowerCase()) || elem.category.name.toLowerCase().includes(filtro.toLowerCase())
  })

  console.log(filtered);
  return filtered
}

export default {
  getData,
  getCategories,
  filterByName,
  filtrar
}