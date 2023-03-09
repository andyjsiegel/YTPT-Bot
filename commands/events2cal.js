const { EmbedBuilder, hyperlink } = require('discord.js');
const moment = require('moment-timezone')
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('events')
		.setDescription('Create a .ics of the discord events!'),
    async execute(interaction) {
        function UnixToISOString(unixTime) {
          return moment(unixTime).toISOString().replaceAll('-','').replaceAll('.000','').replaceAll(':','')
        }
        let eventObjects = []
        let eventLinks = []
        const eventsArray = Array.from(interaction.guild.scheduledEvents.cache)
        eventsArray.forEach((el, idx, arr) => {
          let event = el[1]
          eventObjects.push({ 
            name: event.name.replaceAll(' ','%20'), 
            description: event.description.replaceAll(' ','%20'),
            startTime: UnixToISOString(event.scheduledStartTimestamp),
            endTime: UnixToISOString(event.scheduledEndTimestamp),
            location: event.entityMetadata.location.replaceAll(' ','%20'),
          })
          
        })
        eventObjects.forEach((event, idx, arr) => {
          console.log(idx, event)
          eventLinks.push(`http://www.google.com/calendar/event?action=TEMPLATE&dates=${event.startTime}%2F${event.endTime}&text=${event.name}&location=${event.location}&details=${event.description}`)
        })
        const linksEmbed = new EmbedBuilder().setTitle('Discord Events as iCal Links').setColor('LuminousVividPink')
        eventObjects.forEach((el, idx, arr) => {
          linksEmbed.addFields({ name: el.name.replaceAll('%20',' '), value: `[iCal Link](${eventLinks[idx]})` })
        })

        interaction.reply({ embeds: [linksEmbed]})
        
    }
}