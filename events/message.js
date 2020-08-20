// This file need to be modified to carry out commands! GOOD LUCK

const kick = require("../commands/kick");
const welcome = require("../commands/welcome");
const roll = require("../commands/roll");
const game = require("../commands/game");

// tag user = message.reply('Hey!');
// doesn't tag user = message.channel.send('Hey!');

module.exports = (client, message) => {

  if (message.content === '...')){
        message.reply('...');
  }
  
  /////////////////
  
  else if (message.content.startsWith('...')) {
    message.channel.send('...');
  }
  
};
