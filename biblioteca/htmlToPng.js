//  htmlToPng.js
const {
  MessageAttachment
} = require('discord.js')
const nodeHtmlToImage = require('node-html-to-image')

module.exports = async (msg, name, url, precio, variacion, alto, bajo) => {

  const _htmlTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <style>
      body {
        font-family: "Poppins", Arial, Helvetica, sans-serif;
        background: rgb(22, 22, 22);
        color: #fff;
        max-width: 300px;
      }

      .app {
        max-width: 500px;
        padding: 20px;
        display: flex;
        flex-direction: row;
        border-top: 3px solid rgb(16, 180, 209);
        background: rgb(31, 31, 31);
        align-items: center;
      }

      img {
        width: 50px;
        height: 50px;
        margin-right: 20px;
        border-radius: 50%;
        border: 1px solid #fff;
        padding: 5px;
      }
    </style>
  </head>
  <body>
    <div class="app">
      <img src= ${url}/>

      <h4>El precio del ${name} es USD ${precio} <br> Tuvo una variacion de USD ${variacion}<br> El valor mas alto fue ${alto}<br> y el precio mas bajo fue ${bajo}</h4>
    </div>
  </body>
</html>
`

  const images = await nodeHtmlToImage({
    html: _htmlTemplate,
    type: 'jpeg',
    puppeteerArgs: {
      args: ['--no-sandbox','--disable-setuid-sandbox'],
    },
    encoding: 'buffer',
  })


  return msg.channel.send(new MessageAttachment(images, `${name}.jpeg`))
  }