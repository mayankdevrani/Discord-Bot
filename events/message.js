const kick = require("../commands/kick");
const welcome = require("../commands/welcome");
const roll = require("../commands/roll");

// tag user = message.reply('Hey!');
// doesn't tag user = message.channel.send('Hey!');

module.exports = (client, message) => {

  if (message.content === ('.hi' || '.hello')) {
    message.reply('Hey!');
  }
  else if(message.content === '.roll'){
    return roll(message);
  }
  else if (message.content === '.score') {
    return roll(messageScore);
  }

  /////////////////
  else if (message.content.startsWith('.kick')) {
    return kick(message);
  }
  else if (message.content.startsWith('.welcome')) {
    return welcome(message);
  }
  /////////////////

};
