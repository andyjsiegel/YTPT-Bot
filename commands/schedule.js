const { EmbedBuilder } = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

const { schedules } = require('../utils');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('schedule')
		.setDescription('Get someone\'s schedule')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('name')
                .addChoices({name: 'Aidan', value: 'aidan'},{name: 'Andy', value: 'andy'},{name: 'Ashley', value: 'ashley'},{name: 'Felix', value: 'felix'},{name: 'Da', value: 'da'},{name: 'Nick', value: 'nick'},{name: 'Michael', value: 'michael'},{name: 'Pob', value: 'pob'},{name: 'Sofie', value: 'sofie'},{name: 'Toby', value: 'toby'},)
                .setRequired(true)),    
    async execute(interaction) {
        var { aidanSchedule, andySchedule, ashleySchedule, felixSchedule, daSchedule, nickSchedule, michaelSchedule, pobSchedule, sofieSchedule, tobySchedule } = schedules();
        const name = interaction.options.getString('name')
        if(name.toLowerCase() === "aidan") {interaction.reply({ embeds: [aidanSchedule] }) }
        else if(name.toLowerCase() === "andy") {interaction.reply({ embeds: [andySchedule] }) }
        else if(name.toLowerCase() === "ashley") {interaction.reply({ embeds: [ashleySchedule] }) }
        else if(name.toLowerCase() === "felix") {interaction.reply({ embeds: [felixSchedule] }) }
        else if(name.toLowerCase() === "da") {interaction.reply({ embeds: [daSchedule] }) }
        else if(name.toLowerCase() === "nick") {interaction.reply({ embeds: [nickSchedule] }) }
        else if(name.toLowerCase() === "michael") {interaction.reply({ embeds: [michaelSchedule] }) }
        else if(name.toLowerCase() === "pob") {interaction.reply({ embeds: [pobSchedule] }) }
        else if(name.toLowerCase() === "sofie") {interaction.reply({ embeds: [sofieSchedule] }) }
        else if(name.toLowerCase() === "toby") {interaction.reply({ embeds: [tobySchedule] }) }
        else { interaction.reply({ content: `${name}? Seriously? I'm not a stalker.`})}
    },
}

