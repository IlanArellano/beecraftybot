import { Awaitable, Message } from 'discord.js';
import model from '../models/embed/statusModel';
import { setEmbed } from '../models/embed';
import { getStatusUserController } from '../controllers/users';
import { getMinecraftUserController } from '../controllers/minecraft';
import replies from '../config/replies';
import { Format } from '../utils/common';

export default {
  name: "status",
  desciption: "Mostrara el estatus del jugador",
  args: false,
  execute(message: Message, args: string[]): Awaitable<void> {
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
        username: info.name,
      });

      console.log(info);
      console.log(minecraftInfo);
      model.description = Format(model.description, info.name);
      model.thumbnail.url = minecraftInfo?.url;
      model.fields[0].value = minecraftInfo.id ? "Java" : "Bedrock";
      model.fields[1].value = info.rango ?? "Miembro";
      model.footer.text = Format(model.footer.text, info.estatus, new Date().toISOString());
      delete model.image;
      const embed = setEmbed(model);

      message.channel.send({ embeds: [embed] });
    })();
  },
};
