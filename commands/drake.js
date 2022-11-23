const fetch = (...args) =>
	import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("drake")
		.setDescription("🧥 | What does Drake like and not like?")
		.addStringOption((option) =>
			option
				.setName("no-text")
				.setDescription("Text that Drake does not like.")
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName("yes-text")
				.setDescription("Text that Drake likes :D.")
				.setRequired(true)
		),
	async execute(interaction) {
		const text = interaction.options.getString("yes-text");
		const text2 = interaction.options.getString("no-text");

		let image = " ";

		image = await fetch(
			`https://luminabot.xyz/api/image/drakeamong?yes=${text}&no=${text2}`
		).then((response) => (image = response.url));

		const drakeembed = new EmbedBuilder().setImage(image).setColor("Random");
		await interaction.reply({ embeds: [drakeembed] });
	},
};