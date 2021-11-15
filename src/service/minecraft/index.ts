require("dotenv").config();
import * as util from 'minecraft-server-util';

const client = new util.RCON(process.env.SERVER_ID, {
  port: Number(process.env.SERVER_PORT),
  enableSRV: true,
  timeout: 5000,
  password: process.env.RCON_PASSWORD,
}); // These are the default options

export default client;
