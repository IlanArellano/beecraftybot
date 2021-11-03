const model = require("../models/embed/statusModel");
const { setEmbed } = require("../models/embed");
const { getStatusUserController } = require("../controllers/users");
const { getMinecraftUserController } = require("../controllers/minecraft");
const replies = require("../config/replies");

module.exports = {
  name: "status",
  desciption: "Mostrara el estatus del jugador",
  args: false,
  execute(message, args) {
    (async function () {
      const id_username_discord = message.author.id;
      const { estatus, output } = await getStatusUserController({
        id_username_discord,
      });
      if (!estatus || !output) return message.reply(replies.USER_NO_REGISTERED);
      const split = output.split("|");
      const info = {
        name: split[0],
        estatus: split[1] === "1" ? "Activo" : "No activo",
        rango: split[2],
      };

      const minecraftInfo = await getMinecraftUserController({
        username: "LordV20",
      });

      console.log(info);
      console.log(minecraftInfo);
      model.thumbnail.url = minecraftInfo?.url ?? model?.thumbnail.url;
      const embed = setEmbed(model);

      message.channel.send({ embeds: [embed] });
    })();
  },
};
