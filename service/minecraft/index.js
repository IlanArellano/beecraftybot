require("dotenv").config();
const util = require("minecraft-server-util");

const client = new util.RCON(process.env.SERVER_ID, {
  port: Number(process.env.SERVER_PORT),
  enableSRV: true,
  timeout: 5000,
  password: process.env.RCON_PASSWORD,
}); // These are the default options

module.exports = client;
