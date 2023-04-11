const { ContextMenuCommandBuilder, ApplicationCommandType, AttachmentBuilder } = require("discord.js");
const Canvas = require('@napi-rs/canvas')
const { request } = require('undici');
const applyText = (canvas, text) => {
	const context = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 60;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		context.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (context.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return context.font;
};

function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';

    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);
  }

  function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
      }

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('quote')
        .setType(ApplicationCommandType.Message),
    async execute(interaction) {
            let message = interaction.targetMessage.content
            const canvas = Canvas.createCanvas(700, 250);
		    const context = canvas.getContext('2d');
            const background = await Canvas.loadImage('https://discordjs.guide/assets/canvas-preview.30c4fe9e.png');
           
            
            // This uses the canvas dimensions to stretch the image onto the entire canvas
            context.drawImage(background, 0, 0, canvas.width, canvas.height);
            

            const { body } = await request(interaction.targetMessage.author.displayAvatarURL({ extension: 'jpg' }));
	        const avatar = await Canvas.loadImage(await body.arrayBuffer());
            
            context.font = '40px sans-serif'
            

            // Select the style that will be used to fill the text in
            context.fillStyle = '#ffffff';

            var maxWidth = 400
            var lineHeight = 50
            var x = ( canvas.width - maxWidth ) / 2 
            var y = 60
            wrapText(context, message, canvas.width / 2.5, canvas.height / 3 , maxWidth, lineHeight)
            // Pick up the pen
            context.beginPath();

            // Start the arc to form a circle
            context.arc(125, 125, 100, 0, Math.PI * 2, true);

            // Put the pen down
            context.closePath();

            // Clip off the region you drew on
            context.clip();

            context.drawImage(avatar, 25, 25, 200, 200);
        
            // Use the helpful Attachment class structure to process the file for you
            const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'profile-image.png' });

            interaction.reply({ files: [attachment] });
        }
}