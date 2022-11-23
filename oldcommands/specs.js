module.exports = {
    async execute(message, ...args) {
        let name = args[0];
          if(!name) { message.reply("Correct format: !specs <name>") }
          else if(name.toLowerCase() === "aidan") {message.reply("**__Aidan's PC Specs:__**\nCPU: Ryzen 5800x\nGPU: RTX 2060 Super\nRAM: 16 GB (3200 MHz)\nStorage: Big\nPSU: 750W 80+ Gold\nMotherboard: B550") }
          else if(name.toLowerCase() === "andy") {message.reply("**__Andy's PC Specs:__**\nCPU: i7-9700f\nGPU: RTX 2060 Super\nRAM: 16 GB\nStorage: 1.5 TB") }
          // else if(name.toLowerCase() === "ashley") {message.reply({ embeds: [ashleySchedule] }) }
          // else if(name.toLowerCase() === "claire") {message.reply({ embeds: [claireSchedule] }) }
          else if(name.toLowerCase() === "da") {message.reply("**__Da's PC Specs:__**\nCPU: i7-9700f\nGPU: RTX 2060 Super\nRAM: 16 GB (2667 MHz)\nStorage: 2.5 TB") }
          else if(name.toLowerCase() === "nick") {message.reply("**__Nick's PC Specs:__**\nCPU: Ryzen 3700x\nGPU: RTX 2060 Super\nRAM: 32 GB (4600 MHz)\nStorage: 2.5 TB\nPSU: 850W 80+ Platinum\nMotherboard: X570\n**__Laptop Specs__**:\nCPU: Ryzen 5900hx\nGPU: RTX 3060\nRAM: 16 GB (3200 MHz)\nStorage: 1.5 TB") }
          else if(name.toLowerCase() === "michael") {message.reply("**__Michael's PC Specs:__**\nCPU: Ryzen 5800x\nGPU: GTX 1080 Ti\nRAM: 16 GB (3200 MHz)\nStorage: Big\nPSU: 750W 80+ Bronze\nMotherboard: B550") }
          // else if(name.toLowerCase() === "pob") {message.reply({ embeds: [pobSchedule] }) }
          // else if(name.toLowerCase() === "sofie") {message.reply({ embeds: [sofieSchedule] }) }
          else if(name.toLowerCase() === "toby") {message.reply("<:bruhmoment:915607627516502036>") }
    }
}