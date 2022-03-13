require("dotenv").config()

const {Client, Intents} = require('discord.js')
const Filter = require("bad-words")

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]})
const filter = new Filter()
filter.removeWords("god");

client.on('ready', ()=> {
    console.log(`Logged in as ${client.user.tag}!`);

    setInterval(async ()=>{
        const spamChannel = client.channels.cache.get(process.env.SPAMCHAN);
        spamChannel.send(`<@${process.env.DURBID}> didnt ask`);

    }, 1000*60*60*5)
});

client.on('messageCreate', async message=> {
    if (message.channel.id === process.env.KCHAN && message.content !== "k."){
        return await message.delete();
    }
    if (filter.isProfane(message.content)){
        try{
            return await message.reply("https://tenor.com/view/captain-america-marvel-avengers-gif-14328153");
        }
        catch (e){
            return;
        }
    }
})


client.login(process.env.TOKEN);

