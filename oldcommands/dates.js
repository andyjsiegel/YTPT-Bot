module.exports = {
    async execute(message, ...args) {
        await message.reply({ embeds: [datesList]})
    }
}