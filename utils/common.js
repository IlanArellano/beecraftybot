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
 * Similar al método String.format() en c#, Transforma un string en el formato '{0}' a un nuevo string asignando la posicion de sus argumentos
 * @param {string} str - El string que va a matchear con los argumentos
 * @param  {...any} args - Los argumentos que se pasarán al string
 *
 * @returns {string} - El nuevo string Formateado con sus argumentos
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
