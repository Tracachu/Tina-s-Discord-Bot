


exports.run = async (bot, message, args, prefix, servers, server) => {


  await server.dispatcher.pause();

  message.channel.send(":pause_button: | Paused the current song.");

}