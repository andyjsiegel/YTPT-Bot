const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('playlist')
		.setDescription('Sends a user\'s playlist')
    .addStringOption(option => 
      option.setName("user")
      .setRequired(true)
      .setDescription('User')
      .addChoices(
         { name: "Andy", value: "andy"},
         { name: "Da", value: "da"},
         { name: "Nick", value: "nick"},
        )
      ),
    async execute(interaction) {
        let name = interaction.options.getString('user')
        // else if(name.toLowerCase() === "aidan") {interaction.reply({ embeds: [aidanContact] }) }
        if(name.toLowerCase() === "andy") {interaction.reply("**__Andy's Playlist:__**\nhttps://open.spotify.com/playlist/1XjuQ8VrxJfch8rWocjcno?si=319b4da43add4cac") }
        // else if(name.toLowerCase() === "ashley") {interaction.reply({ embeds: [ashleyContact] }) }
        // else if(name.toLowerCase() === "claire") {interaction.reply({ embeds: [claireContact] }) }
        else if(name.toLowerCase() === "da") {interaction.reply("**__Da's Playlist:__**\nhttps://open.spotify.com/playlist/0DuCccHYqLMGTNtUrdNkKu?si=74i1Mg5vTpeGSp5ZEIEMuw&utm_source=copy-link") }
        else if(name.toLowerCase() === "nick") {interaction.reply("**__Nick's Playlist:__**\nhttps://open.spotify.com/playlist/7wRPM1gKZbZ7GtiUyqSFYv?si=xcH3nMGuQA67ZSrIpipkeA&utm_source=copy-link") }
        // else if(name.toLowerCase() === "michael") {interaction.reply({ embeds: [michaelContact] }) }
        // else if(name.toLowerCase() === "pob") {interaction.reply({ embeds: [pobContact] }) }
        // else if(name.toLowerCase() === "sofie") {interaction.reply({ embeds: [sofieContact] }) }
        // else if(name.toLowerCase() === "toby") {interaction.reply({ embeds: [tobyContact] }) }
        // await interaction.reply(`Playlist: ${user}`)
    }
}