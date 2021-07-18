require("dotenv").config()

const { Client } = require("discord.js")
const client = new Client()

client.login(process.env.DISCORDJS_BOT_TOCKEN)

console.log("BOT is running!")
