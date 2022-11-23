const { EmbedBuilder } = require('discord.js')

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('tripschedule')
		.setDescription('Sends a schedule of summer trips/vacations'),
    async execute(interaction) {
        tripSchedule = new EmbedBuilder()
            .setColor('#0ffff6')
            .setTitle("Trip Schedule")
            .setDescription("Peeps on Trips")
            .addFields( 
                { name: 'Andy', value: 'June 23rd - 27th', },
                { name: 'Da', value: 'June 18th - 21st\nAugust 5th - 19th' },
                { name: 'Sofie', value: 'July 31st to August 22nd' },
                { name: 'Nick', value: 'July 16th - July 23rd' },
                { name: 'Ashley', value: 'June 26th - July 22nd'},
                { name: 'Pob', value: 'Week of July 4th\nAugust 15th - 19th'},
                { name: 'Claire', value: 'June 26th - July 9th\nJuly 24th - 31st'},
            )
            .setTimestamp()
            .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });
        await interaction.reply({ embeds: [tripSchedule] })
    }
}

