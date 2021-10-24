const axios = require("axios");

/**
 * Obtiene la IP publica del cliente
 * @returns {string} String de la ip del cliente
 */
module.exports = async () => {
  try {
    const res = await axios.default.get(process.env.CLIENT_SERVER_IP);
    if (res && res.data) {
      return res.data.ip;
    }
    return null;
  } catch (error) {
    return null;
  }
};
