const { Client, SlashCommandBuilder, ChatInputCommandInteraction, PermissionsBitField } = require('discord.js');
const fetch = (...args) =>
	import("node-fetch").then(({ default: fetch }) => fetch(...args));
module.exports = {
    data: new SlashCommandBuilder()
    .setName('advice')
    .setDescription('Get some advice from Lumina Bot!'),
    async execute(interaction) {
        const advice = (await (await fetch(`https://luminabot.xyz/api/json/advice`)).json()).advice;
        const num = (await (await fetch(`https://luminabot.xyz/api/json/advice`)).json()).id;
        interaction.reply(`Wise Words #${num}: ${advice}`)
    },
}