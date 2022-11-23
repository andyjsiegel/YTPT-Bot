const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
		.setName('lastweek')
		.setDescription('Sends the schedule for the last week of school'),
    async execute(interaction) {
        const lastWeekSchedule = new EmbedBuilder() 
          .setTitle("Last Week of School Schedule")
          .setDescription("-") 
          .setColor("DARK_AQUA")
          .addFields(
            { name: "Monday, June 13th", value: "Block 1: 8:05 - 9:55\nBreak: 9:55 - 10:20\nBlock 3: 10:20 - 12:10"},
            { name: "Tuesday, June 14th", value: "Block 2: 8:05 - 9:55\nBreak: 9:55 - 10:20\nBlock 4: 10:20 - 12:10"},
            { name: "Wednesday, June 15th", value: "Block 5: 8:05 - 9:55\nBreak: 9:55 - 10:20\nBlock 7: 10:20 - 12:10"},
            { name: "Thursday, June 16th", value: "Block 6: 8:05 - 9:55\nBreak: 9:55 - 10:20\nMakeup: 10:20 - 12:10"},
            { name: "Friday, June 17th", value: "All classes in sequential order (1,2,3,etc)"},
          )
        interaction.reply({ embeds: [ lastWeekSchedule ]})
    }
}