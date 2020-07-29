const kick = require("../commands/kick");
const welcome = require("../commands/welcome");

// tag user = message.reply('Hey!');
// doesn't tag user = message.channel.send('Hey!');

module.exports = (client, message) => {

  if (message.content === ('$hi'||'$hello')) {
    message.reply('Hey!');
  }
  if(message.content === '$roll'){
    var min = 0;
    var max = 10;
    var num = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
    return message.reply(num);
  }
  else if (message.content.startsWith("$kick")) {
    return kick(message);
  }
  else if (message.content.startsWith("$welcome")) {
    return welcome(message);
  }

};
