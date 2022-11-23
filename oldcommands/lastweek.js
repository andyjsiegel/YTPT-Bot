module.exports = {
    async execute(message) {
        message.reply({ embeds: [lastWeekSchedule] })
    }
}