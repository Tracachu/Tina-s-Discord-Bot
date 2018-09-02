const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('0be0b411716b4948bd5d71c6336173b0');
const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix) => {

    newsapi.v2.topHeadlines({
        q: args.join(" "),
        language: 'en',
        sources: 'bbc-news,the-verge,mirror,google-news-uk,the-guardian-au,the-guardian-uk,cnn'
      }).then(response => {
        let embed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setTitle(response.articles[0].title)
        .setURL(response.articles[0].url)
        .setImage(response.articles[0].urlToImage)
        .addField("Article by:", response.articles[0].author)
        .addField("Published at:", response.articles[0].publishedAt)
        .setDescription(response.articles[0].description)
        message.channel.send(embed)
      }).catch(err => {
          if(err) return message.channel.send(":no_entry_sign: | Sorry! i couldn\'t find a source.");
      })

}