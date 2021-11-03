const { getUUID } = require("../../service/mojang");
const AvatarURL = process.env.MINECRAFT_AVATAR_HEAD_HOST ?? "";

const getMinecraftUserController = async ({ username }) => {
  const { res, error } = await getUUID({ username });
  let response = res;
  if (!error && res) {
    response = {
      ...res,
      url: `${AvatarURL}/${res.id}`,
    };
  }
  return response;
};

module.exports = {
  getMinecraftUserController,
};
