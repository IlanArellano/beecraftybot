const client = require("../service/minecraft");

module.exports = {
  name: "exec",
  description: "Ejecutar un comando en el servidor",
  args: true,
  execute(message, args) {
    const cmd = args.join(" ");
    client.on("output", (msg) => {
      message.reply(msg);

      client.close();
    });

    (async () => {
      try {
        await client.connect();
        client.run(cmd);
      } catch (error) {
        console.error(error);
        client.close();
      }
    })();
  },
};
