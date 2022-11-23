const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('apps')
		.setDescription('Apps you should download'),
    async execute(interaction) {
        await interaction.reply("**__Main Programs:__**\nOpera GX (Home Browser)\nChrome (School Browser)\nSteam\nEpic Games\nBattle.net Launcher\nRazer Cortex\nSpotify\nWinAero Tweaker(Disables Cortana)\nSteelSeries GG\n\n**__Optional Downloads:__**\nCemu\nDeSmuMe\nmGBA\nVoicemod\nUbisoft (For UNO)")
    }
}