const { EmbedBuilder } = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('dates')
		.setDescription('Send the list of important dates'),
    async execute(interaction) {
        const datesList = new EmbedBuilder()
            .setColor('#FFD700')
            .setTitle('List of Important Dates')
            .setDescription("June 4th: SAT\nJune 6th-10th: Risse IOs\nJune 8th: Early Release\nJune 13th-17th: Finals Week - 5 Early Releases (**!lastweek** for details)")
            .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });
        await interaction.reply({ embeds: [datesList] })
    }
}