// Basic stuff
const Discord = require("discord.js");
const bot = new Discord.Client()
const profanities = require("profanities");

// Login
bot.login(process.env.BOT_TOKEN);

// Listening
bot.on("message", message =>
{

    // Variables
    var sender = message.author;
    var msg = message.content.toUpperCase();
    var prefix = "!";

    if(sender.id === "423144674199470083")
    {
        return;
    }
    // Profanity filter test
    for(x = 0; x < profanities.length; x++)
    {
        if(message.content.toUpperCase().includes(profanities[x].toUpperCase()))
      {
          const embed =  new Discord.RichEmbed()
          .setTitle("Warning!!!")
          .setAuthor("Profanity Bot")
          .setColor(16711680)
          .addField(`@${message.author.username} said something suspicious in: #${message.channel.name}`, `The message was: ${message.content}`)
          .setTimestamp()
          bot.channels.get("423128277327020033").send({embed});
          return;
      }
    }
});
