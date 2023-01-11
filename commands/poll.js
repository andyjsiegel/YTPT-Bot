const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Message, Embed, ModalBuilder, TextInputComponent, TextInputBuilder, messageLink } = require('discord.js');
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
      .addIntegerOption(option => option.setName('num-choices').setDescription('Choose a number of options (2-5)').setRequired(true).setMinValue(2).setMaxValue(5))
      .addStringOption(option => option.setName('question').setDescription('The question').setRequired(true)))
  
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
    let question = interaction.options.getString('question')
    if(!question.includes('?')) question += "?"
    const pollEmbed = new EmbedBuilder()
    pollEmbed.setTitle(question)
    if(interaction.options.getSubcommand() === "yesno") {

    } else if(interaction.options.getSubcommand() === "choose") {
        const addOptionsModal = new ModalBuilder().setCustomId("addOptionsModal").setTitle(`Add Options for ${question}`)

        for(let i = 0; i<interaction.options.getInteger('num-choices'); i++) {
          let optionInput = new TextInputBuilder().setCustomId(`option_${i}`).setStyle(1).setLabel(`Option ${i+1}`)
          let optionInputRow = new ActionRowBuilder().addComponents(optionInput)
          addOptionsModal.addComponents(optionInputRow)
        }
        await interaction.showModal(addOptionsModal)
        const submitted = await interaction.awaitModalSubmit({
          time: 60_000,
        }).catch(error => {
          console.error(error)
          return null
        })
        if(submitted) {
          let optionsArray = []
          for(let i = 0; i<interaction.options.getInteger('num-choices'); i++) {
            optionsArray.push(submitted.fields.getTextInputValue(`option_${i}`))
          }
          console.log(`Options: ${optionsArray}`)
          const buttonRow = new ActionRowBuilder()
          optionsArray.forEach((value, idx, arr) => {
            buttonRow.addComponents(
              new ButtonBuilder()
                .setCustomId(`option_${idx}`)
                .setLabel(value)
                .setStyle('Primary')
            )
            pollEmbed.addFields({name: value, value: "\u200B", inline: true})
          })
          const poll = await submitted.reply({ embeds:[pollEmbed], components:[buttonRow], fetchReply: true })
          await submitted.channel.send(interaction.options.getRole('target-group').name === '@everyone' ? interaction.options.getRole('target-group').name : `<@&${interaction.options.getRole('target-group').id}>`)
          const collector = poll.createMessageComponentCollector({ time: 900_000 });
          // console.log(collector)
          collector.on('collect', i => {
            pollEmbed.data.fields[parseInt((i.customId).charAt(i.customId.length-1))].value += `${getName(i.user.username)}\n`
            poll.edit({ embeds:[pollEmbed]})
            i.reply({content: "Vote Received!", ephemeral: true})
          });
          collector.on('end', collected => console.log(`Collected ${collected.size} items`));
          
          
      }
    }
  }
}



     
    