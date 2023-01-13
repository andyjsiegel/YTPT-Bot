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
    pollEmbed.setColor('#F44336')
    if(interaction.options.getSubcommand() === "yesno") {
    const yesOption = new ButtonBuilder().setCustomId(`option_0`).setLabel(`Yes`).setStyle('Success').setDisabled(false)
    const noOption = new ButtonBuilder().setCustomId(`option_1`).setLabel(`No`).setStyle('Danger').setDisabled(false)
    const buttonRow = new ActionRowBuilder().addComponents(yesOption, noOption)
    const votesArray = [[], []]
    pollEmbed.addFields([
        { name: 'Yes', value: '\u200B', inline: true },
        { name: 'No', value: '\u200B', inline: true },
    ])


    const poll = await interaction.reply({ embeds:[pollEmbed], components:[buttonRow], fetchReply: true })
    await interaction.channel.send(interaction.options.getRole('target-group').name === '@everyone' ? interaction.options.getRole('target-group').name : `<@&${interaction.options.getRole('target-group').id}>`)
    
    const collector = poll.createMessageComponentCollector({ time: 600_000 });
    collector.on('collect', i => {
        collector.resetTimer();
        const optionId = parseInt(i.customId.charAt(i.customId.length-1));
        const userName = getName(i.user.username);

        if (votesArray[optionId].includes(userName)) {
          i.reply({content: "You can't vote for this option twice!", ephemeral: true});
          return;
          }
          for(let j = 0; j < votesArray.length; j++){
            if (votesArray[j].includes(userName)) {
                //Remove the user's name from the sub-array of their previous vote
                votesArray[j] = votesArray[j].filter(item => item !== userName);
            }
          }
    
        votesArray[optionId].push(userName);
    
        for (let i = 0; i < votesArray.length; i++) {
          pollEmbed.data.fields[i].value = votesArray[i].length > 0 ? votesArray[i].join('\n') : `\u200B`;
        }
        i.update({ embeds:[pollEmbed]});

    });
    collector.on('end', collected => {
        let tally = "";
        for (let i = 0; i < votesArray.length; i++) {
            let vote = votesArray[i].length != 1 ? "votes" : "vote";
            tally += `**${pollEmbed.data.fields[i].name}:** ${votesArray[i].length} ${vote}.\n`;
        }
        for (let i = 0; i < buttonRow.components.length; i++) {
          buttonRow.components[i].data.disabled = true;
        }
        
        poll.edit({ embeds:[pollEmbed], components: [buttonRow]});
        poll.channel.send(tally);
    });
  



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
          // const votesArray = new Array(interaction.options.getInteger('num-choices')).fill([]);
          const votesArray = Array.from({length: interaction.options.getInteger('num-choices')}, () => []);
          console.log(votesArray.length)
          for(let i = 0; i<interaction.options.getInteger('num-choices'); i++) {
            optionsArray.push(submitted.fields.getTextInputValue(`option_${i}`))
          }
          console.log(votesArray)
          const buttonRow = new ActionRowBuilder()
          optionsArray.forEach((value, idx, arr) => {
            buttonRow.addComponents(
              new ButtonBuilder()
                .setCustomId(`option_${idx}`)
                .setLabel(value)
                .setStyle('Primary')
                .setDisabled(false)
            )
            pollEmbed.addFields({name: value, value: votesArray[idx].join('\n') ? votesArray[idx].size > 0 : `\u200B`, inline: true})
          })
          const poll = await submitted.reply({ embeds:[pollEmbed], components:[buttonRow], fetchReply: true })
          console.log(poll.components[0].components)
          await submitted.channel.send(interaction.options.getRole('target-group').name === '@everyone' ? interaction.options.getRole('target-group').name : `<@&${interaction.options.getRole('target-group').id}>`)
          const collector = poll.createMessageComponentCollector({ time: 600_000 });
          // console.log(collector)
          collector.on('collect', i => {
            collector.resetTimer();
            const optionId = parseInt(i.customId.charAt(i.customId.length-1));
            const userName = getName(i.user.username);

            // Check if the user's name is already present in the sub-array
            if (votesArray[optionId].includes(userName)) {
                i.reply({content: "You can't vote for this option twice!", ephemeral: true});
                return;
            }

            // Check if the user's name is already present in any of the sub-arrays
            for(let j = 0; j < votesArray.length; j++){
                if (votesArray[j].includes(userName)) {
                    //Remove the user's name from the sub-array of their previous vote
                    votesArray[j] = votesArray[j].filter(item => item !== userName);
                }
            }

            votesArray[optionId].push(userName);

            for (let i = 0; i < votesArray.length; i++) {
              pollEmbed.data.fields[i].value = votesArray[i].length > 0 ? votesArray[i].join('\n') : `\u200B`;
            }
            i.update({ embeds:[pollEmbed]});

          });
          collector.on('end', collected => {
            console.log(`Collected ${collected.size} items`)
            let tally = "";
            for (let i = 0; i < votesArray.length; i++) {
              let vote = votesArray[i].length != 1 ? "votes" : "vote";
              tally += `**${pollEmbed.data.fields[i].name}:** ${votesArray[i].length} ${vote}.\n`;
          }
     
            for (let i = 0; i < buttonRow.components.length; i++) {
              buttonRow.components[i].data.disabled = true;
            }
            console.log(buttonRow.components)
          
             // Update the pollEmbed with the new buttons status
          
             poll.edit({ embeds:[pollEmbed], components: [buttonRow]});
          
              // Send the tally message
              poll.channel.send(tally);
              });
          
          
      }
    }
  }
}



     
    