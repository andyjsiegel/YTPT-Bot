const { SlashCommandBuilder } = require('@discordjs/builders');
const { Message, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('userstats')
		.setDescription('Gets cool information about the user')
        .addUserOption(option => option.setName('user').setDescription('Select a role').setRequired(false))
        ,
    async execute(interaction) {
        let selectedMember = interaction.options.getMember('user') || interaction.member;
        let name = selectedMember.user.username;
        let userAvatarURL = selectedMember.user.displayAvatarURL()
        
        let status = ""
        try {
            status = selectedMember.presence.clientStatus;
            status = JSON.stringify(status)
            let statuses = status.split("\"");
            platform = statuses[1];
            realStatus = statuses[3];
            } catch {
                status = "Offline"
                platform = "Desktop";
                realStatus = "Offline";
            }
        
        
        let highestRoleColor = selectedMember.roles.highest.hexColor;
        
        let joinDate = selectedMember.joinedAt.toLocaleDateString();
        let accountCreationDate = selectedMember.user.createdAt.toLocaleDateString();
        
        const infoEmbed = new EmbedBuilder()
            
        infoEmbed.setTitle(`User Information -- ${selectedMember.user.tag}`) 
        infoEmbed.addFields(
            { name: "Date Joined", value: joinDate},
            { name: "Status", value: realStatus.charAt(0).toUpperCase() + realStatus.slice(1)},
            { name: "Platform",value: platform.charAt(0).toUpperCase() + platform.slice(1)}, 
            { name: "Server", value: `${selectedMember.guild.name} (${selectedMember.guild.memberCount} members)`},
            { name: "Account Creation Date", value: accountCreationDate},
            // { name: "Roles", value: interaction.member.roles.cache.map(m => m.name).join('\n') }
        //     { name: "Roles", value: interaction.member.roles.cache
        //     .sort((a, b) => b.position - a.position)
        //     .filter((r) => r.name !== "@everyone")
        //     .map((r) => r.name)
        //     .join(', ')
        // }
        ); 
        var rolesInOrder = selectedMember.roles.cache.sort((a, b) => b.position - a.position).filter((r) => r.name !== "@everyone").map((r) => r.name).join(', ')
        var rolesByCategory = rolesInOrder.split('-')
        // idx 0 = name, idx 2 = normal/gayng, idx 4 = utility roles, idx 6 = game roles, idx 8 = school roles
        
        let typeRole = rolesByCategory[2].split(', ').slice(1, -1).join('\n')
        let utilityRoles = rolesByCategory[4].split(', ').slice(1, -1).join('\n')
        let gameRoles = rolesByCategory[6].split(', ').slice(1, -1).join('\n')
        let schoolRoles = rolesByCategory[8].split(', ').slice(1, -1).join('\n')
        infoEmbed.addFields(
            { name: "Classification", value: typeRole, inline: false },
            { name: "Utility Roles", value: utilityRoles, inline: true },
            { name: "Game Roles", value: gameRoles, inline: true },
            { name: "School Roles", value: schoolRoles, inline: true },
        )

        infoEmbed.setColor(highestRoleColor).setThumbnail(userAvatarURL)
        
        
        interaction.reply({ embeds:[infoEmbed]}) 
        
        if(realStatus === "dnd" && utilityRoles.includes('VC')) {
            interaction.channel.send("Why the FUCK are you on DND while gaming in VC???? WHat is wrong with you?????")
        }
    }
}

// console.log(interaction.member.joinedAt.toLocaleDateString())
//         console.log(interaction.member.presence.clientStatus);
        // let status = interaction.member.presence.clientStatus;
        // status = JSON.stringify(status)
        // let statuses = status.split("\"");
        // console.log(statuses[1]);
        // console.log(statuses[3]);
        