require("dotenv").config();
import * as util from 'minecraft-server-util';

export const query = async (): Promise<any> => {
  try {
    const res = await util.queryFull(process.env.SERVER_ID, {
      port: Number(process.env.SERVER_QUERY_PORT),
    });
    return res;
  } catch (error) {
    return error;
  }
};
