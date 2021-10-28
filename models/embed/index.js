const { MessageEmbed } = require('discord.js');
const { parseToString } = require('../../utils/common');


function setEmbed(model) {
    if(typeof model !== 'object') {
        model = {}
        setEmbed(model)
    }

    return new MessageEmbed()
    .setColor(parseToString(model.color))
    .setTitle(parseToString(model.title))
    .setDescription(parseToString(model.description))
    .setThumbnail(parseToString(model.thumbnail?.url))
    .addFields(...model.fields)
    .setImage(parseToString(model.image?.url))
    .setFooter(parseToString(model.footer?.text), parseToString(model.footer?.icon_url));
}


module.exports = {
    setEmbed
}