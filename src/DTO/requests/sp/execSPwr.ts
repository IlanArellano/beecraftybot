import { getContext } from "../../../service/db";
import { output } from "../../../entity";
import { responseErrorSPwr } from "../../../models/errors/sp";

/**
 * Funcion que ejecuta un Store Procedure en la base de datos añadiendo los parametros asignados.
 * @param {string} name Nombre del Store Procedure
 * @param {array} params Son los parametros del SP que se ejecutará, los parametros deben ser un arreglo con el formato [nombre, valor] en cada elemento
 * @returns {object}
 */
export const execSPwr = async (name: string, params: any[]): Promise<output> => {
  try {
    if (!Array.isArray(params)) return responseErrorSPwr;
    params = params.map((el) => {
      if (typeof el === "string") el = `'${el}'`;
      return el;
    });
    let setParams: string = params.join(",");
    setParams = setParams.slice(0, setParams.length);

    const pool = await getContext();
    const res = await pool.query(`EXEC [dbo].[${name}] ${setParams}`);
    const response = res.recordset[0];
    if (
      !response ||
      (response.estatus === undefined && response.output === undefined)
    )
      return responseErrorSPwr;

    return {
      estatus: response.estatus,
      output: response.output,
    };
  } catch (error) {
    console.log(error);
    return responseErrorSPwr;
  }
};
