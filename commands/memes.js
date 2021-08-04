const { MessageAttachment } = require("discord.js");

module.exports = {
  name: "memes",
  description: "un command de memes",
  args: false,
  execute(message, args) {
    attachment = new MessageAttachment(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDFFi8xZQpVW3GJRv2geK9u54vbbGlXYn4IA&usqp=CAU"
    );
    message.channel.send(attachment);
  },
};
