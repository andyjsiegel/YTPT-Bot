module.exports = {
    async execute(message, ...args) {
        let myMessage = message.content.split("!say ")[1]
        await message.delete()
        await message.channel.send(myMessage)
    }
}