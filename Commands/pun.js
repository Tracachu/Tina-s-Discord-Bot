var puns = require('puns');

exports.run = async (bot, message, args, prefix, servers, server, Discord, ytdl) => {

    puns.getRandomPun()
    .then(pun => {
      let embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setTitle(pun)
      message.channel.send(embed);
    });

}