const { SlashCommandBuilder } = require('@discordjs/builders');
const { AttachmentBuilder } = require('discord.js');
const SchoologyAPI= require('schoologyapi')
const api = new SchoologyAPI('b879a23da0efb6bb648638adf3dfb1ce063bd78af', '1d8f8a25d2a3667c4d5118f594f0c9bd')
const fetch = (...args) =>
	import("node-fetch").then(({ default: fetch }) => fetch(...args));


module.exports = {
    data: new SlashCommandBuilder()
		.setName('ib')
		.setDescription('Collection of IB resources'),
    async execute(interaction) {
      const updates = await api.request('GET','/recent?with_attachments=1')
      const downloadPath = updates.update[0].attachments.files.file[0].download_path
      console.log(downloadPath)
      const res = await api.request("GET",downloadPath.split("v1")[1])
      console.log(res)
      const imageData = Buffer.from(await res)
      const attachment = new AttachmentBuilder(imageData)
      interaction.reply({content:"Test", files: [attachment] })
      
    }
}