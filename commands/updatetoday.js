const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = (...args) =>
	import("node-fetch").then(({ default: fetch }) => fetch(...args));

const { getTime, createTodayEmbed } = require('../utils');

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
      // const todayMessage = {
      //   embed : todayEmbed,
      //   buttons : todayRow
      // }      
     module.exports.todayMessage = {
      embed : todayEmbed,
      buttons : todayRow
    }      

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
                  function checkBDay(bdayUpdateChannel, curDate) {
                    if(bdays.includes(curDate)) { 
                      console.log(curDate)
                      switch(curDate) {
                        case "January 14": 
                            if(bdayUpdateChannel) {            
                              bdayUpdateChannel.send("Hey @everyone, it's Scout's Birthday!")
                            }
                          break;
                        case "January 19": 
                          console.log("Da")
                          if(bdayUpdateChannel) {            
                            bdayUpdateChannel.send("Hey @everyone, it's Da's Birthday!")
                          }
                          break;
                        case "February 18": 
                          console.log("YTPT Bot")
                          if(bdayUpdateChannel) {            
                            bdayUpdateChannel.send("Hey @everyone, it's YTPT Bot's Birthday!")
                          }
                          break;
                        case "March 31": 
                          console.log("Michael")
                          if(bdayUpdateChannel) {            
                            bdayUpdateChannel.send("Hey @everyone, it's Michael's Birthday!")
                          }
                          break;
                        case "April 13": 
                          console.log("Sunny")
                          if(bdayUpdateChannel) {            
                            bdayUpdateChannel.send("Hey @everyone, it's Sunny's Birthday!")
                          }
                          break;
                        case "April 15": 
                          console.log("Nick")
                          if(bdayUpdateChannel) {            
                            bdayUpdateChannel.send("Hey @everyone, it's Nick's Birthday!")
                          }
                          break;
                        case "May 5": 
                          console.log("Blue The Cat")
                          if(bdayUpdateChannel) {            
                            bdayUpdateChannel.send("Hey @everyone, it's Blue The Cat's Birthday!")
                          }
                          break;
                        case "May 7": 
                          console.log("Ozzy")
                          if(bdayUpdateChannel) {            
                            bdayUpdateChannel.send("Hey @everyone, it's Ozzy's Birthday!")
                          }
                          break;
                        case "June 2": 
                          console.log("Ashley")
                          if(bdayUpdateChannel) {            
                            bdayUpdateChannel.send("Hey @everyone, it's Ashley's Birthday!")
                          }
                          break;
                        case "June 3": 
                          console.log("Willie")
                          if(bdayUpdateChannel) {            
                            bdayUpdateChannel.send("Hey @everyone, it's Willie's Birthday!")
                          }
                          break;
                        case "June 16 ": 
                          console.log("Blue The Dog")
                          if(bdayUpdateChannel) {            
                            bdayUpdateChannel.send("Hey @everyone, it's Blue The Dog's Birthday!")
                          }
                          break;
                        case "July 4": 
                          console.log("Liza")
                          if(bdayUpdateChannel) {            
                            bdayUpdateChannel.send("Hey @everyone, it's Liza's Birthday!")
                          }
                          break;
                        case "July 16": 
                          console.log("Aidan")
                          if(bdayUpdateChannel) {            
                            bdayUpdateChannel.send("Hey @everyone, it's Aidan's Birthday!")
                          }
                          break;
                        case "July 28": 
                          console.log("Andy")
                          if(bdayUpdateChannel) {            
                            bdayUpdateChannel.send("Hey @everyone, it's Andy's Birthday!")
                          }
                          break;
                        case "August 4": 
                          console.log("Sofie")
                          if(bdayUpdateChannel) {            
                            bdayUpdateChannel.send("Hey @everyone, it's Sofie's Birthday!")
                          }
                          break;
                        case "August 18": 
                          console.log("Felix")
                          if(bdayUpdateChannel) {            
                            bdayUpdateChannel.send("Hey @everyone, it's Felix's Birthday!")
                          }
                          break;
                        case "November 19": 
                          console.log("Lula")
                          if(bdayUpdateChannel) {            
                            bdayUpdateChannel.send("Hey @everyone, it's Lula's Birthday!")
                          }
                          break;
                        case "October 17": 
                          console.log("Tano")
                          if(bdayUpdateChannel) {            
                            bdayUpdateChannel.send("Hey @everyone, it's Tano's Birthday!")
                          }
                          break;
                        case "November 2": 
                          console.log("Toby")
                          if(bdayUpdateChannel) {            
                            bdayUpdateChannel.send("Hey @everyone, it's Toby's Birthday!")
                          }
                          break;
                        case "December 6": 
                          console.log("Pob")
                          if(bdayUpdateChannel) {            
                            bdayUpdateChannel.send("Hey @everyone, it's Pob's Birthday!")
                          }
                          break;
                      }
                    }
                  }
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

  


      
      