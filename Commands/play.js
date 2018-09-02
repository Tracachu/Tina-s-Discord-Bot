const ytdl = require("ytdl-core");
const Discord = require("discord.js");
const APIKEY = "AIzaSyChV72AqgUOWab694WT3zdK6EIbY0EGRuc"; // replace me
const { YTSearcher } = require('ytsearcher');
const ytsearcher = new YTSearcher(APIKEY);



exports.run = async (bot, message, args, prefix, servers, server) => {
  
 if(!message.member.voiceChannel) return message.channel.send(":no_entry_sign: | Please connect to a Voice Channel.");
  
  if(!args[0]) return message.channel.send(":no_entry_sign: | Please provide a YouTube search string after the command.");
  
    

		const QUERY = args.join(" "); 
		ytsearcher.search(QUERY, { type: 'video' })
		.then(async searchResult => {
		
			let result = searchResult.first;
      
  let validate = ytdl.validateURL(result.url); //There will be a ytsearcher here this is just a test
  
  if(!validate) message.channel.send(":no_entry_sign: | Sorry! That URL searched is not valid.");
      
      
      
      server.queue.push(result.url);
  
    let info = await ytdl.getInfo(result.url);
      
      function play(connection, message) {
       //here
        
        server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: 'audioonly'}));
        
        server.queue.shift();
        
        server.dispatcher.on("end", function() {
        if(server.queue[0]) play(connection, message);
          else connection.disconnect();
        });
      }
      
  if(!message.guild.voiceConnection) await message.member.voiceChannel.join().then(function(connection) {
        play(connection, message);
      });
      
  //let connection = await message.member.voiceChannel.join();
  
  //let dispatcher = await connection.playStream(ytdl(result.url, {filter: 'audioonly'}));
  
let embed = new Discord.RichEmbed()
.setColor("BLUE")
.setAuthor(` | Added ${info.title} by ${info.author.name} to the queue`, info.author.avatar)
.setURL(result.url)
.setThumbnail(info.thumbnail_url)
message.channel.send(embed)
      }).catch(err => {
        console.log(err);
        if(err) return message.channel.send(":no_entry_sign: | There was a problem finding that song.");
      });
      };

  

