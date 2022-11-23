const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
		.setName('today')
		.setDescription('Sends today\'s schedule'),
    async execute(interaction) {
      const {todayMessage} = require('./updatetoday')
      try {
        await interaction.reply({ embeds: [todayMessage.embed], components: [todayMessage.buttons] }) 
      } catch {
        await interaction.reply('Today embed not created, use `/updatetoday` to do so.')
      }
    }
}