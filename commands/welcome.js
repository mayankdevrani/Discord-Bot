module.exports = message => {
  const member = message.mentions.members.first();

  if (!member) {
    return message.reply(
      `Who are you trying to Welcome? You must mention a user.`
    );
  }
  else{
      message.reply(`${member.user.tag}, WELCOME to the Club!`)
  }
};
