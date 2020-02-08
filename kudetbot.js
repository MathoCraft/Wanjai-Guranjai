const { canvas } = require("canvas-constructor");
const { resolve, join } = require("path");
const { get } = require("snekfetch");
const fs = require("fs");
const superagent = require("superagent");
const Discord = require("discord.js");
const config = require("./assets/config.json");
const uptime = require('./assets/uptime.js')
const moment = require('moment')
var client = new Discord.Client();

client.on("ready", () => {
  console.log("KUDET SIAP BERJALAN");
});
//Hallo
client.on("message", msg => {
  if (msg.content === "Hello") {
    msg.channel.send("Hallo Kudeters!");
  }
  if (msg.content === "Alo") {
    msg.channel.send("Hallo Kudeters!!");
  }
  if (msg.content === "Mau tanya dong") {
    msg.channel.send("Silahkan!");
  }
  if (msg.content === "Hallo") {
    msg.channel.send("Hallo Kudeters!!");
  }
  if (msg.content === "Allo") {
    msg.channel.send("Hallo Kudeters!!");
  }
//Tanya Jawab
    if (msg.content === "Allo") {
    msg.channel.send("Hallo Kudeters!!");
  }
    if (msg.content === "Allo") {
    msg.channel.send("Hallo Kudeters!!");
  }
    if (msg.content === "Allo") {
    msg.channel.send("Hallo Kudeters!!");
  }
    if (msg.content === "Allo") {
    msg.channel.send("Hallo Kudeters!!");
  }
    if (msg.content === "Allo") {
    msg.channel.send("Hallo Kudeters!!");
  }
  if (msg.content === `<@${client.user.id}>` || msg.content === `<@!${client.user.id}>` || msg.content === `${config.prefix}helpme`) {
    msg.channel.send(`${msg.author}, Prefix ku: **${config.prefix}**`)
  }
});

client.on('ready', function() {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
      setInterval(async () => {
    const statuslist = [
      `k.help | @${client.user.username}`,
      `k.help | by: MasCreepy`,
      `k.help | At ${moment().utcOffset('+0700').format("HH:mm A")}`,
      `k.help | ${client.guilds.size} Server`,
      `k.help | ${client.channels.size} Channel`,
      `k.help | With ${client.users.size} Users`
    ];
    const random = Math.floor(Math.random() * statuslist.length);
    try {
      await client.user.setPresence({
        game: {
          name: `${statuslist[random]}`,
          type: "STREAMING",
          url: 'https://twitch.tv/MathoCraft'
        },
        status: "Streaming"
      });
    } catch (error) {
      console.error(error);
    }
  }, 2000);
});


client.on("message", async msg => {
  if(msg.author.bot) return null;
  if(msg.channel.type === "dm") return null;
  let prefix = config.prefix
  if(!msg.content.startsWith(prefix)) return null;
  const args = msg.content.slice(prefix.length).trim().split(' ')
  let cmd = args.shift().toLowerCase()
  msg.prefix = prefix
  try {
    let cmdFile = require(`./cmd/${cmd}.js`)
    cmdFile.run(client, msg, args)
  } catch (e) {
    console.log('COMMAND HANDLER ERROR')
  } finally {
    console.log(`${msg.author.username} menggunakan cmd: ${cmd}.js`)
  }
});

client.on("guildMemberAdd", async member => {
  let nama21 = member.user.username;
  let batasnama = nama21.length > 15 ? nama21.substring(0.1) + "..." : nama21;
  async function createCanvas() {
    let imageUrlPhoto = /\?size=2048$/g;
    let image =
      "https://cdn.discordapp.com/attachments/396531045081677844/670882031705522176/images.png";
    let { body: background } = await superagent.get(image);
    let { body: avatar } = await superagent.get(
      member.user.displayAvatarURL.replace(imageUrlPhoto, "?size=128")
    );
    return new canvas(856, 376)
      .setColor("#00f2ff")
      .setTextFont("bold 30px Arial")
      .addImage(background, 0, 0, 856, 376)
      .addText("${batasnama}", 165, 350)
      .addRoundImage(avatar, 110, 50, 256, 256, 128)
      .toBufferAsync();
  }
  let channel = member.guild.channels.get("396525629929160707");
  channel.send("Selamat Datang Bre ${member.user.username}", {
    files: [
      {
        attachment: await createCanvas(),
        name: "MasCreepy Welcome Image.jpg"
      }
    ]
  });
});


client.login(process.env.TOKEN).catch(e => {
  console.log('TOKEN Tidak bisa digunakan!')
})