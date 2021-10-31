const { execSPwr } = require("../requests/sp");
const { responseErrorEmptySPwr } = require("../../models/errors/sp");
const { FEArrayFromArrays } = require("../../utils/common");

module.exports = async (data) => {
  const valueEmpty = Object.values(data).find(
    (el) => el === "" || el === undefined || el === null
  );
  if (valueEmpty) return responseErrorEmptySPwr(valueEmpty);

  let params = [];
  params[0] = data.username;
  params[1] = data.username_discord;
  params[2] = data.ip;
  params[3] = data.id_username_discord;

  return await execSPwr("ADD_USER_REGISTER_AND_WHITELIST", params);
};
