import { execSPwr } from "../requests/sp";
import { output, deleteUserParams } from '../../entity';
import { responseErrorEmptySPwr } from "../../models/errors/sp";


export const deleteUser = async(data: deleteUserParams): Promise<output> => {
  const valueEmpty = Object.values(data).find(
    (el) => el === "" || el === undefined || el === null
  );
  if (valueEmpty) return responseErrorEmptySPwr(valueEmpty);

  let params = [];
  params[0] = data.username;
  params[1] = data.desactivate;

  return await execSPwr("DELETE_USER", params);
};
