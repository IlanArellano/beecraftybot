const getContext = require("../../service/db");
const replies = require("../../config/replies");

module.exports = async ({ username, username_discord, ip }) => {
  try {
    const pool = await getContext();
    const res =
      await pool.query`EXEC [dbo].[ADD_USER_REGISTER_AND_WHITELIST] ${username}, ${username_discord}, ${ip}`;
    const response = res.recordset[0];
    console.log(response);
    return {
      estatus: response.estatus ?? false,
      output: response.msgError ?? replies.COMMON_ERROR,
    };
  } catch (error) {
    return {
      estatus: false,
      output: `${replies.COMMON_ERROR}: ${error}`,
    };
  }
};
