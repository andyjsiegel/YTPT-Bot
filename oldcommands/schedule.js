module.exports = {
    async execute(message, ...args) {
        let name = args[0];
        // console.log(name);
        function getMySchedule() {
            if(message.author.username === "Father_Cheddar") {  
              message.reply({ embeds: [aidanSchedule] })
            }  
          
          if(message.author.username === "zeta") {
              message.reply({ embeds: [andySchedule] })
            }
          
          if(message.author.username === "ghostlywords") {
              message.reply({ embeds: [ashleySchedule] })
          }
          
          if(message.author.username === "hello there") {
              message.reply({ embeds: [claireSchedule] })
            }
          
          if(message.author.username === "twivight") {
              message.reply({ embeds: [daSchedule] })
            }
          
          if(message.author.username === "Advance") {
              message.reply({ embeds: [nickSchedule] })
            }
          
          if(message.author.username === "DemolitionDonut") { 
              message.reply("https://imgur.com/a/VVCvlqE")
          }
          
          if(message.author.username === "iSleepy") {
              message.reply({ embeds: [sofieSchedule] })
            }
        
          if(message.author.username === "pobhee") {
              message.reply({ embeds: [pobSchedule] })
            }
          
          if(message.author.username === "DEFENESTRAT10N" || message.author.username === "built different") {
              message.reply({ embeds: [tobySchedule] })
            } 
          }
          if(!name) { getMySchedule(); }
          else if(name.toLowerCase() === "aidan") {message.reply({ embeds: [aidanSchedule] }) }
          else if(name.toLowerCase() === "andy") {message.reply({ embeds: [andySchedule] }) }
          else if(name.toLowerCase() === "ashley") {message.reply({ embeds: [ashleySchedule] }) }
          else if(name.toLowerCase() === "claire") {message.reply({ embeds: [claireSchedule] }) }
          else if(name.toLowerCase() === "da") {message.reply({ embeds: [daSchedule] }) }
          else if(name.toLowerCase() === "nick") {message.reply({ embeds: [nickSchedule] }) }
          else if(name.toLowerCase() === "michael") {message.reply({ embeds: [michaelSchedule] }) }
          else if(name.toLowerCase() === "pob") {message.reply({ embeds: [pobSchedule] }) }
          else if(name.toLowerCase() === "sofie") {message.reply({ embeds: [sofieSchedule] }) }
          else if(name.toLowerCase() === "toby") {message.reply({ embeds: [tobySchedule] }) }
    }
}