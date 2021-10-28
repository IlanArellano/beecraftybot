const client = require("../service/minecraft");
const replies = require("../config/replies");
const { Format } = require("../utils/common");
const getClientIp = require("../service/ip/getClientIp");
const {
  addUserController,
  deleteUserController,
} = require("../controllers/users");

module.exports = {
  name: "register",
  description: "Registra un miembro de discord a la whitelist del servidor",
  args: true,
  execute(message, args) {
    if (args.length === 0)
      return message.reply(
        Format(
          replies.INCOMPLETE_COMMAND,
          process.env.PREFIX,
          "register",
          "tu gamerTag o username de Minecraft",
          `${process.env.PREFIX}register Mario123`
        )
      );
    if (args.length > 1) return message.reply(replies.SYNTAX_ERROR);

    const gt = args[0];
    const defaultIp = "0.0.0.0";

    if (gt.length < 3 || gt.length > 16)
      return message.reply(Format(replies.INVALID_USERNAME, gt));

    client.on("output", async (msg) => {
      //Pierde la conexion con el servidor para ya no emita mas el evento
      await client.close();

      //Evalua si la consola le lanza el mensaje de que el username ya esta registrado en la whitelist
      if (msg === replies.PLAYER_ALREADY_WHITELISTED)
        return message.reply(replies.PLAYER_ALREADY_WHITELISTED_MESSAGE);

      return message.reply(replies.ADDED_TO_WHITELIST_MESSAGE);
    });

    (async () => {
      try {
        const username = message.author.username;
        //Obtiene la Ip publica
        const ip = await getClientIp();

        //Agrega los datos del usuario a la base de datos
        const { estatus, output } = await addUserController({
          username: gt,
          username_discord: username,
          ip: ip ?? defaultIp,
        });

        if (!estatus) return message.reply(output);

        await client.connect();
        client.run(`whitelist add ${gt}`);
      } catch (error) {
        const { estatus, output } = await deleteUserController({
          username: gt,
          desactivate: false,
        });
        console.log(estatus, output);
        return message.reply(replies.SERVER_CONNECTION_ERROR);
      }
    })();
  },
};
