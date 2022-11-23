const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
		.setName('pace')
		.setDescription('Calculates the pace of your team for the season')
        .addStringOption(option => option.setName('teamname').setDescription('Team Name:').setRequired(true))
        .addIntegerOption(option => option.setName('wins').setDescription('Wins:').setRequired(true))
        .addIntegerOption(option => option.setName('losses').setDescription('Losses:').setRequired(true))
        .addIntegerOption(option => option.setName('totalgames').setDescription('Total Games:').setRequired(true))
        ,
    async execute(interaction) {
        const teamName = interaction.options.getString('teamname');
        const wins = interaction.options.getInteger('wins');
        const losses = interaction.options.getInteger('losses');
        const gamesPlayed = parseInt(wins) + parseInt(losses)
        const totalGames = interaction.options.getInteger('totalgames');
        const winprcnt = wins / gamesPlayed
        const readableprcnt = (winprcnt*100).toString().substring(0,2);
        const finalWins = Math.floor(winprcnt * totalGames)
        const finalLosses = totalGames - finalWins

        
        // await interaction.reply(`${teamName}\n${wins}\n${losses}\n${gamesPlayed}\n${totalGames}\n${winprcnt}\n${finalWins}`)
        await interaction.reply(`The ${teamName} currently have ${wins} wins and ${losses} losses.\n\nThis means they have a winning percentage of ${readableprcnt}%.\n\nMaintaining that winning percentage across the ${totalGames} game season, the ${teamName} will have a ending record of ${finalWins}-${finalLosses}.`)
        
    }
}

//   teamName = msg.content.split(" ")[1]
//   wins = msg.content.split(" ")[2]
//   losses = msg.content.split(" ")[3]
//   gamesTotal = msg.content.split(" ")[4]
//   gamesPlayed = +wins + +losses
//   percent = wins/gamesPlayed
//   winsEnd = percent * gamesTotal
//   printedWins = Math.floor(winsEnd)
//   msg.channel.send("The " + teamName + " currently have a record of " + wins + "-" + losses + ". I estimate the " + teamName + " will have " + printedWins + " wins at the end of the season.")