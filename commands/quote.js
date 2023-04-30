const { ContextMenuCommandBuilder, ApplicationCommandType, AttachmentBuilder } = require("discord.js");
const Canvas = require('@napi-rs/canvas')
const { request } = require('undici');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('quote')
        .setType(ApplicationCommandType.Message),
    async execute(interaction) {
            let message = interaction.targetMessage.content
            const canvas = Canvas.createCanvas(1200, 600);
		    const context = canvas.getContext('2d');
            const background = await Canvas.loadImage('https://discordjs.guide/assets/canvas-preview.30c4fe9e.png');
           
            
            // This uses the canvas dimensions to stretch the image onto the entire canvas
            context.drawImage(background, 0, 0, canvas.width, canvas.height);
            

            const { body } = await request(interaction.targetMessage.author.displayAvatarURL({ extension: 'jpg' }));
	        const avatarImage = await Canvas.loadImage(await body.arrayBuffer());
            context.beginPath()
            context.arc(125, 125, 100, 0, Math.PI * 2, true)
            context.closePath()
            context.clip()
            context.drawImage(avatarImage, 25, 25, 200, 200)
             
            context.font = 'bold 40pt Menlo'
            context.fillStyle = 'white'
            context.textAlign = 'center'
            let fontSize = 40
            while (context.measureText(messageContent).width > 900) {
                fontSize -= 2
                context.font = `bold \${fontSize}pt Menlo`
            }
            let lines = []
            let words = messageContent.split(' ')
            let currentLine = words[0]
            for (let i = 1; i < words.length; i++) {
                let word = words[i]
                let width = context.measureText(currentLine + ' ' + word).width
                if (width < 900) {
                    currentLine += ' ' + word
                } else {
                    lines.push(currentLine)
                    currentLine = word
                }
            }
            lines.push(currentLine)
            let lineHeight = fontSize * 1.5
            let y = height / 2 + (lines.length / 2) * lineHeight
            for (let i = 0; i < lines.length; i++) {
                context.fillText(lines[i], width / 2, y)
                y -= lineHeight
            }
           
            const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'profile-image.png' });

            interaction.reply({ files: [attachment] });
        }
}