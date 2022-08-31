import * as fs from "fs";
import * as path from "path";

const replies: string = fs.readFileSync(path.join(__dirname, "/message.json"), {
  encoding: "utf-8",
});

export default JSON.parse(replies);
