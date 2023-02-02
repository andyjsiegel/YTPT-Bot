const { Client, SlashCommandBuilder, ChatInputCommandInteraction, PermissionsBitField } = require('discord.js');
const { getTime } = require('../utils')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('events')
    .setDescription('View Upcoming Events')
    .setDefaultMemberPermissions(PermissionsBitField.Flags.SendMessages),
    async execute(interaction) {
        const { upcomingEvents } = getTime()
        interaction.reply(upcomingEvents)
    },
}