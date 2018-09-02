let ytdl = require("ytdl-core");
let Discord = require("discord.js");

exports.run = async (bot, message, args, prefix, servers, server) => {

    if(!server.queue[0]) return message.channel.send(":no_entry_sign: | There is no songs in the queue. Other than the playing one.");

    let info = await ytdl.getInfo(`${server.queue[0]}`)

    let embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setTitle(`Next up: ${info.title} by ${info.author.name}`)
    .setURL(info.video_url)
    .setThumbnail(info.thumbnail_url)
    message.channel.send(embed)
}