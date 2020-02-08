const Discord = require('discord.js');

module.exports.run = async (client, msg, args) => {
  let idMatho = "449594065248583680"
  let idCreepy = "331720237617774597"
  if(msg.author.id !== idCreepy && msg.author.id !== idMatho) return msg.channel.send('Lu bukan developer bot ini cok!').then(msg => msg.delete(5000))
  msg.channel.send('Restart berhasil!').then(() => {
    process.exit(1);
  })
}