const kick = require("../commands/kick");
const welcome = require("../commands/welcome");
const roll = require("../commands/roll");
const game = require("../commands/game");

// tag user = message.reply('Hey!');
// doesn't tag user = message.channel.send('Hey!');

module.exports = (client, message) => {

  if (['.hi', '.hello', '.hey'].includes(message.content)){
        message.reply('Hey!');
  }
  else if (message.content === '*help') {
    message.reply("||Fuck You!||");
  }
  else if (message.content === '.server') {
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  }
  else if (message.content === '.whoami') {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
  }
  else if(message.content === '.roll') {
    return roll(message);
  } 
  else if (message.content === '.whoareyou') {
    message.reply(`It's Me, ${client.user.username}`);
  }
  /////////////////
  else if (message.content === '.botname') {
    client.user.setUsername('Bit-Bot')
      .then(user => message.channel.send(`Bot's new username is ${user.username}`))
      .catch(error => message.reply(`Sorry, an error occured.`));
  }
  else if (message.content.startsWith('.kick')) {
    return kick(message);
  }
  else if (message.content.startsWith('.welcome')) {
    return welcome(message);
  }
  /////////////////
    else if (message.content === '.test') {
    return game(message);
  } else if (message.content === '.testt') {
    return game(message);
  } else if (message.content === '.start') {
    return game(message);
  } else if (message.content === '.stop') {
    return game(message);
  }
  /////////////////
  else if (message.content.startsWith('.')) {
    message.channel.send('What? :-|');
  }
};
