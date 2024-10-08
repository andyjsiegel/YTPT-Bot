const fs = require('node:fs');
const path = require('node:path');
// const clipboardy = require('clipboardy')
const { Client, GatewayIntentBits, Collection, Partials, InteractionType, ActivityType, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, ContextMenuCommandBuilder, ApplicationCommandType, EmbedBuilder, AttachmentBuilder } = require('discord.js');
const { token } = require('./config.json');
const { schedules, getName, getTime, getUserObject, createTodayEmbed, checkBDay } = require('./utils.js');
const today = require('./commands/today');
const schedule = require('node-schedule')


const client = new Client({ 
	intents: [
		GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent
	],
	partials: [Partials.Message, Partials.Channel, Partials.Reaction], 
});



client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log(`logged in as ${client.user.tag}!`)
    client.user.setActivity(`Sex 2's Ranked Mode`, { type: ActivityType.Competing });
	
});

client.on('interactionCreate', async interaction => {
	
	const command = client.commands.get(interaction.commandName);

	if(command) {
		try {
			await command.execute(interaction);
			client.user.setActivity(`Sex 2's Ranked Mode`, { type: ActivityType.Competing });
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'Mission failed. We\'ll get em next time.', ephemeral: true });
		}
		return
	}
	
	if(interaction.type === InteractionType.MessageComponent) {
		
		if(interaction.customId === 'getSched') {
			let name = interaction.user.username;
			
			const { aidanSchedule, andySchedule, ashleySchedule, claireSchedule, daSchedule, nickSchedule, michaelSchedule, pobSchedule, sofieSchedule, tobySchedule } = schedules();
			if(name.toLowerCase() === "father_cheddar") {interaction.reply({ embeds: [aidanSchedule], ephemeral: true }) }
			else if(name.toLowerCase() === "zeta") {interaction.reply({ embeds: [andySchedule], ephemeral: true }) }
			else if(name.toLowerCase() === "ghostlyworlds") {interaction.reply({ embeds: [ashleySchedule], ephemeral: true }) }
			else if(name.toLowerCase() === "hello there") {interaction.reply({ embeds: [claireSchedule], ephemeral: true }) }
			else if(name.toLowerCase() === "twivight") {interaction.reply({ embeds: [daSchedule], ephemeral: true }) }
			else if(name.toLowerCase() === "advance") {interaction.reply({ embeds: [nickSchedule], ephemeral: true }) }
			else if(name.toLowerCase() === "demolitiondonut") {interaction.reply({ embeds: [michaelSchedule], ephemeral: true }) }
			else if(name.toLowerCase() === "pobhee") {interaction.reply({ embeds: [pobSchedule], ephemeral: true }) }
			else if(name.toLowerCase() === "isleepy") {interaction.reply({ embeds: [sofieSchedule], ephemeral: true }) }
			else if(name.toLowerCase() === "defenestrat10n") {interaction.reply({ embeds: [tobySchedule], ephemeral: true }) }
		}
		if(interaction.customId === 'workSchedule') {
			// const { todayMessage } = require('./commands/updatetoday')
			await interaction.channel.messages.fetch(interaction.message.id).then(message => {
				if(message.embeds[0].fields[1].value.includes(getName(interaction.user.username))) {
					
					interaction.reply({ content: "You are not working today.", ephemeral: true })
					var currentWorkersArray = message.embeds[0].fields[1].value.split('\n')
					currentWorkersArray.forEach((el, idx, arr) => {

						if(el.includes(getName(interaction.user.username))) {
							arr.splice(arr.indexOf(el),1)
							message.embeds[0].fields[1].value = arr.join('\n')
							if(message.embeds[0].fields[1].value.length > 0) {
								//do nothing
							} else {
								message.embeds[0].fields[1].value = "No one is working today."
							}
							message.edit({embeds: [message.embeds[0]]})
							const botsChannel = client.channels.cache.get('673726915110240269')
							botsChannel.send(`Work Update: **${getName(interaction.user.username)}** is not working today.`)
							fs.writeFileSync('todayEmbed/todayEmbed.json', JSON.stringify(message.embeds[0].toJSON(), null, 2)) 
						} 
					})
					
				} else {
				const modal = new ModalBuilder()
					.setTitle('Shift Hours Input')
					.setCustomId('hoursModal')
				const nameInput = new TextInputBuilder()
					.setCustomId('nameInput')
					.setLabel("What is name?")
					.setValue(getName(interaction.user.username))
					.setStyle(TextInputStyle.Short);
				const hoursInput = new TextInputBuilder()
					.setCustomId('hoursInput')
					.setLabel("What hours are you working?")
					.setValue('5-10 PM')
					.setStyle(TextInputStyle.Short);
				const nameInputRow = new ActionRowBuilder().addComponents(nameInput)
				const hoursInputRow = new ActionRowBuilder().addComponents(hoursInput)
				modal.addComponents(nameInputRow)
				modal.addComponents(hoursInputRow)
				interaction.showModal(modal)
			}
			})
			
		}
		
	}
	if(interaction.type === InteractionType.ModalSubmit) {
		
		if(interaction.customId === 'hoursModal') {

			await interaction.reply({content:'Submission Recieved!',ephemeral: true})
			const hoursWorking = interaction.fields.getTextInputValue('hoursInput')
			const person = interaction.fields.getTextInputValue('nameInput')
			await interaction.channel.messages.fetch(interaction.message.id).then(message => {
				const todayEmbed = message.embeds[0];
				var workField = todayEmbed.fields[1].value;
				workField = workField.split('\n')
					.concat([`${person} is working from ${hoursWorking}.`])
				if(workField.includes("No one is working today.")) { workField.shift() }
				workField = workField.join('\n');
				todayEmbed.fields[1].value = workField;	
				message.edit({ embeds: [todayEmbed]})
				const botsChannel = client.channels.cache.get('673726915110240269')
				botsChannel.send(`Work Update: **${person}** is working today.`)
				fs.writeFileSync('todayEmbed/todayEmbed.json', JSON.stringify(todayEmbed.toJSON(), null, 2)) 
			})
		}
	}
	
});

