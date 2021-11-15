import sql, { ConnectionPool } from 'mssql';
import options from './config';

/**
 * Establece la conexión a la base de datos para devolver un pool de consultas
 * @returns {sql} POOL
 */
export const getContext = async (): Promise<ConnectionPool> => {
  try {
    const pool = await sql.connect(options);
    return pool;
  } catch (error) {
    return error;
  }
};
