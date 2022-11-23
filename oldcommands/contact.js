module.exports = {
    async execute(message, ...args) {
        let name = args[0];
          if(!name) { message.reply("Correct format: !contact <name>") }
          else if(name.toLowerCase() === "aidan") {message.reply({ embeds: [aidanContact] }) }
          else if(name.toLowerCase() === "andy") {message.reply({ embeds: [andyContact] }) }
          else if(name.toLowerCase() === "ashley") {message.reply({ embeds: [ashleyContact] }) }
          else if(name.toLowerCase() === "claire") {message.reply({ embeds: [claireContact] }) }
          else if(name.toLowerCase() === "da") {message.reply({ embeds: [daContact] }) }
          else if(name.toLowerCase() === "nick") {message.reply({ embeds: [nickContact] }) }
          else if(name.toLowerCase() === "michael") {message.reply({ embeds: [michaelContact] }) }
          else if(name.toLowerCase() === "pob") {message.reply({ embeds: [pobContact] }) }
          else if(name.toLowerCase() === "sofie") {message.reply({ embeds: [sofieContact] }) }
          else if(name.toLowerCase() === "toby") {message.reply({ embeds: [tobyContact] }) }
    }
}