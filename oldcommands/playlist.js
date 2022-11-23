module.exports = {
    async execute(message, ...args) {
        let name = args[0];
          if(!name) { message.reply("Correct format: !playlist <name>") }
        //   else if(name.toLowerCase() === "aidan") {message.reply({ embeds: [aidanContact] }) }
          else if(name.toLowerCase() === "andy") {message.reply("**__Andy's Playlist:__**\nhttps://open.spotify.com/playlist/1XjuQ8VrxJfch8rWocjcno?si=319b4da43add4cac") }
        //   else if(name.toLowerCase() === "ashley") {message.reply({ embeds: [ashleyContact] }) }
        //   else if(name.toLowerCase() === "claire") {message.reply({ embeds: [claireContact] }) }
          else if(name.toLowerCase() === "da") {message.reply("**__Da's Playlist:__**\nhttps://open.spotify.com/playlist/0DuCccHYqLMGTNtUrdNkKu?si=74i1Mg5vTpeGSp5ZEIEMuw&utm_source=copy-link") }
          else if(name.toLowerCase() === "nick") {message.reply("**__Nick's Playlist:__**\nhttps://open.spotify.com/playlist/7wRPM1gKZbZ7GtiUyqSFYv?si=xcH3nMGuQA67ZSrIpipkeA&utm_source=copy-link") }
        //   else if(name.toLowerCase() === "michael") {message.reply({ embeds: [michaelContact] }) }
        //   else if(name.toLowerCase() === "pob") {message.reply({ embeds: [pobContact] }) }
        //   else if(name.toLowerCase() === "sofie") {message.reply({ embeds: [sofieContact] }) }
        //   else if(name.toLowerCase() === "toby") {message.reply({ embeds: [tobyContact] }) }
    }
}