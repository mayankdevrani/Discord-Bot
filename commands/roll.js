module.exports = message => {
    const member = message.mentions.members.first();

    
    var min = 5;
    var max = -5;
    var num = 0;
    var currentScore = 0;

    var num = Math.floor(Math.random() * (+max + 1 - +min)) + +min;

    if (num == -5) {
        return message.reply('|*----------|  ==> ' + num);
    }
    if (num == -4) {
        return message.reply('|-*---------|  ==> ' + num);
    }
    if (num == -3) {
        return message.reply('|--*--------|  ==> ' + num);
    }
    if (num == -2) {
        return message.reply('|---*-------|  ==> ' + num);
    }
    if (num == -1) {
        return message.reply('|----*------|  ==> ' + num);
    }
    if (num == 0) {
        return message.reply('|-----*-----|  ==> ' + num);
    }
    if (num == 1) {
        return message.reply('|------*----|  ==> ' + num);
    }
    if (num == 2) {
        return message.reply('|-------*---|  ==> ' + num);
    }
    if (num == 3) {
        return message.reply('|--------*--|  ==> ' + num);
    }
    if (num == 4) {
        return message.reply('|---------*-|  ==> ' + num);
    }
    if (num == 5) {
        return message.reply('|----------*|  ==> ' + num);
    }
 
};
