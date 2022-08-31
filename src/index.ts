import * as fs from "fs";
import * as path from "path";
import replies from "./config/replies";
import { Awaitable, Client, Collection, Intents, Message } from "discord.js";
import { commandsEntity } from "./entity";
require("dotenv").config();

interface Entity extends Client {
  commands?: Collection<any, any>;
}

//Asignamos una nueva instancia para el cliente
const client: Entity = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

//Leeremos todos los archivos de la carpeta commands para iterar el arreglo de nuestro directorio
client.commands = new Collection();
const commandFiles = fs
  .readdirSync(path.join(__dirname, "/commands"))
  .filter((file) => file.endsWith(".js"));

//Declaramos como van a empezar los comandos
const prefix = process.env.PREFIX;

client.on("ready", () => {
  console.log("Bot is connected");
});

let command: Promise<commandsEntity>;
//Iteramos todos los comandos y se los inyectamos al cliente
(async () => {
  for (const file of commandFiles) {
    command = await import(`./commands/${file}`);
    client.commands.set((await command).name, command);
  }
})();

client.on("messageCreate", (message: Message): Awaitable<void> => {
  if (!message.content.startsWith(prefix) || message.author.bot || !prefix)
    return;
  const content: string[] = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);
  const args: string[] = content.slice(1);
  const command: string = content[0].toLowerCase();
  console.log({ command, args });

  if (!client.commands.has(command)) return;
  try {
    if (!client.commands.get(command).args && args.length > 0) {
      message.reply(replies.NO_COMMAND_ERROR);
      return;
    }
    client.commands.get(command).execute(message, args);
  } catch (error) {
    message.reply(`${replies.COMMON_ERROR}: ${error}`);
  }
});

client.on("guildMemberRemove", (member) => {
  console.log(member);
});

client.on("guildMemberSpeaking", (member) => {
  const channel = member.guild.channels.cache;

  console.log(channel);
});

client.login(process.env.TOKEN);
