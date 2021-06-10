//imports
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json')
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

const msjatch = require('../biblioteca/htmlToPng')

//variables
var re = /!crypto/gi;
var coma = /,/g

client.login(config.token)

client.on('message', async message => {
    if (!message.guild) return;
    const author = message.author.username
    if (message.content === 'ping') {
        message.reply('${author} pong')
    }

    if (message.content.includes("!crypto") === true) {
        coins = message.content
        var newstr = coins.replace(re, "");
        var n2 = newstr.split(",")
        n2.forEach(async function (v) {
            let data3 = await CoinGeckoClient.coins.markets({
                vs_currency: 'usd',
                ids: [`${v}`, ]
            });
            //message.reply(`usd $ ${data3.data[0].current_price}`)
            if (message, data3.data[0].name !== '') {
                msjatch(await message, data3.data[0].name, data3.data[0].image, data3.data[0].current_price, data3.data[0].price_change_24h, data3.data[0].high_24h, data3.data[0].low_24h)
            }
        })
    }

    if (message.content.includes("!cripto list") === true) {
        let data = await CoinGeckoClient.coins.list();
        if (data !== null) {
            data.data.forEach(function (v){
                console.log(data.data[v].id)
            })
            console.log(data)
        }
    }
})

