import { Message } from 'discord.js';

const { query } = require("../service/minecraft/query");
export default {
  name: "query",
  description: "Ejecutar un comando en el servidor",
  args: false,
  execute(message: Message, args: string[]) {
    console.log(message);
    (async () => {
      console.log(await query());
    })();
  },
};
