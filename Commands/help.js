exports.run = async (bot, message, args, prefix, servers, server, Discord, ytdl) => {

    let embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setTitle("Commands")
    .setDescription("**Fun**\n\ns!pun\ns!bunny\ns!lmgtfy [Query]\n\n**Music**\n\ns!play [Song Name]\ns!skip\ns!pause\ns!resume\ns!nextup\n\n**Moderation**\n\ns!ban [@Mention] [Reason]\ns!kick [@Mention] [Reason]\n\n**Games**\n\ns!fortnite [Username] [Platform | pc/psn/xb1]\ns!overwatch [Username] [Platform | pc/xbl/psn] [Region | global/us/eu/kr/cn]\n\n**Utility**\n\ns!news [Subject]\ns!weather [Location]")
    message.channel.send(embed);
};