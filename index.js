require("dotenv").config()

const {Client, Intents} = require('discord.js')
const Filter = require("bad-words")

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]})
const filter = new Filter()

client.on('ready', ()=> {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message=> {
    if (message.channel.id === process.env.KCHAN && message.content !== "k."){
        return await message.delete();
    }
    if (filter.isProfane(message.content)){
        await message.reply("https://tenor.com/view/captain-america-marvel-avengers-gif-14328153");
    }
})


client.login(process.env.TOKEN);

