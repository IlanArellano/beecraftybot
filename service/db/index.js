const sql = require("mssql");
const options = require("./config");

/**
 * Establece la conexión a la base de datos para devolver un pool de consultas
 * @returns {sql} POOL
 */
const getContext = async () => {
  try {
    const pool = await sql.connect(options);
    return pool;
  } catch (error) {
    return error;
  }
};

module.exports = {
  sql,
  getContext,
};
