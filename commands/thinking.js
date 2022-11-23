const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('thinking')
		.setDescription('Thinks'),
    async execute(interaction) {
        await interaction.deferReply();
    }
}