const axios = require("axios");
const { endpointSchema } = require("../../models/errors/endpoints");
const MOJANGAPIMAIN = process.env.MOJANGAPIMAIN ?? "";

const getUUID = async ({ username }) => {
  try {
    const res = await axios.default.get(
      `${MOJANGAPIMAIN}/users/profiles/minecraft/${username}`
    );
    if (res.status === 200 && res.data) {
      return {
        res: res.data,
        error: false,
      };
    } else if (res.status === 204) {
        return {
            res: null,
            error: false
        }
    }
    return endpointSchema({ res: undefined, error: true });
  } catch (error) {
    console.log(error);
    return endpointSchema({ res: undefined, error: true });
  }
};

module.exports = {
  getUUID,
};
