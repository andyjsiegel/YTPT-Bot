const { Client, SlashCommandBuilder, ChatInputCommandInteraction, PermissionsBitField, EmbedBuilder } = require('discord.js');
const { getTime } = require('../utils')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('dates')
    .setDescription('this shows upcoming SCHOOL events!!!!')
    .setDefaultMemberPermissions(PermissionsBitField.Flags.SendMessages),
    async execute(interaction) {
        const { upcomingEvents } = await getTime()
        const eventsEmbed = new EmbedBuilder()
            .setTitle("Upcoming Events")
            .setTimestamp()
            .setDescription(upcomingEvents)
        interaction.reply({embeds: [eventsEmbed] })
    },
}