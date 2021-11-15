import { execSPwr } from '../requests/sp';
import { output, getStatusUserParams } from '../../entity';
import { responseErrorEmptySPwr } from "../../models/errors/sp";

export const getStatusUser = async (data: getStatusUserParams): Promise<output> => {
  const valueEmpty = Object.values(data).find(
    (el) => el === undefined || el === null || el === ""
  );
  if (valueEmpty) return responseErrorEmptySPwr(valueEmpty);

  let params = [];
  params[0] = data.id_username_discord;

  return await execSPwr("GET_USER_INFO", params);
};
