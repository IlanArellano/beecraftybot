const getContext = require("../../service/db");
const replies = require("../../config/replies");

module.exports = async ({ username, desactivate = false }) => {
  try {
    const pool = await getContext();
    const getActive = desactivate ? 1 : 0;
    const res =
      await pool.query`EXEC [dbo].[DELETE_USER] ${username}, ${getActive}`;
    const response = res.recordset[0];
    return {
      estatus: response.estatus ?? false,
      output: response.msg ?? replies.COMMON_ERROR,
    };
  } catch (error) {
    return {
      estatus: false,
      output: `${replies.COMMON_ERROR}: ${error}`,
    };
  }
};
