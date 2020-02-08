const Discord = require('discord.js');

module.exports.run = async (client, msg, args) => {
  msg.delete()
  let say = args.slice(0).join(' ')
  if(!say) return msg.channel.send('MASUKAN KATA"')
  msg.channel.send(say)
}