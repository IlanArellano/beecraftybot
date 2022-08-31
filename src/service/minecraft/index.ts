require("dotenv").config();
import * as util from "minecraft-server-util";

const client = new util.RCON("45.86.66.74", {
  port: Number("25701"),
  enableSRV: true,
  timeout: 5000,
  password: "xcfxzc",
}); // These are the default options

export default client;
