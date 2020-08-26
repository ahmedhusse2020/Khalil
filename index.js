// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
const { Client, RichEmbed } = require('discord.js');
require("events").EventEmitter.defaultMaxListeners = 200;


client.on('ready',async () => {
console.log("Starting..");
let g = client.guilds.get("594532561364058142"); // id server
let c = g.channels.get("594532561875632161");// id channel
if(c.type === 'voice') {
c.join();
setInterval(() => {
if(g.me.voiceChannel && g.me.voiceChannelID !== c.id || !g.me.voiceChannel) c.join();
}, 1);
} else {
console.log('Failed To Join: \n The Channel Type isn "Listening."')
}
});



client.login(process.env.TOKEN);
