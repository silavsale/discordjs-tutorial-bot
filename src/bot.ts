require("dotenv").config()
const { Client } = require("discord.js")
const client = new Client()

client.on("ready", () => {
  console.log(`${client.user.username} has logged in.`)
})

client.on("message", (message: any) => {
  if (message.author.bot) return
  let messageText = message.content
  messageText = messageText.toLowerCase().trim()

  if (messageText.includes("hi") || messageText.includes("hello")) {
    // message.channel.send(
    //   `Hello [${message.author.tag}]  and welcome to DevBandaUa`
    // )
    message.reply(`Hello and welcome to DevBandaUa`)
  }
})

client.login(process.env.DISCORDJS_BOT_TOCKEN)
