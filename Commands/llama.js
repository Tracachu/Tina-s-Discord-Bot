const Discord = require("discord.js");

const llamas = [
    "https://coubsecure-s.akamaihd.net/get/b161/p/coub/simple/cw_timeline_pic/dc290215df3/655f531789ea1279b863c/big_1520567216_image.jpg",
    "https://i.ytimg.com/vi/ke9ed0Lc3s8/maxresdefault.jpg",
    "https://coubsecure-s.akamaihd.net/get/b96/p/coub/simple/cw_image/824cfa0fdc7/e0e510ab0d8adbe366cfe/med_1523275796_00025.jpg",
    "https://data.whicdn.com/images/171706083/large.jpg"
]

exports.run = async (bot, message, args, prefix) => {

    const random = llama[Math.floor(Math.random() * llamas.length)];

let embed = new Discord.RichEmbed()
.setColor("BLUE")
.setImage(random)
message.channel.send(embed)

};