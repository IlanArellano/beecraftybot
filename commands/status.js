const { MessageEmbed } = require("discord.js");
const model = require("../models/embed/statusModel");

module.exports = {
  name: "status",
  desciption: "Mostrara el estatus del jugador",
  args: false,
  execute(message, args) {
    message.channel.send("ss");
  },
};
