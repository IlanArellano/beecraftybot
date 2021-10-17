/**
 * Funcion asincrona que pausa el proceso en un cierto numero de milisegundos
 * @param {number} time
 *
 * @returns {Promise}
 */
const Sleep = async (time) => {
  return await new Promise((resolve) => setTimeout(resolve, time));
};

/**
 * Transforma un string en el formato '{0}' a un nuevo string asignando la posicion de sus argumentos
 * @param {string} str
 * @param  {...any} args
 *
 * @returns {string}
 */
const Format = (str, ...args) => {
  return str.replace(/{(\d+)}/g, (match, number) => {
    return args[number] != undefined ? args[number] : match;
  });
};

module.exports = {
  Sleep,
  Format,
};
