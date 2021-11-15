import { MessageEmbed } from 'discord.js';
import { parseToString } from '../../utils/common';
import colors from '../general/colors';
import { EmbedModel } from '../../entity';

export function setEmbed(model: EmbedModel): MessageEmbed {
  model.color = colors[Math.floor(Math.random() * colors.length)]
  const embed = new MessageEmbed();
  embed.setColor(model.color);
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
};
