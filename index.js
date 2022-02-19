const express = require('express');
const axios = require('axios');
const Discord = require('discord.js');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('OK'));
app.listen(port, () => console.log(`OK`));
const client = new Discord.Client();
client.on("ready", async () => {
    client.user.setPresence({activity: { name: 'youtube.com/aichan_nel', type: 'WATCHING' }, status: 'online'});
    console.log(`Logged in as ${client.user.tag}`);
});
client.on('message', async message => {
    if (message.author.bot) return;
    message.channel.startTyping();
    let uri = message.content;
    let content = encodeURIComponent(uri);
    let { data } = await axios.get(`https://api.affiliateplus.xyz/api/chatbot?message=${content}&botname=Kizuna%20Ai&ownername=Ihsan&user=${message.author.id}`);
    message.channel.stopTyping();
    message.channel.send(data.message);
});
client.login(process.env.TOKEN);
//change if you run in replit or glitch, delete if ou run in VPS
let urls = ["https://aichan.iganss.repl.co/"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).catch(() => {});
        })
    }, 60 * 1000);