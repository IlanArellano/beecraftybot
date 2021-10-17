const client = require("../service/minecraft");
const replies = require("../config/replies");
const { Format } = require("../utils/common");

module.exports = {
  name: "register",
  description: "Registra un miembro de discord a la whitelist del servidor",
  args: true,
  execute(message, args) {
    console.log(message.author.id);

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

    client.on("output", (msg) => {
      const matchMessage = Format(replies.ADDED_TO_WHITELIST, gt);
      const out =
        msg === matchMessage
          ? replies.ADDED_TO_WHITELIST_MESSAGE
          : replies.PLAYER_ALREADY_WHITELISTED_MESSAGE;

      message.reply(out);

      client.close();
    });

    (async () => {
      try {
        await client.connect();
        client.run(`whitelist add ${gt}`);
      } catch (error) {
        console.error(error);
        client.close();
      }
    })();
  },
};
