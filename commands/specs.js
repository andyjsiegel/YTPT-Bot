const { EmbedBuilder } = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

const { schedules } = require('../utils');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('specs')
		.setDescription('Get someone\'s PC specs')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('name')
                .setRequired(true)),    
    async execute(interaction) {
        const name = interaction.options.getString('name')
        if(name.toLowerCase() === "aidan") {interaction.reply("**__Aidan's PC Specs:__**\nCPU: Ryzen 5800x\nGPU: RTX 2060 Super\nRAM: 16 GB (3200 MHz)\nStorage: Big\nPSU: 750W 80+ Gold\nMotherboard: B550") }
        else if(name.toLowerCase() === "andy") {interaction.reply("**__Andy's PC Specs:__**\nCPU: i7-9700f\nGPU: RTX 2060 Super\nRAM: 16 GB\nStorage: 1.5 TB") }
        // else if(name.toLowerCase() === "ashley") {interaction.reply({ embeds: [ashleySchedule] }) }
        // else if(name.toLowerCase() === "claire") {interaction.reply({ embeds: [claireSchedule] }) }
        else if(name.toLowerCase() === "da") {interaction.reply("**__Da's PC Specs:__**\nCPU: i7-9700f\nGPU: RTX 2060 Super\nRAM: 16 GB (2667 MHz)\nStorage: 2.5 TB") }
        else if(name.toLowerCase() === "nick") {interaction.reply("**__Nick's PC Specs:__**\nCPU: Ryzen 3700x\nGPU: RTX 2060 Super\nRAM: 32 GB (4600 MHz)\nStorage: 2.5 TB\nPSU: 850W 80+ Platinum\nMotherboard: X570\n**__Laptop Specs__**:\nCPU: Ryzen 5900hx\nGPU: RTX 3060\nRAM: 16 GB (3200 MHz)\nStorage: 1.5 TB") }
        else if(name.toLowerCase() === "michael") {interaction.reply("**__Michael's PC Specs:__**\nCPU: Ryzen 5800x\nGPU: GTX 1080 Ti\nRAM: 16 GB (3200 MHz)\nStorage: Big\nPSU: 750W 80+ Bronze\nMotherboard: B550") }
        // else if(name.toLowerCase() === "pob") {interaction.reply({ embeds: [pobSchedule] }) }
        // else if(name.toLowerCase() === "sofie") {interaction.reply({ embeds: [sofieSchedule] }) }
        else if(name.toLowerCase() === "toby") {interaction.reply("<:bruhmoment:915607627516502036>") }
        else { interaction.reply({ content: `Error 404, ${name} not in database`})}
    },
}

