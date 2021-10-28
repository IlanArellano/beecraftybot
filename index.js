const fs = require("fs");
const replies = require("./config/replies");
require("dotenv").config();

//Requerimos todas las clases necesarias para el Bot
const { Client, Collection } = require("discord.js");
//Asignamos una nueva instancia para el cliente
const client = new Client();

//Leeremos todos los archivos de la carpeta commands para iterar el arreglo de nuestro directorio
client.commands = new Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

//Declaramos como van a empezar los comandos
const prefix = process.env.PREFIX;

client.on("ready", () => {
  console.log("Bot is connected");
});

//Iteramos todos los comandos y se los inyectamos al cliente
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot || !prefix)
    return;
  const content = message.content.slice(prefix.length).trim().split(/ +/);
  const args = content.slice(1);
  const command = content[0].toLowerCase();
  console.log({ command, args });

  if (!client.commands.has(command)) return;
  try {
    if (!client.commands.get(command).args && args.length > 0) {
      return message.reply(replies.NO_COMMAND_ERROR);
    }
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.log(error);
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
