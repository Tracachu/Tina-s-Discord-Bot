

exports.run = async (bot, message, args, prefix, servers, server) => {

await server.dispatcher.resume();

message.channel.send(":arrow_forward: | Resumed the current song.");

}