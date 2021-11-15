import client from '../service/minecraft';
import replies from '../config/replies';
import { Format } from '../utils/common';
import getClientIp from '../service/ip/getClientIp';
import { addUserController, deleteUserController } from '../controllers/users';
import { Awaitable, Message } from 'discord.js';

export default {
  name: "register",
  description: "Registra un miembro de discord a la whitelist del servidor",
  args: true,
  execute(message: Message, args: string[]): Awaitable<void> {
    if (args.length === 0) {
      message.reply(
        Format(
          replies.INCOMPLETE_COMMAND,
          process.env.PREFIX,
          "register",
          "tu gamerTag o username de Minecraft",
          `${process.env.PREFIX}register Mario123`
        )
      );
      return;
    }
    
    if (args.length > 1) {
      message.reply(replies.SYNTAX_ERROR);
      return;
    }

    const gt = args[0];
    const defaultIp = "0.0.0.0";

    if (gt.length < 3 || gt.length > 16) {
      message.reply(Format(replies.INVALID_USERNAME, gt));
      return;
    }

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
        const id_username_discord = message.author.id ?? "";
        //Obtiene la Ip publica
        const ip = await getClientIp();

        //Agrega los datos del usuario a la base de datos
        const { estatus, output } = await addUserController({
          username: gt,
          username_discord: username,
          ip: ip ?? defaultIp,
          id_username_discord,
        });

        if (!estatus) return message.reply(output);

        await client.connect();
        await client.run(`whitelist add ${gt}`);
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
