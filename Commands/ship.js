const Discord = require("discord.js");

let levelOfLove = [
    "100% █████ Perfect",
    "80% ████ Awesome",
    "50% ███ Great",
    "30% ██ Ok",
    "5% █ EWW"
]

exports.run = async (bot, message, args, prefix) => {

    const random = levelOfLove[Math.floor(Math.random() * levelOfLove.length)];

    let firstUser = args[0];
    if(!firstUser) return message.channel.send(":no_entry_sign: | Please select 2 users s!ship [User 1] [User 2].");
    let shipUser = args[1];
    if(!shipUser) return message.channel.send(":no_entry_sign: | Please select 2 users s!ship [User 1] [User 2].");

    let embed = new Discord.RichEmbed()
    .setTitle(`Love Rate: ${random}`)
    .setColor("BLUE")
    message.channel.send(embed);
    

}