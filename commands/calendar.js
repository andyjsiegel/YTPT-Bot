const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
		.setName('calendar')
		.setDescription('Sends the 2023 FCCPS Calendar')
    .addStringOption(option => option.setName('type').setDescription('Grid View/List View').addChoices({name: "Grid", value: "grid"},{name: "List", value: "list"}).setRequired(true)),
    async execute(interaction) {
          const typeChoice = interaction.options.getString('type')
          if(typeChoice === 'grid') {
            const attachment = './FCCPS Calendar/FCCPS 2023 (Grid View).png'
            interaction.reply({ files: [attachment] })
          }
          else if(typeChoice === 'list') {
            const attachment = './FCCPS Calendar/FCCPS 2023 (List View).png'
            interaction.reply({ files: [attachment] })
          }
          
          
    }
}