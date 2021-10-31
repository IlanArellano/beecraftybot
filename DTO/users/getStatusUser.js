const getContext = require("../../service/db");
const replies = require("../../config/replies");

module.exports = async ({ id_username_discord, username }) => {
  const pool = await getContext();
  try {
    const res =
      await pool.query`EXEC [dbo].[GET_USER_INFO] ${id_username_discord}, ${username}`;
    const response = res.recordset[0];
    return {
      estatus: response.estatus ?? false,
      output: response.msg ?? replies.COMMON_ERROR,
    };
  } catch (error) {
    return {
      estatus: false,
      output: replies.COMMON_ERROR,
    };
  } finally {
    pool.close();
  }
};
