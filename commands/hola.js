const test = require("../controllers/test");

module.exports = {
  name: "hola",
  description: "Este es un mensaje de hola",
  args: false,
  execute(message, args) {
    (async () => console.log(await test()))();
    message.reply("Puto");
  },
};
