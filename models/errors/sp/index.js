const replies = require("../../../config/replies");
const { Format } = require("../../../utils/common");

const responseErrorSPwr = {
  estatus: false,
  output: replies.COMMON_ERROR,
};

const responseErrorEmptySPwr = (value) => {
  return {
    estatus: false,
    output: Format(replies.EMPTY_VALUE_ERROR, value),
  };
};

module.exports = {
  responseErrorSPwr,
  responseErrorEmptySPwr,
};
