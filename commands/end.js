const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('end')
		.setDescription('kills the bot'),
    async execute(interaction) {
        await interaction.reply({
            content: "Goodbye"})
            return process.exit();
     
    }
}