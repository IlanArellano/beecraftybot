import replies from '../../../config/replies';
import { Format } from '../../../utils/common';

export const responseErrorSPwr = {
  estatus: false,
  output: replies.COMMON_ERROR,
};

export const responseErrorEmptySPwr = (value) => {
  return {
    estatus: false,
    output: Format(replies.EMPTY_VALUE_ERROR, value),
  };
};