const heneral = client.channels.cache.get(`763451134290821192`)
const hChannel = client.channels.cache.get(`644696538521665558`)
const shitposts = client.channels.cache.get(`745168260378656768`)
// const schoolChannel = client.channels.cache.get(`667335722814144512`) 


const hameTalk = client.channels.cache.get(`747629100927025223`)

client.on('messageCreate', async message => {
	const schoolChannel = client.channels.cache.get(`667335722814144512`) 
	if(message.content === "ping") {
		message.channel.send("pong");
	} 
	 
	// if(message.content === "secret santa!") {
	// 	// Define names
	// 	const names = ['andy', 'aidan', 'ashley', 'da', 'felix', 'nick', 'michael', 'sofie', 'pob', 'toby'];

	// 	// Function to shuffle array
	// 	const shuffle = (arr) => {
	// 		for (let i = arr.length - 1; i > 0; i--) {
	// 			const j = Math.floor(Math.random() * (i + 1));
	// 			[arr[i], arr[j]] = [arr[j], arr[i]];
	// 		}
	// 		return arr;
	// 	}

	// 	const randomNames = shuffle(names);

	// 	// Match each person with the next one, folding over at the end
	// 	const matches = randomNames.map((name, index) => {
		
	// 	return {
	// 		santa: name,
	// 		receiver: randomNames[index + 1] || randomNames[0],
	// 		userObject: getUserObject(name, client),
	// 	}
		
	// 	});

	// 	// console.log(matches);
	// 	matches.forEach((item, idx) => {
			
	// 		const secretSantaEmbed = new EmbedBuilder()
	// 			.setTitle('Secret Santa!')
	// 			.addFields({name: "Santa", value: item.santa.charAt(0).toUpperCase() + item.santa.substring(1), inline: true},{name: "Receiver", value: item.receiver.charAt(0).toUpperCase() + item.receiver.substring(1), inline: true})
	// 			.setThumbnail('https://i.imgur.com/q8Ejlfj.png')
	// 		if(idx % 2 == 0) {
	// 			secretSantaEmbed.setColor('Red')
	// 		} else {
	// 			secretSantaEmbed.setColor('Green')
	// 		}
	// 		try {
	// 			item.userObject.send({ embeds: [secretSantaEmbed]}) //
	// 		} catch (error) {
	// 			console.log("Send failed for " + item.userObject.username)
	// 		}
	// 	})
	// }
	if(message.content === "<@944070820236521522>") {
		message.channel.send('https://tenor.com/view/summoned-i-have-been-summoned-power-gif-15859341')
	}
	if(message.content.includes("Falls Church City Public Schools Update:")) {
		if(message.embeds[0]) {
			if(message.embeds[0].description.includes("closed today")) {
				schoolChannel.send(`<@&858941110041444375> School is closed!!!\n${message.content.replace('Falls Church City Public Schools Update:','')}`)
			} else {
				message.channel.send("Common FCCPS L")
			}
		} else {
			message.channel.send("Common FCCPS L")
			// message.channel.send("response")
		}
	}
	if(message.content.startsWith('!') && message.content.length > 3) {
		const imEXHAUSTED = new AttachmentBuilder(`https://media.discordapp.net/attachments/1026318046371008592/1068377073430835290/IMG_8685.png`)
		message.reply({content: "WHY ARE PEOPLE USING MESSAGE COMMANDS IN 2023?????", files:[imEXHAUSTED]})
	}
	if(message.content.includes('Sent via [Pipedream]')) {
		message.react('👍')
		const { curDate } = getTime();
		const daytype = message.content.includes('ODD') ? "odd" : "even" 
		let specialday = "";
		if(message.content.toLowerCase().includes('early release')) {
			specialday = "shortday"
		} else if(!message.content.includes('ODD') && !message.content.includes('EVEN')) {
			specialday = "closed"
		}
		const { todayRow, todayEmbed } = await createTodayEmbed(daytype, specialday)
		const heneral = client.channels.cache.get('763451134290821192')
		if(heneral) {
			heneral.send({ embeds: [todayEmbed], components: [ todayRow ] })
			checkBDay(heneral, curDate);
		}
		const todayEmbedData = JSON.stringify(todayEmbed.toJSON(), null, 2)
		const todayRowData = JSON.stringify(todayRow.toJSON(), null, 2)
		fs.writeFileSync('todayEmbed/todayEmbed.json', todayEmbedData)
		fs.writeFileSync('todayEmbed/todayRow.json', todayRowData)
	}
	if(message.content.includes(`https://discord.com/channels/`)) {
		const re = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/
		let link = message.content.match(re)
		link = link[0].split('/')
		// console.log(link);
		//index 4 = guild id
		//index 5 = channel id
		//index 6 = message id
		let channel
		let fetchedMsg
		try {
			channel = client.channels.cache.get(link[5])
			fetchedMsg = await channel.messages.fetch(link[6])
			const messagePreviewEmbed = new EmbedBuilder()
			.setTitle("Message Preview")
			.setAuthor({ name: `${fetchedMsg.author.username}#${fetchedMsg.author.discriminator}`, iconURL: fetchedMsg.author.displayAvatarURL({ extension: 'png' }) })
			.setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' })
			.setTimestamp();
			if(fetchedMsg.attachments) {
				messagePreviewEmbed.setImage(fetchedMsg.attachments.entries().next().value[1].attachment)
			}
			if(fetchedMsg.content) {
				messagePreviewEmbed.setDescription(`**Content:** \`${fetchedMsg.content}\` `)
			}

			message.channel.send({ embeds: [messagePreviewEmbed] })
		} catch {
			message.reply("I don't have access to that guild/channel/message.")
		}
		
		
		
		//channel.messages.fetch(messageid)
	}
	if(message.content.includes('LOGTHIS')) {
		console.log(message.embeds[0].data.video)
	}
	
});

client.login(token);

