const { getName } = require('../utils')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('roles')
		.setDescription('Gets the members that have the specific role')
        .addRoleOption(option => option.setName('role').setDescription('Select a role').setRequired(true)),
    async execute(interaction) {
        let roleinput = interaction.options.getRole('role');
        const listEmbed = new EmbedBuilder()
            .setTitle(`Users With "${roleinput.name}" Role:`)
            .setDescription(roleinput.members.map(m => getName(m.user.username)).join('\n'))
            .setColor(roleinput.hexColor)
        await interaction.reply({ embeds: [listEmbed]})
        
    }
}