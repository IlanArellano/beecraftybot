const { getUUID } = require("../../service/mojang");
const AvatarURL = process.env.MINECRAFT_AVATAR_HEAD_HOST ?? "";

const STEVEUUID = '8667ba71b85a4004af54457a9734eed7';

const getMinecraftUserController = async ({ username }) => {
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

module.exports = {
  getMinecraftUserController,
};
