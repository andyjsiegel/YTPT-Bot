const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Message, Embed } = require('discord.js');
const { getName } = require('../utils')
 


module.exports = {
  data: new SlashCommandBuilder()
  .setName('poll')
  .setDescription('Polls the server!')
  .addSubcommand(subcommand => 
    subcommand
      .setName('choose')
      .setDescription('Poll with choices')
      .addRoleOption(option => option.setName("target-group").setDescription("Who do you want to ping?").setRequired(true))
      .addStringOption(option => 
        option
          .setName('question')
          .setDescription('The question')
          .setRequired(true)
      )
      .addStringOption(option =>
        option 
          .setName('option1')
          .setDescription('Option 1')
          .setRequired(true)
        )
      .addStringOption(option =>
        option 
          .setName('option2')
          .setDescription('Option 2')
          .setRequired(true)
        )
      .addStringOption(option =>
        option 
          .setName('option3')
          .setDescription('Option 3')
          .setRequired(false)
        )
      .addStringOption(option =>
        option 
          .setName('option4')
          .setDescription('Option 4')
          .setRequired(false)
        )
      .addStringOption(option =>
        option 
          .setName('option5')
          .setDescription('Option 5')
          .setRequired(false)
        )
        
  )
  .addSubcommand(subcommand => 
    subcommand
      .setName('yesno')
      .setDescription('Yes/No poll')
      .addRoleOption(option => option.setName("target-group").setDescription("Who do you want to ping?").setRequired(true))
      .addStringOption(option => 
        option
          .setName('question')
          .setDescription('The question')
          .setRequired(true)
      )
    ),
  async execute(interaction) {
    const question = interaction.options.getString('question')
    if(interaction.options.getSubcommand() === "choose") {
      const pollEmbed = new EmbedBuilder()
        .setDescription("Vote!")
        .setColor('Random')
      const pollRow = new ActionRowBuilder()
      let optionsArray = [ interaction.options.getString('option1'),interaction.options.getString('option2'),interaction.options.getString('option3'),interaction.options.getString('option4'),interaction.options.getString('option5')]
      optionsArray = optionsArray.join('').split('')
      optionsArray.forEach((val, idx, arr) => { 
        pollEmbed.addFields({name: val, value: '\u200B',inline: true });  
        pollRow.addComponents(
          new ButtonBuilder()
            .setCustomId(val)
            .setLabel(val)
            .setStyle('Success')
          )
      })
        

      if(!question.includes('?')) 
        pollEmbed.setTitle(`${question}?`)
      else
        pollEmbed.setTitle(question)
        
      await interaction.reply({ embeds: [pollEmbed], components: [pollRow] })

    } else if(interaction.options.getSubcommand() === "yesno") {
      //DO OTHER STUFF
    }

  }
}



     
    