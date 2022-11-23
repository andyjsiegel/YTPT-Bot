const { Client, SlashCommandBuilder, ChatInputCommandInteraction, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Pong')
    .setDefaultMemberPermissions(PermissionsBitField.Flags.SendMessages),
    async execute(interaction) {
        interaction.reply(`🏓 **PONG! Latency is:** \`${Date.now() - interaction.createdTimestamp}ms\``)
        interaction.channel.send("Testing message 2");
        interaction.channel.send("Testing message 3"); 
    },
}