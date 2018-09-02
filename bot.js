const Discord = require("discord.js");
const ytdl = require("ytdl-core");

var servers = [];

let bot = new Discord.Client()

let prefix = "s!";

bot.on("ready", () => {

    console.log("Ready!");
    bot.user.setActivity("s!help | Playing with my Sylveon");

});

bot.on("message", message => {

    if(!servers[message.guild.id]) servers[message.guild.id] = {
        
        queue: []
        
      };

      var server = servers[message.guild.id];

    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();

    if(message.author.bot) return;     
    if(!message.content.startsWith(prefix)) return;

    try {

        let commandFile = require(`./Commands/${cmd}.js`);
        commandFile.run(bot, message, args, prefix, servers, server, Discord, ytdl);

    } catch (e) {
        console.log(e.stack); // Use this if thereis a error you cant solve
        //return
    }

});

bot.login(process.env.BOT_TOKEN);
