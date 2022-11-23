// https://luminabot.xyz/api/json/weather?location=Falls%20Church%20City&degreetype=F

const { Client, SlashCommandBuilder, ChatInputCommandInteraction, PermissionsBitField, EmbedBuilder } = require('discord.js');
const fetch = (...args) =>
	import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = {
    data: new SlashCommandBuilder()
    .setName('weather')
    .setDescription('Get the weather for Falls Church City!')
    .addStringOption(option =>
		option.setName('location')
			.setDescription('Where do you want the data from?')
			.setRequired(true))
    ,
    async execute(interaction) {
        const location = interaction.options.getString('location').replaceAll(' ','%20')
        interaction.deferReply()
        const weatherObj = (await (await fetch(`https://luminabot.xyz/api/json/weather?location=${location}&degreetype=F`)).json())
        if(JSON.stringify(weatherObj).includes('error')) {
            interaction.editReply("That location is invalid!")
        } else {
            const weatherIcon = "https:" + weatherObj.current.condition.icon
            const weatherEmbed = new EmbedBuilder()
                .setColor('Orange')
                .setFooter({ text: 'Brought to you by YTPT Bot and LuminaBot.xyz', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' })
                .setTitle("Weather Data")
                .setThumbnail(weatherIcon)
                .addFields({name: 'Location', value: `**Name:** ${weatherObj.location.name}\n**Region:** ${weatherObj.location.region}\n**Country:** ${weatherObj.location.country}\n**Coords:** (${weatherObj.location.lat}, ${weatherObj.location.lon})\n**Timezone:** ${weatherObj.location.tz_id}\n**Date and Time:** ${weatherObj.location.localtime}`, inline: true },{name: "Weather", value: `**Temperature (C):** ${weatherObj.current.temp_c}°\n**Real Feel (C):** ${weatherObj.current.feelslike_c}°\n**Temperature (F):** ${weatherObj.current.temp_f}°\n**Real Feel (F):** ${weatherObj.current.feelslike_f}°\n**Day/Night:** ${weatherObj.current.is_day ? "Day" : "Night"}\n**Condition:** ${weatherObj.current.condition.text}`, inline: true},)
            wait(1000)
            interaction.editReply({ embeds: [weatherEmbed] })
        }
       
    },
}