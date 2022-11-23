module.exports = {
    async execute(message, ...args) {
        message.reply("This is a command for testing")
        console.log(message.content)
    }
}