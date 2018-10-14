
    async function purge() {
        message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.
    
        // We want to check if the argument is a number
        if (isNaN(args[0])) {
            // Sends a message to the channel.
            message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>'); //\n means new line.
            // Cancels out of the script, so the rest doesn't run.
            return;
        }
    
        const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
        console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting
    
        // Deleting the messages
        message.channel.bulkDelete(fetched)
            .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.
    
    }
    
    // We want to make sure we call the function whenever the purge command is run.
    purge(); // Make sure this is inside the if(msg.startsWith)
