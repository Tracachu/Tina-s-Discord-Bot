const encode = require("strict-uri-encode");

exports.run = async (bot, message, args, prefix) => { 

    const textQuery = args.join(" ");
    const query = encode(args.join(" "));
    const url = `https://lmgtfy.com/?q=${query}`;

    if (!query) return message.channel.send(`:no_entry_sign: | Please enter a query. For example, \`${prefix}lmgtfy How to make chocolate\`.`);
    else message.channel.send(`:white_check_mark: | Searched: ${textQuery}\n**<${url}>**`);

    }