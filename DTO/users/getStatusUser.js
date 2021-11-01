const { execSPwr } = require("../requests/sp");
const { responseErrorEmptySPwr } = require("../../models/errors/sp");

module.exports = async (data) => {
  const valueEmpty = Object.values(data).find(
    (el) => el === undefined || el === null || el === ""
  );
  if (valueEmpty) return responseErrorEmptySPwr(valueEmpty);

  let params = [];
  params[0] = data.id_username_discord;

  return await execSPwr("GET_USER_INFO", params);
};
