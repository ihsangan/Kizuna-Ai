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
    let content = encodeURI(uri);
    let { data } = await axios.get(`https://api.shadeoxide.gq/api/chatbot?message=${content}&name=Kizuna%20Ai&user=${message.author.id}&gender=female`);
    message.channel.send(data.message)
    message.channel.stopTyping();
});
client.login(process.env.TOKEN);
//change if you run in replit or glitch, delete if ou run in VPS
let urls = ["https://your.project.name/"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).catch(() => {});
        })
    }, 60 * 1000);