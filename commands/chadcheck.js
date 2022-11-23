const { SlashCommandBuilder } = require('@discordjs/builders');
const { Message, EmbedBuilder } = require('discord.js');
const { getName } = require('../utils')
module.exports = {
    data: new SlashCommandBuilder()
		.setName('chadcheck')
		.setDescription('Checks the Chadness'),
    async execute(interaction) {
   
        const guildUsernames = interaction.guild.members.cache.map(member => { return member.user.username})
        const guildUsers = interaction.guild.members.cache.map(member => { return member.user.bot})
        const guildStatus = interaction.guild.members.cache.map(member => { if(member.presence !== null) { return member.presence.status } else { return "offline"} })
        
        let chads = "\u200B"  
        let mids = "\u200B"      
        let cringe = "\u200B"
        for(let i = 0; i<guildUsernames.length; i++) {
          let humanName = getName(guildUsernames[i])
          if(guildStatus[i] === "online" && guildUsers[i] === false) {
            chads += humanName + "\n" 
          }
          if(guildStatus[i] === "idle" && guildUsers[i] === false) {
            mids += humanName + "\n" 
          }
          if(guildStatus[i] === "dnd" && guildUsers[i] === false) {
            cringe += humanName + "\n" 
          }
          if(guildStatus[i] === "offline" && guildUsers[i] === false) {
            cringe += humanName + "\n" 
          }
        }
        const chadCheck = new EmbedBuilder()
          .setTitle("Chad Check")
          .addFields(
            { name: 'Chad', value: chads, inline: true},
            { name: 'Mid', value: mids, inline: true},
            { name: 'Cringe', value: cringe, inline: true},
            )
          .setThumbnail('https://melmagazine.com/wp-content/uploads/2021/01/66f-1.jpg')
          .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' })
          .setTimestamp()
          .setColor('#0099ff')
        interaction.reply({ embeds: [chadCheck] })

    }
}