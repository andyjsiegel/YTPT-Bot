const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
      .setName('vod')
      .setDescription('Auto-builds the VOD format')
      .addStringOption(option => option.setName('ign').setDescription('Enter your IGN').setRequired(true))
      .addIntegerOption(option => option.setName('sr').setDescription('Enter your SR').setRequired(true))
      .addStringOption(option => option.setName('hero').setDescription('Enter your hero(es)').setRequired(true))
      .addStringOption(option => option.setName('wld').setDescription('Was your game a win, loss, or draw?').addChoices({ name: 'Win', value: 'w'},{ name: 'Loss', value: 'l'},{ name: 'Draw', value: 'd'}).setRequired(true))
      .addStringOption(option => option.setName('gamecode').setDescription('Enter your Game Code').setRequired(true))
      .addStringOption(option => option.setName('info').setDescription('Enter additional info if needed').setRequired(false)),
    async execute(interaction) {
        const ign = interaction.options.getString('ign');
        const sr = interaction.options.getInteger('sr');
        const hero = interaction.options.getString('hero');
        const wld = interaction.options.getString('wld');
        const gamecode = interaction.options.getString('gamecode');
        const addlinfo = interaction.options.getString('info');
        const vodrq = `**IGN:** ${ign}\n**SR:** ${sr}\n**Heroes played:** ${hero}\n**W/L/D:** ${wld}\n**Game Code:** ${gamecode}\n\n${addlinfo}`;
        await interaction.reply({ content: vodrq, ephemeral: true})
        
    }
}