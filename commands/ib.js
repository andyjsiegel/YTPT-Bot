const { SlashCommandBuilder } = require('@discordjs/builders');
const { AttachmentBuilder } = require('discord.js');
const SchoologyAPI= require('schoologyapi')
const api = new SchoologyAPI('b879a23da0efb6bb648638adf3dfb1ce063bd78af', '1d8f8a25d2a3667c4d5118f594f0c9bd')
const fetch = (...args) =>
	import("node-fetch").then(({ default: fetch }) => fetch(...args));
const https = require("https")
const moment = require('moment-timezone');
const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const {authenticate} = require('@google-cloud/local-auth');
const { google } = require('googleapis');


module.exports = {
    data: new SlashCommandBuilder()
		.setName('ib')
		.setDescription('Collection of IB resources'),
    async execute(interaction) {
      

      
      
      interaction.reply(await authorize().then(listEvents).catch(console.error))

    }
}