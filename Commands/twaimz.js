const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix) => {

    let embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setTitle("Twaimz Bad Bish 3")
    .setImage("https://data.whicdn.com/images/145495226/superthumb.jpg?t=1415347642")
    message.channel.send(embed)
    
    }
