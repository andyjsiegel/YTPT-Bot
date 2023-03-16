const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs')

module.exports = {
    data: new SlashCommandBuilder()
		.setName('today')
		.setDescription('Sends today\'s schedule'),
    async execute(interaction) {
      
      const todayEmbed = JSON.parse(fs.readFileSync('todayEmbed/todayEmbed.json'))
      const todayRow = JSON.parse(fs.readFileSync('todayEmbed/todayRow.json'))

      
      interaction.reply({ embeds:[todayEmbed], components:[todayRow] })
    }
}