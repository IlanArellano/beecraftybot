const model = require("../models/embed/statusModel");
const {setEmbed} = require('../models/embed');

module.exports = {
  name: "status",
  desciption: "Mostrara el estatus del jugador",
  args: false,
  execute(message, args) {

    const embed = setEmbed(model);

    message.channel.send({ embeds: [embed]});
  },
};
