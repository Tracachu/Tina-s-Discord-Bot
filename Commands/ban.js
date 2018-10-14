
const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix) => {


    if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.reply("Sorry! you don't have Ban Members permissions to use this command!");
let mention = message.mentions.members.first();
if (!mention)
    return message.reply("Please mention a valid member.");
if (!mention.bannable)
    return message.reply("I can't ban this user! I might not have the right permissions or they might have a higher role than me!");
    let reason = args.slice(1).join(' ');
    if (!reason) reason = "No reason provided for this case.";
await mention.ban(reason)
    .catch(error => message.reply(`Sorry ${message.author} there was an error in the command and couldn't ban ${mention.user.tag} because of : ${error}`));
let embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setTitle(`${mention.user.tag} has been banned.`)
    .setFooter(`${mention.user.tag} Pfft should've known better.`)
    .addField(`Reason:`, reason)
    .setImage("https://i.kym-cdn.com/photos/images/original/001/191/461/1fe.gif")
message.channel.send(embed);

}
