const overwatch = require('overwatch-api');

exports.run = async (bot, message, args, prefix, servers, server, Discord, ytdl) => {

    const platform = args[1];
    if(!platform) return message.channel.send(":no_entry_sign: | Please provide a platform s!overwatch [Username] [Platform | pc/xbl/psn] [Region | global/us/eu/kr/cn]");
    const region = args[2];
    if(!region) return message.channel.send(":no_entry_sign: | Please provide a region s!overwatch [Username] [Platform | pc/xbl/psn] [Region | global/us/eu/kr/cn]");
    const tag = args[0];
    if(!tag) return message.channel.send(":no_entry_sign: | Please provide a Username s!overwatch [Username] [Platform | pc/xbl/psn] [Region | global/us/eu/kr/cn]");


    overwatch.getProfile(platform, region, tag, (err, json) => {
        if (err) console.error(err);
        else console.log(json);
        message.channel.send(":warning: | If stats are Undefined or NaN is because their account is private!");
        let embed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setAuthor(` | Search results for: ${json.username}`, json.portrait)
        .addField("Private:", json.private)
        .addField("Level:", json.level)
        .addField(`SR:`, json.competitive.rank)
        .addField(`Endorsement Level:`, json.endorsement.level)
        .setThumbnail(json.competitive.rank_img)
        message.channel.send(embed);
      });
};