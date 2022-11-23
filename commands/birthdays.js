const { EmbedBuilder } = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('birthdays')
		.setDescription('Sends the list of birthdays'),
    async execute(interaction) {
        const BirthdayList = new EmbedBuilder()
            .setTitle("Birthdays List")
            .setDescription("**Da:** January 19th\n**YTPT Bot:** February 18th\n**Michael:** March 31st\n**Nick:** April 15th \n**Ashley:** June 2nd\n**Aidan:** July 16th\n**Andy:** July 28th\n**Sofie:** August 4th\n**Felix:** August 18th\n**Toby:** November 2nd\n**Pob:** December 6th\n-\n**Shelby:** January 14th\n**Sunny:** April 13th\n**Blue (Cat):** May 5th\n**Ozzy:** May 7th\n**Blue (Dog):** June 16th\n**Willie:** June 3rd\n**Liza:** July 4th\n**Cersi:** October 6th\n**Tano:** October 17th\n**Lula:** November 19th")
            .setThumbnail("https://cdn.discordapp.com/emojis/585557020967567416.webp?size=240&quality=lossless")
            .setColor("#c49210")
            .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' })
            .setTimestamp()
        await interaction.reply({ embeds: [BirthdayList] })
    }
}