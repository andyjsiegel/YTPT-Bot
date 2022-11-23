module.exports = {
    async execute(message, ...args) {
        let petName = args[0];
        console.log(petName);
          if(!petName) { message.reply("Correct format: !petphoto <petName>\n\nPets: Scout, Tano, Jacques, Liza, Lula, BlueCat, Sunny, BlueDog, Lexi, Willie, Luna, Ozzy, Cersi, Firefly")}
          else if(petName.toLowerCase() === "scout") { message.channel.send("https://media.discordapp.net/attachments/747629100927025223/945457763901898762/20211128_074212.jpg")}
          else if(petName.toLowerCase() === "tano") { message.channel.send("https://media.discordapp.net/attachments/747629100927025223/944336770122788894/F758321A-84BA-4163-BE92-C5555301D03B.jpg?width=854&height=1139")}
          else if(petName.toLowerCase() === "jacques") { message.channel.send("https://cdn.discordapp.com/attachments/771171384901500972/944342431401402378/20210627_142951.mp4")}
          else if(petName.toLowerCase() === "liza") { message.channel.send("https://media.discordapp.net/attachments/747629100927025223/944422941083435048/IMG_20210916_223307.jpg?width=901&height=676")}
          else if(petName.toLowerCase() === "lula") { message.channel.send("https://media.discordapp.net/attachments/771171384901500972/944343407973761074/image02.jpg?width=854&height=1139")}
          else if(petName.toLowerCase() === "bluecat") { message.channel.send("https://media.discordapp.net/attachments/771171384901500972/944422731292770324/20200901_133950.jpg?width=507&height=676")}
          else if(petName.toLowerCase() === "sunny") { message.channel.send("https://media.discordapp.net/attachments/747629100927025223/944423159841587250/A210D4B1-F3BE-46D4-8F61-B1B0E8F1007A.jpg?width=507&height=676")}
          else if(petName.toLowerCase() === "bluedog") { message.channel.send("https://media.discordapp.net/attachments/747629100927025223/944423276531290175/C54B9E46-39B5-47A2-A739-F505AABF04E5.jpg?width=901&height=676")}
          else if(petName.toLowerCase() === "lexi") { message.channel.send("https://media.discordapp.net/attachments/747629100927025223/945457492543045733/20220123_201608.jpg?width=512&height=1138")}
          else if(petName.toLowerCase() === "willie") { message.channel.send("https://media.discordapp.net/attachments/885724281621843968/945457515578155028/7A1CF7AA-4EC9-4E6A-9B16-F2D258533F25.jpg?width=688&height=1136")}
          else if(petName.toLowerCase() === "luna") { message.channel.send("https://media.discordapp.net/attachments/885724281621843968/945457480069152768/E8CD7BEC-2120-4E4C-9510-5D0EED8A7F27.jpg?width=854&height=1139")}
          else if(petName.toLowerCase() === "ozzy") { message.channel.send("https://media.discordapp.net/attachments/885724281621843968/948951015892336700/IMG_8306.PNG?width=526&height=1138")}
          else if(petName.toLowerCase() === "cersi") { message.channel.send("https://media.discordapp.net/attachments/673726915110240269/981001474228228096/3C2A5D1C-014C-4B1C-AC06-1B4A70EC5B8F.jpg?width=854&height=1139")}
          else if(petName.toLowerCase() === "firefly") { message.channel.send("https://media.discordapp.net/attachments/673726915110240269/981001612128550963/9969D526-D552-4B92-9044-3A30FFCE34AE.jpg?width=854&height=1139")}
    }
}