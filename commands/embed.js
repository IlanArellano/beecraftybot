const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "embed",
  description: "embed message",
  args: false,
  execute(message, args) {
    const embed = new MessageEmbed();
    embed.setTitle("Informacion");
    embed.setDescription("Esta es una descripcion");
    message.channel.send(embed);
  },
};
