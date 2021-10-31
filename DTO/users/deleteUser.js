const { execSPwr } = require("../requests/sp");
const { responseErrorEmptySPwr } = require("../../models/errors/sp");

module.exports = async (data) => {
  const valueEmpty = Object.values(data).find(
    (el) => el === "" || el === undefined || el === null
  );
  if (valueEmpty) return responseErrorEmptySPwr(valueEmpty);

  let params = [];
  params[0] = data.username;
  params[1] = data.desactivate;

  return await execSPwr("DELETE_USER", params);
};
