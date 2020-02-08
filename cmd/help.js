const Djs = require('discord.js')
let embed = new Djs.RichEmbed()

module.exports.run = async (client, msg, args) => {
  let uwau = embed//uwau itu cuma nama asal ae.. sebenerny itu bisa dikasi nama terserah
  .setTitle('Help Command\nI Have 4 Commands!')
  .addField('『Core』', `\`Help\`, \`Bot\``)
  .addField('『Moderation』', `\`Ban\`, \`Kick\`, \`Warn\``)
  .addField('『Developer』', `\`Restart\``)//yg berbau security
  .addField('『Utils』', `\`Say\``)
  .setThumbnail(client.user.avatarURL)
  .setTimestamp()
  .setFooter('By: MasCreepy')
  .setColor('BLUE')
  msg.channel.send(uwau)
}//ohh