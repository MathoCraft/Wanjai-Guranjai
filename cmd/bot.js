const Djs = require('discord.js')
let embed = new Djs.RichEmbed()
const { version } = require('../package.json')

module.exports.run = async (client, msg, args) => {
  let opti = args.slice(0).join(' ')
  let optic = opti.toLocaleLowerCase()
  if(!opti) return msg.channel.send(`k.bot info`)
  
  if(optic.match("info")) {
    let wayaw = embed
    .setTitle('BOT INFO')
    .setDescription(`Bot Name: [ ${client.user.username} ]
Bot Discriminator: [ ${client.user.discriminator} ]
Developer: [ <@331720237617774597> ]
Co-Developer: [ <@449594065248583680> ]
Bot Version: [ v. ${version} BETA! ]
Bot ID: [ ${client.user.id} ]
Bot Born: [ Saturday, 28 December 2019 06:49:04 ]`)
    .setThumbnail(client.user.avatarURL)
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter(`Copyright @ 2020 - 2021 || The bot by: MasCreepy`)
    msg.channel.send(wayaw)
  }
}