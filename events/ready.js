module.exports = client => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setActivity("Under Maintenance By 𝓥𝓸𝓲𝓭! Start==> *help", {
    type: "",
    url: "https://www.twitch.tv/example-url"
  });

  client.user.setStatus('online'); //dnd,idle,online,offline

};