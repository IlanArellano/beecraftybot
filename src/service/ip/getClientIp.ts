import axios, { AxiosResponse } from 'axios';

interface Response {
  ip: string | undefined;
}

/**
 * Obtiene la IP publica del cliente
 * @returns {string} String de la ip del cliente
 */
const getClientIp = async (): Promise<string> => {
  try {
    const res: AxiosResponse<Response, any> = await axios.get(process.env.CLIENT_SERVER_IP);
    if (res && res.data) {
      return res.data.ip;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export default getClientIp;
