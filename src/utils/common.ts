/**
 * Funcion asincrona que pausa el proceso en un cierto numero de milisegundos
 * @param {number} time
 *
 * @returns {Promise}
 */
export const Sleep = async (time: number): Promise<void> => {
  return await new Promise((resolve) => setTimeout(resolve, time));
};

/**
 * Similar al método String.format() en c#, Transforma un string en el formato '{0}' a un nuevo string asignando la posicion de sus argumentos
 * @param {string} str - El string que va a matchear con los argumentos
 * @param  {...any} args - Los argumentos que se pasarán al string
 *
 * @returns {string} - El nuevo string Formateado con sus argumentos
 */
export const Format = (str: string, ...args: any[]): string => {
  return str.replace(/{(\d+)}/g, (match, number) => {
    return args[number] != undefined ? args[number] : match;
  });
};

/**
 *
 * @param {any} el
 * Transforma cualquie tipo de dato en un string, dependiendo de la entrada del tipo de dato es como va a devolver un string
 * @returns
 */
export const parseToString = (el: any): string => {
  //Si es array
  if (Array.isArray(el)) return "[]!";

  //Si es numero
  if (!Number.isNaN(el)) return `${el}`;

  //Si es un objeto
  if (typeof el === "object") return JSON.stringify(el);

  //Si es null o undefined
  if (el === undefined || el === null) return "";

  //Si es una funcion
  if (typeof el === "function") {
    const args = [];
    if (el(...args) === undefined) return "";
    return parseToString(el(...args));
  }

  //Si la entrada es un string devuelve el mismo string
  return el;
};

/**
 * Busca en un array de arrays un elemento en concreto
 * @param {*} data
 * @param {*} search
 * @returns
 */
export const FEArrayFromArrays = (data: any[], search: any) : any[] => {
  return data.find((el) => {
    const [k, _] = el;
    return k === search;
  });
};

export const stringObjectFormat = (obj: object): object => {
  const keys = Object.keys(obj);

  return obj;
};
