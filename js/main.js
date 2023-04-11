import data from "./data.js";

const URL = 'https://api.escuelajs.co/api/v1/products';

const datos = await data.getData(URL);

console.log(datos);