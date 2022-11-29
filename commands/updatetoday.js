const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = (...args) =>
	import("node-fetch").then(({ default: fetch }) => fetch(...args));

const { getTime, createTodayEmbed, checkBDay } = require('../utils');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('updatetoday')
		.setDescription('Updates the today embed')
    .addStringOption(option => 
        option.setName("daytype")
        .setDescription("Odd/Even")
        .setRequired(true)
        .addChoices({name: "Odd", value: "odd"},{name: "Even", value: "even"})
        )
    .addStringOption(option => 
      option.setName("specialday")
      .setDescription("No School/Late Arrival/Early Release")
      .setRequired(false)
      .addChoices({name: "School Closed", value: "closed"},{name: "Late Arrival", value: "latearr"},{name: "Early Release", value: "shortday"})
      )
    ,
        
    async execute(interaction) {
      getTime()
      const daytype = interaction.options.getString("daytype")
      const specialday = interaction.options.getString("specialday")
      const { todayRow, todayEmbed, sendButtons } = await createTodayEmbed(daytype, specialday)
      const todayMessage = {
        embed : todayEmbed,
        buttons : todayRow
      }       
     module.exports.todayMessage = todayMessage

      let nationalDay = " ";
      // nationalDay = await fetch(`https://national-api-day.herokuapp.com/api/today`).then(response => response.json()).then(json => { const funnyDay = json.holidays[Math.floor(Math.random() * json.holidays.length)]; todayEmbed.setDescription(`It's also ${funnyDay}!`)})
      
      // module.exports.todayMessage = todayMessage

      const { curDate } = getTime();
      await interaction.reply({ embeds: [todayEmbed], components: [ todayRow, sendButtons ] })
      

      const collector = interaction.channel.createMessageComponentCollector({ time: 15000 });
        
      collector.on('collect', async i => {
          if(i.customId === 'sendit') {
              i.reply({ content: "Sent!", ephemeral: true});
              interaction.deleteReply();
              const heneral = i.client.channels.cache.get('763451134290821192')
              if(heneral) {
                  heneral.send({ embeds: [todayEmbed], components: [ todayRow ] })
                  checkBDay(heneral, curDate);
              }
          } else if(i.customId === 'nosend') {
              i.reply({ content: `Not sent.`, ephemeral: true})
              interaction.deleteReply();
          }
       });
      collector.on('end', collected => console.log(`Collected ${collected.size} items`));
    }, 
  }  

  


      
      