const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix) => {

const embed = new Discord.RichEmbed()
.setColor("BLUE")
.setImage("https://cdn1.thehunt.com/app/public/system/zine_images/9993378/original/3700313d3f887f78c7623553d4308181.jpeg")
message.channel.send(embed);

};