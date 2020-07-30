module.exports = client => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setActivity("Under Maintenance By Void", {
    type: "",
    url: "https://www.twitch.tv/example-url"
  });

  client.user.setStatus('dnd');
    
};