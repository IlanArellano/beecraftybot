import { getUUID } from '../../service/mojang';
import { UUIDData } from '../../entity';
const AvatarURL = process.env.MINECRAFT_AVATAR_HEAD_HOST ?? "";

const STEVEUUID = '8667ba71b85a4004af54457a9734eed7';

export const getMinecraftUserController = async ({ username }): Promise<UUIDData> => {
  const { res, error } = await getUUID({ username });
  let response = {
    ...res,
    error,
    url: null
  };
  if (!error && res !== undefined) {
    response = {
      ...res,
      error,
      url: `${AvatarURL}/${res?.id ?? STEVEUUID}`,
    };
  }
  return response;
};
