const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
    console.log(filePath)
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

const guilds = ['771171384901500968','644696367955968010']

guilds.forEach((guildId) => {
    rest.put(Routes.applicationGuildCommands(clientId, guildId ), { body: commands })
	.then(() => console.log(`Successfully registered application commands in guild ${guildId}.`))
	.catch(console.error);
});