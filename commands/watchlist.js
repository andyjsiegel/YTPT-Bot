// module.exports = {
//     async execute(message, ...args) {
//         await message.reply('**__YTPT Must Watch List:__** \nhttps://docs.google.com/spreadsheets/d/1hoTzUCei5kiDlwOTmRec39PJdd-ewlfKdVENJp7ePtw/edit?usp=sharing\n**Key:** Shows marked in white text are deemed "must watch" and shows in *italics* are on more than one platform. Shows on this list can be on Netflix, Prime Video, Hulu, Disney+, HBO Max, and Apple TV.');
//     }
// }

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('watchlist')
		.setDescription('Sends the YTPT "Must Watch" List'),
    async execute(interaction) {
        await interaction.reply('**__YTPT Must Watch List:__** \nhttps://docs.google.com/spreadsheets/d/1hoTzUCei5kiDlwOTmRec39PJdd-ewlfKdVENJp7ePtw/edit?usp=sharing\n**Key:** Shows marked in white text are deemed "must watch" and shows in *italics* are on more than one platform. Shows on this list can be on Netflix, Prime Video, Hulu, Disney+, HBO Max, and Apple TV.')
    }
}