const { EmbedBuilder } = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('gym')
		.setDescription('Sends the Gym Bros Schedule'),
    async execute(interaction) {
        const gymSchedule = new EmbedBuilder()
        .setTitle("Gym Schedule")
        .setDescription("Gym Bros: Andy, Aidan, Nick")
        .addFields(
            { name: "Tuesday", value: "5:00 PM", inline: true },
            { name: "Saturday", value: "9:00 AM", inline: true } 
        )
        await interaction.reply({ embeds: [gymSchedule] })
    }
}