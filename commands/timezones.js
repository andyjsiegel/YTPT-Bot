const { SlashCommandBuilder } = require('@discordjs/builders')

const { EmbedBuilder, Embed } = require('discord.js')

const moment = require('moment-timezone')
const azTime = 'America/Phoenix'
const chicagoTime = 'America/Chicago'
const easternTime = 'America/Toronto'
const uzbekistanTime = 'Asia/Tashkent'

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timezones')
        .setDescription('See different times for all our colleges'),
    async execute(interaction) {
        const timeZones = new EmbedBuilder()
            .setTitle("Time Zones Embed")
            .setColor("Greyple")
            .setDescription("Timezones for all our colleges")
            .addFields(
                { name: "Arizona Time", value: moment().tz(azTime).format("h:mm a"), inline: true },
                { name: "Central Time", value: moment().tz(chicagoTime).format("h:mm a"), inline: true },
                { name: "Eastern Time", value: moment().tz(easternTime).format("h:mm a"), inline: true },
                { name: "Uzbekistan Time", value: moment().tz(uzbekistanTime).format("h:mm a"), inline: true },
            )
            .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' })
        interaction.reply({ embeds: [timeZones] })
        
    }
}