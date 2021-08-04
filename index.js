require("dotenv").config();
//Requerimos todas las clases necesarias para el Bot
const { Client, Collection } = require("discord.js");
//Asignamos una nueva instancia para el cliente
const client = new Client();

//Leeremos todos los archivos de la carpeta commands para iterar el arreglo de nuestro directorio
const fs = require("fs");
client.commands = new Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

//Declaramos como van a empezar los comandos
const prefix = process.env.PREFIX;

client.on("ready", () => {
  console.log("Bot is connected");
  /*const channel = client.channels.cache.get("871201435684044846");
  if (!channel) return console.error("El metodo o el canal no existe");
  channel
    .join()
    .then((con) => {
      console.log(con.speaking);
      console.log("succesful");
    })
    .catch(console.log);*/
});

client.on("guildMemberSpeaking", () => {
  console.log("holaa");
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
      return message.reply("Este comando no acepta argumentos");
    }
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.log(error);
    message.reply("Ha ocurrido un error: " + error);
  }
});

client.on("guildMemberSpeaking", (member) => {
  const channel = member.guild.channels.cache;

  console.log(channel);
});

client.login(process.env.TOKEN);
