const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
		.setName('ib')
		.setDescription('Collection of IB resources'),
    async execute(interaction) {
        await interaction.reply("**__Comprehensive Database of IB Examples [Video + Essay]__**\nhttps://www.sineadsukerta.com/ib-content")
    }
}