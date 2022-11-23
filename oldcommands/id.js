module.exports = {
    async execute(message, ...args) {
        let authorBits = [message.author.id, message.author.username, message.author.discriminator]
        message.reply(`**ID:** \`${authorBits[0]}\`\n**Username:** \`${authorBits[1]}\`\n**Discriminator:** \`${authorBits[2]}\``);
    }
}