const { MessageEmbed } = require('discord.js');

module.exports = {
    async execute(message, ...args) {
      const gymSchedule = new MessageEmbed()
      .setTitle("Gym Schedule")
      .setDescription("Gym Bros: Andy, Aidan, Nick")
      .addFields(
        { name: "Tuesday", value: "5:00 PM", inline: true },
        { name: "Saturday", value: "9:00 AM", inline: true } 
      )
    message.reply({ embeds: [gymSchedule] })
    }
}