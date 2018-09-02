const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix) => {

const embed = new Discord.RichEmbed()
.setColor("BLUE")
.setImage("https://cdn1.thehunt.com/app/public/system/zine_images/9854152/original/3faa011c0713475137f58f34f550a533.jpeg")
message.channel.send(embed);

};