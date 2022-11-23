const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('wednesdays')
		.setDescription('Sends the list of Short Wednesdays.'),
    async execute(interaction) {
        await interaction.reply("**__Early Release Wednesdays:__**\n- September 29th\n- October 13th\n- December 1st\n- January 12th\n- February 9th\n- March 16th\n- April 27th\n- May 18th\n- June 8th\n- June 13th, 14th, 15th, 16th, 17th")
    }
}