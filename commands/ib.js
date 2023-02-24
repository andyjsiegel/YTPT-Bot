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
      
      const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
      const TOKEN_PATH = path.join(process.cwd(), 'token.json');
      const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

      async function loadSavedCredentialsIfExist() {
        try {
          const content = await fs.readFile(TOKEN_PATH);
          const credentials = JSON.parse(content);
          return google.auth.fromJSON(credentials);
        } catch (err) {
          return null;
        }
      }
            /**
       * Serializes credentials to a file compatible with GoogleAUth.fromJSON.
       *
       * @param {OAuth2Client} client
       * @return {Promise<void>}
       */
      async function saveCredentials(client) {
        const content = await fs.readFile(CREDENTIALS_PATH);
        const keys = JSON.parse(content);
        const key = keys.installed || keys.web;
        const payload = JSON.stringify({
          type: 'authorized_user',
          client_id: key.client_id,
          client_secret: key.client_secret,
          refresh_token: client.credentials.refresh_token,
        });
        await fs.writeFile(TOKEN_PATH, payload);
      }
      
      /**
       * Load or request or authorization to call APIs.
       *
       */
      async function authorize() {
        let client = await loadSavedCredentialsIfExist();
        if (client) {
          return client;
        }
        client = await authenticate({
          scopes: SCOPES,
          keyfilePath: CREDENTIALS_PATH,
        });
        if (client.credentials) {
          await saveCredentials(client);
        }
        return client;
      }
      
            /**
       * Lists the day's events.
       * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
       */
      
      async function listEvents(auth) {
        const calendar = google.calendar({ version: 'v3', auth });
        const todayStart = moment().startOf('day').tz('Etc/UCT');
        const todayEnd = moment().endOf('day').tz('Etc/UCT');
        const res = await calendar.events.list({
          calendarId: 'bsnhu2lsron13tp81hahb13jmpsjm9t1@import.calendar.google.com',
          timeMin: todayStart.toISOString(),
          maxResults: 10,
          singleEvents: true,
          orderBy: 'startTime',
        });
        
        const events = res.data.items;
        
        if (!events || events.length === 0) {
          console.log('No upcoming events found.');
          return `No upcoming events found.`;
        }
        let formattedEvents = 'Today\'s events:\n'
        const yearMonthDay = todayStart.toISOString().split(`T`)[0]
        filteredEvents = events;
        filteredEvents.map((event, i) => {
          const start = event.start.dateTime || event.start.date;
          if(!start.includes(yearMonthDay)) {
            //do nothing
          } else {
            formattedEvents += `${start} - ${event.summary}\n`
          }
        });
        return formattedEvents;
      }
      
      
      interaction.reply(await authorize().then(listEvents).catch(console.error))

    }
}