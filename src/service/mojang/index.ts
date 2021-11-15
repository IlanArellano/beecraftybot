import axios, { AxiosResponse } from 'axios';
import { endpointSchema } from '../../models/errors/endpoints';
import { ResponseEnpoint, ResponseData } from '../../entity';
const MOJANGAPIMAIN = process.env.MOJANGAPIMAIN ?? "";

export const getUUID = async ({ username }): Promise<ResponseEnpoint> => {
  try {
    const res: AxiosResponse<ResponseData, any> = await axios.get(
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
    return {
      res: undefined,
      error: false
  }
  } catch (error) {
    console.log(error);
    return {
      res: undefined,
      error: true
  }
  }
};