const { MessageEmbed, MessageActionRow, Message } = require('discord.js');
const { getTime } = require('../index')

module.exports = {
    async execute(message) {
        const timeanddates = getTime();
        const timeZones = new MessageEmbed()
        .setColor("#107fc4")
        .setTitle("Time Zones")
        .setTimestamp()
        .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });
       
        if(timeMinutes < 10) {
            timeZones.setDescription("Normal Time: " + ET + ":0" + timeMinutes + meridiemET + "\nMichael Time: " + uzbek + ":0" + timeMinutes + meridiemUZ + "\n**Pob Time:** " + ETm + ":0" + timeMinutes)
            timeZones.addFields(
                { name: "**Normal Time**", value: ET + ":0" + timeMinutes + meridiemET, inline: true },
                { name: "**Michael Time**", value: uzbek + ":0" + timeMinutes + meridiemUZ, inline: true },
                { name: "**Pob Time**", value: ETm + ":0" + timeMinutes, inline: true }
            )
        }
        else {
            timeZones.setDescription("**Normal Time:** " + ET + ":" + timeMinutes + meridiemET + "\n**Michael Time:** " + uzbek + ":" + timeMinutes + meridiemUZ + "\n**Pob Time:** " + ETm + ":" + timeMinutes)
            timeZones.addFields(
                { name: "**Normal Time**", value: ET + ":" + timeMinutes + meridiemET, inline: true },
                { name: "**Michael Time**", value: uzbek + ":" + timeMinutes + meridiemUZ, inline: true },
                { name: "**Pob Time**", value: ETm + ":" + timeMinutes, inline: true },
            )
        }
    message.reply({ embeds: [timeZones] })   
  }
}