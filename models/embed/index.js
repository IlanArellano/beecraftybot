const { MessageEmbed } = require("discord.js");
const { parseToString } = require("../../utils/common");

function setEmbed(model) {
  if (typeof model !== "object") model = {};
  const embed = new MessageEmbed();
  if(model.color) embed.setColor(parseToString(model.color));
  if(model.title) embed.setTitle(parseToString(model.title));
  if(model.url)  embed.setURL(parseToString(model.url));
  if(model.description) embed.setDescription(parseToString(model.description));
  if(model.thumbnail?.url) embed.setThumbnail(parseToString(model.thumbnail?.url));
  if(model.fields) embed.addFields(...model.fields);
  if(model.image?.url) embed.setImage(parseToString(model.image?.url));
  if(model.footer?.text && model.footer?.icon_url) embed.setFooter(
    parseToString(model.footer?.text),
    parseToString(model.footer?.icon_url)
  );

  return embed;
}

module.exports = {
  setEmbed,
};
