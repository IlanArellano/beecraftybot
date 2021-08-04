module.exports = {
  name: "mensaje",
  description: "Message",
  args: true,
  execute(message, args) {
    const idUser = message.mentions.users.first();
    if (args.length === 0) {
      return message.channel.send("No hay argumentos");
    }
    if (!idUser) {
      return message.channel.send("No se ha mencionado a ningun usuario");
    }
    if (args[0] === `<@!${idUser.id}>` || args[0] === `<@${idUser.id}>`) {
      return message.channel.send("Wow no lo puedo creer");
    }
    message.channel.send("Nooooo");
  },
};
