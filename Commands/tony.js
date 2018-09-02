const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix) => {

let embed = new Discord.RichEmbed()
.setColor("BLUE")
.setImage("https://vignette.wikia.nocookie.net/twaimz/images/1/14/Capture-1.JPG/revision/latest?cb=20160723085939")
message.channel.send(embed)

}