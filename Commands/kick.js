const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix) => {

if (!message.member.hasPermission("KICK_MEMBERS"))
return message.reply("Sorry! you don't have Kick Members permission to use this command!");
let mention = message.mentions.members.first() || message.guild.members.get(args[0]);
if (!mention)
return message.reply("Please mention a valid member.");
if (!mention.kickable)
return message.reply("I can't kick this user! I might not have the right permissions or they might have a higher role than me, why not check?");
let reason = args.slice(1).join(' ');
if (!reason) reason = "No reason had been provided for this case.";
await mention.kick(reason)
.catch(error => message.reply(`Sorry ${message.author} there was an error in the command and couldn't kick ${mention.member.tag} because of : ${error}`));
let embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setTitle(`${mention.user.tag} has been Kicked.`)
    .setFooter(`${mention.user.tag} Pfft should've known better.`)
    .addField(`Reason:`, reason)
    .setImage("https://i.kym-cdn.com/photos/images/original/001/200/756/08b.gif")
message.channel.send(embed);

}
