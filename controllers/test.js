const getContext = require("../service/db");

module.exports = async () => {
  try {
    const pool = await getContext();

    const res = await pool.query`SELECT * FROM usuarios`;

    return res;
  } catch (error) {
    return { error };
  }
};
