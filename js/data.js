/* Manipulacion de los datos */

const getData = async (URL) => {
  return fetch(URL)
    .then(response => response.json())
    .then(response => response)
    .catch(error => error);
};

export default {
  getData,
}