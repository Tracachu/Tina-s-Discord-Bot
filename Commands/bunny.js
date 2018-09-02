const Discord = require("discord.js");
const request = require("request");

exports.run = async (bot, message, args, prefix) => {

    let imgs = Math.floor(Math.random() * 80);
    let url = ['https://www.reddit.com/r/Rabbits/.json?sort=rising&t=hour&limit=100'];
    request({
      method: 'GET',
      uri: url[Math.floor(Math.random() * url.length)]
    }, function (err, response, data) {
      if(err) {
        console.log(err, null);
        return;
      }
  
    data = JSON.parse(data);
    var mainObj = data.data.children;
    var urls = {};
  
    for(let i = 0; i < mainObj.length; i++) {
    let url = mainObj[i].data.url;
    urls[i+1] = url;
      }
    const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setImage(urls[imgs])
    message.channel.send({embed});
  
    if(bot.user && message.content === "undefined") {
        message.delete()
    }})

}