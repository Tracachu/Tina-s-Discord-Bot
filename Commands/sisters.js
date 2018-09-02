const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix) => {

const embed = new Discord.RichEmbed()
.setColor("BLUE")
.setImage("https://a.wattpad.com/cover/59607613-256-k413660.jpg")
message.channel.send(embed);

};