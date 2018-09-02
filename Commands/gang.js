exports.run = async (bot, message, args, prefix, Discord) => {

    let embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setImage("https://i.ytimg.com/vi/6B3V-QLX9DY/maxresdefault.jpg")
    message.channel.send(embed)
    
    }