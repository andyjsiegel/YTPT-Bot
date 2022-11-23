const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('college')
		.setDescription('Sends the College Spreadsheet'),
    async execute(interaction) {
        await interaction.reply("https://docs.google.com/spreadsheets/d/1Dieyc8ww6XS9a7pbyF79597weyMvIXNoBxes1mz3vho/edit?usp=sharing")
    }
}