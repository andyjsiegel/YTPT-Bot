const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
	.setName('send')
	.setDescription('Sends a message in a channel')
	.addStringOption(option =>
		option.setName('input')
			.setDescription('The input to echo back')
			.setRequired(true))
    .addStringOption(option =>
                option.setName('channel')
                    .setDescription('the channel id')
                    .setRequired(true)),
    async execute(interaction) {
        const string = interaction.options.getString('input')
        const channel = interaction.client.channels.cache.get(interaction.options.getString('channel'))
        if(interaction.member.user.username !== "zeta") {
            interaction.reply({content: "https://tenor.com/view/im-coming-for-you-joe-biden-i-will-beat-you-youre-mine-i-will-get-you-gif-18720429", ephemeral: true})
        } else {
          interaction.reply({ content: "Message Sent!", ephemeral: true})
          channel.send(string);
        }
    }
}