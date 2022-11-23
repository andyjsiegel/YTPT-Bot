const { ContextMenuCommandBuilder, ApplicationCommandType } = require("discord.js");

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('burn')
        .setType(ApplicationCommandType.Message),
    async execute(interaction) {
            let message = interaction.targetMessage.content
            message = message.replaceAll('\n','%20')
            message = message.replaceAll(' ','%20')
            await interaction.reply(`https://luminabot.xyz/api/image/burn?text=${message}`)
            await interaction.channel.send(`${interaction.targetMessage.author}`)
            
        }
}