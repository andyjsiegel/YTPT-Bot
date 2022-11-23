const { Client, Intents, Message, MessageActionRow, Interaction, ButtonInteraction, InteractionCollector } = require('discord.js');
const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES
    ] 
});
const { MessageEmbed } = require('discord.js');
const { MessageButton } = require('discord.js');
String.prototype.equalsIgnoreCase = function (compareString) { return this.toUpperCase() === compareString.toUpperCase(); 
};

returnblock1 = "N/A - Odd Day";
returnblock2 = "N/A - Odd Day";
daytype = "odd";




var block1 = "";
var block2 = "";
var block3 = "";
var block4 = "";
var block5 = "";
var block6 = "";
var block7 = "";
var teacher1 = "";
var teacher2 = "";
var teacher3 = "";
var teacher4 = "";
var teacher5 = "";
var teacher6 = "";
var teacher7 = "";
var name = "";



//DATES

function getTime() {
now = new Date();
bdays = ["May 27","January 14","January 19","February 18","March 31","April 13","April 15","May 5","May 7","June 2","June 5","June 16","July 4","July 16","July 28","August 4","August 18","October 15","October 17","November 2 ","December 6",]
schoolEnd = new Date('6/17/2022');
diffMillis = Math.abs(now - schoolEnd);
diffDays = Math.ceil(diffMillis / (1000 * 60 * 60 * 24) )
timeHours = now.getUTCHours();
timeMinutes = now.getUTCMinutes();  
day = now.getDay();
dayOfMonth = now.getDate();
month = now.getMonth();
ET = timeHours - 4;
uzbek = timeHours + 5;
meridiemET = " AM";
meridiemUZ = " AM";
ETm = timeHours - 4;
year = now.getFullYear();


suffixArray = [
  "st", //1st
  "nd", //2nd
  "rd", //3rd
  "th", //4th
  "th", //5th
  "th", //6th
  "th", //7th
  "th", //8th
  "th", //9th
  "th", //10th
  "th", //11th
  "th", //12th
  "th", //13th
  "th", //14th
  "th", //15th
  "th", //16th
  "th", //17th
  "th", //18th
  "th", //19th
  "th", //20th
  "st", //21st
  "nd", //22nd
  "rd", //23rd
  "th", //24th
  "th", //25th
  "th", //26th
  "th", //27th
  "th", //28th
  "th", //29th
  "th", //30th
  "st" //31st
];
nextday = "";
schoolday = "It's the weekend!";

if(ET>12) {
  ET=ET-12; 
  meridiemET = " PM";
}
if(ET<0) {
  ET=ET+12; 
  meridiemET = " PM";
}


if(uzbek>12&&uzbek<25) {
  uzbek=uzbek-12; 
  meridiemUZ = " PM";
}
if(uzbek>24) {
  uzbek=uzbek-24; 
  meridiemUZ = " AM";
}

daysArray = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
dayArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
monthsArray = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

if(day != 0 && day != 6) {
  if(daytype.equalsIgnoreCase("odd")) {
    schoolday = "Block 1, Block 3, Block 5, Block 7";
  }
  if(daytype.equalsIgnoreCase("even")) {
    schoolday = "Block 2, Block 4, Block 6";
    
  }
}
curDate = monthsArray[month] + " " + dayOfMonth





//close func
}

getTime();

module.exports = {
  getTime
}

function createTodayEmbed() {

  if(day != 0 && day != 6) {
    if(daytype.equalsIgnoreCase("odd")) {
      schoolday = "Block 1, Block 3, Block 5, Block 7";
    }
    if(daytype.equalsIgnoreCase("even")) {
      schoolday = "Block 2, Block 4, Block 6";
    }
  }

  today = new MessageEmbed()
  .setTitle("Today is " + dayArray[day] + ", " + monthsArray[month] + " " + dayOfMonth + suffixArray[dayOfMonth-1] + ", " + year)
  .setColor("BLURPLE")
  .addField(
     "Schedule:", schoolday, true
  )
  .setTimestamp()
  .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

if(daytype.equalsIgnoreCase("even")) {
today.addField("Return Blocks", returnblock1 + " -> " + returnblock2)

}

today.addField( 'Work Schedule', workArray[day] )

if(day === 2) {
  today.addField('Gym Day','Andy, Aidan, and Nick are going to the gym at 5:00 PM.')
} else if(day === 6) {
  today.addField('Gym Day','Andy, Aidan, and Nick are going to the gym at 9:00 AM.')
}

today.setDescription("There are " + diffDays + " days until the end of school.")

}

getSchedule = new MessageActionRow()
  .addComponents(
    new MessageButton()
      .setLabel('Get Schedule')
      .setCustomId('getSched')
      .setStyle('SUCCESS'),
    new MessageButton()
      .setLabel('Lunch Menu')
      .setStyle('LINK')
      .setURL('https://fccps.nutrislice.com/menu/george-mason-high/lunch')
  )








const helpList = new MessageEmbed()
    .setColor(`#18a123`)
    .setTitle("Bot Commands")
    .setDescription("**School Schedules:** !schedule <name>\n**Pet Photos:** !petphoto <petName>*\n**List of Birthdays:** !birthdaylist\n**Play Rock Paper Scissors:** !rps\n**View Normal Time and Michael Time:** !timezones\n**Link to Colleges Spreadsheet:** !college\n**All Short Wednesdays:** !wednesdays\n**PC Specs:** !specs <name>\n**Useful Dates:** !dateslist\n**Spotify Playlists:** !playlist <name>\n**Contact Information:** !contact <name>\n**IB Resources:** !ib\n**YTPT Must Watch List:** !watchlist\n**Quality Apps:** !apps\n**Invite Link:** !invitelink\n**Lunch Menu:** !lunch\n**Team Pace:** !pace <teamName> <currentWins> <currentLosses> <totalGames> [eg. Celtics 27 2 82]")
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

datesList = new MessageEmbed()
    .setColor('#FFD700')
    .setTitle('List of Important Dates')
    .setDescription("May 30th: No School\nJune 4th: SAT\nJune 6th-10th: Risse IOs\nJune 8th: Early Release\nJune 13th-17th: Finals Week - 5 Early Releases (**!lastweek** for details)")
    .setFooter({ text: 'Brought to you by YTPT Bot (New update bolded some of these because yall are dumb AF)', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

//AIDAN EMBEDS
aidanSchedule = new MessageEmbed()
    .setColor('#d0753c')
    .setTitle("Aidan's Schedule")    
    .addFields(
      { name: 'Odd Days', value: '[1] AP Physics\n[3] IB SL English\n[5] IB Music\n[[L] Lunch D](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[7] IB History', inline: true},
      { name: 'Even Days', value: '[2] Band\n[4] IB SL AI Math\n[6] AP Computer Science\n[[L] Lunch A](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)', inline: true},
    )
    .setTimestamp()
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

aidanContact = new MessageEmbed()
    .setColor('#d0753c')
    .setTitle("Aidan")    
    .setDescription('Contact Info')
    .setThumbnail('https://cdn.discordapp.com/emojis/752953671897186304.webp?size=240&quality=lossless')
    .addFields(
      { name: 'Phone Number', value: '919-830-1753'},
      { name: 'Discord', value: 'Father_Cheddar#6969'},
      { name: 'Email', value: 'gillaspyaidan@gmail.com'},
      { name: 'Battle.net', value: 'PapaCheese#11594'},
      { name: 'Steam', value: 'Father_Cheddar'}
    )
    
    .setTimestamp()
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

//ANDY EMBEDS
andySchedule = new MessageEmbed()
    .setColor('#5acafa')
    .setTitle("Andy's Schedule")    
    .addFields(
      { name: 'Odd Days', value: '[1] AP Physics\n[3] IB SL AA Math\n[5] Study Block\n[[L] Lunch B](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[7] PF/Economics', inline: true},
      { name: 'Even Days', value: '[2] IB Computer Science\n[4] IB SL English\n[6] Government\n[[L] Lunch B](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)', inline: true},
    )
    .setTimestamp()
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

andyContact = new MessageEmbed()
    .setColor('#5acafa')
    .setTitle("Andy")    
    .setDescription('Contact Info')
    .setThumbnail('https://cdn.discordapp.com/emojis/759289782026108938.webp?size=240&quality=lossless')
    .addFields(
      { name: 'Phone Number', value: '202-746-9323'},
      { name: 'Discord', value: 'Zeta#6969'},
      { name: 'Email', value: 'mastercrafter171@gmail.com'},
      { name: 'Battle.net', value: 'Zeta#12138'},
      { name: 'Steam', value: 'Zeta'}
    )
    .setTimestamp()
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });
//ASHLEY EMBEDS

ashleySchedule = new MessageEmbed()
    .setColor('#8c5cca')
    .setTitle("Ashley's Schedule")    
    .addFields(
      { name: 'Odd Days', value: '[1] PF/Economics\n[3] Film Studies\n[5] History\n[[L] Lunch B](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[7] Study Block', inline: true},
      { name: 'Even Days', value: "[2] Astronomy\n[4] Algebra II\n[6] IB HL English\n[[L] Lunch A](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)", inline: true},
    )
    .setTimestamp()
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

ashleyContact = new MessageEmbed()
    .setColor('#8c5cca')
    .setTitle("Ashley")    
    .setDescription('Contact Info')
    .setThumbnail('https://cdn.discordapp.com/emojis/731090114784264203.webp?size=240&quality=lossless')
    .addFields(
      { name: 'Phone Number', value: '571-471-0500'},
      { name: 'Discord', value: 'ghostlywords#0216'},
      { name: 'Email', value: 'idfk'},
      { name: 'Steam', value: 'Ghostly Words'}
    )
    .setTimestamp()
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

//CLAIRE EMBEDS

claireSchedule = new MessageEmbed()
    .setColor('#4900f2')
    .setTitle("Claire's Schedule")    
    .addFields(
      { name: 'Odd Days', value: '[1] Creative Writing\n[3] IB SL AA Math\n[5] IB Music\n[[L] Lunch D](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[7] Study Block', inline: true},
      { name: 'Even Days', value: "[2] Band\n[4] Astronomy\n[6] IB SL English\n[[L] Lunch A](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)", inline: true},
    )
    .setTimestamp()
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

claireContact = new MessageEmbed()
    .setColor('#4900f2')
    .setTitle("Claire")    
    .setDescription('Contact Info')
    .setThumbnail('https://cdn.discordapp.com/emojis/731090114784264203.webp?size=240&quality=lossless')
    .addFields(
      { name: 'Phone Number', value: '571-395-5324'},
      { name: 'Discord', value: 'hello there#8225'},
      { name: 'Email', value: 'idfk'},
      { name: 'Steam', value: 'idfk, again'},
    )
    .setTimestamp()
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

//DA EMBEDS
daSchedule = new MessageEmbed()
    .setColor('#f2bdcf')
    .setTitle("Da's Schedule")    
    .addFields(
      { name: 'Odd Days', value: '[1] AP Physics\n[3] IB SL AA Math\n[5] IB Music\n[[L] Lunch D](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[7] IB History', inline: true},
      { name: 'Even Days', value: '[2] Band\n[4] PF/Economics\n[6] IB HL English\n[[L] Lunch B](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)', inline: true},
    )
    .setTimestamp()
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

daContact = new MessageEmbed()
    .setColor('#f2bdcf')
    .setTitle("Da")    
    .setDescription('Contact Info')
    .setThumbnail('https://cdn.discordapp.com/emojis/755796906382327848.webp?size=240&quality=lossless')
    .addFields(
      { name: 'Phone Number', value: '703-795-3533'},
      { name: 'Discord', value: 'þorn#6690'},
      { name: 'Email', value: 'danielfried05@gmail.com'},
      { name: 'Battle.net', value: 'DFKronos#1333'},
      { name: 'Steam', value: 'dfkronos'},
      
    )
    .setTimestamp()
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });
 
//NICK EMBEDS   
nickSchedule = new MessageEmbed()
    .setColor('#ffffff')
    .setTitle("Nick's Schedule")    
    .addFields(
      { name: 'Odd Days', value: '[1] AP Physics\n[3] IB HL English\n[5] Study Block\n[[L] Lunch D](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[7] HyC PF/Economics', inline: true},
      { name: 'Even Days', value: '[2] IB History\n[4] IB SL AI Math\n[6] AP Computer Science\n[[L] Lunch A](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)', inline: true},
    )
    .setTimestamp()
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });
    
nickContact = new MessageEmbed()
    .setColor('#ffffff')
    .setTitle("Nick")    
    .setDescription('Contact Info')
    .setThumbnail('https://cdn.discordapp.com/emojis/944738433916608603.webp?size=240&quality=lossless')
    .addFields(
      { name: 'Phone Number', value: '571-425-6609'},
      { name: 'Discord', value: 'Advance#4368'},
      { name: 'Email', value: 'nicholas.a.huber@gmail.com'},
      { name: 'Battle.net', value: 'Advance#11101'},
      { name: 'Steam', value: 'Advance'},
      
    )
    .setTimestamp()
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

//MICHAEL EMBEDS
michaelSchedule = new MessageEmbed()
    .setColor('#bd194d')
    .setTitle("Michael's Schedule")    
    .addFields(
      { name: 'Morning Routine', value: 'Step 1: Wake up\nStep 2: <:hh:810653717690318918>\nStep 3: Shit\nStep 4: Get out of bed 😎', inline: true},
      
    )
    .setTimestamp()
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

michaelContact = new MessageEmbed()
    .setColor('#bd194d')
    .setTitle("Michael")    
    .setDescription('Contact Info')
    .setThumbnail('https://cdn.discordapp.com/emojis/836404047133147157.webp?size=240&quality=lossless')
    .addFields(
      { name: 'Phone Number', value: '571-337-0894'},
      { name: 'Discord', value: 'DemolitionDonut#7650'},
      { name: 'Email', value: 'mycutekittyface@gmail.com'},
      { name: 'Battle.net', value: 'DemoDonut#1878'},
      { name: 'Steam', value: 'Squeaky_Puffin'},
      
    )
    .setTimestamp()
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

//SOFIE EMBEDS
sofieSchedule = new MessageEmbed()
    .setColor('#63b692')
    .setTitle("Sofie's Schedule")    
    .addFields(
      { name: 'Odd Days', value: '[1] Creative Writing\n[3] Algebra II\n[5] IB Music\n[[L] Lunch D](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[7] Environmental Science', inline: true},
      { name: 'Even Days', value: '[2] IB History\n[4] Study Block\n[6] IB HL English\n[[L] Lunch B](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)', inline: true},
    )
    .setTimestamp()
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

sofieContact = new MessageEmbed()
    .setColor('#53aa80')
    .setTitle("Sofie")    
    .setDescription('Contact Info')
    .setThumbnail('https://cdn.discordapp.com/emojis/752952940049989694.webp?size=240&quality=lossless')
    .addFields(
      { name: 'Phone Number', value: '703-598-6032'},
      { name: 'Discord', value: 'iSleepy#4602'},
      { name: 'Email', value: 'idfk'},
      { name: 'Battle.net', value: 'iSleepy#11585'},
      { name: 'Steam', value: 'Yellow_Stars'},
      
    )
    .setTimestamp()
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

//POB EMBEDS
pobSchedule = new MessageEmbed()
    .setColor('#ead16b')
    .setTitle("Pob's Schedule")    
    .addFields(
      { name: 'Odd Days', value: '[1] AP Physics\n[3] IB SL AA Math\n[5] IB Music\n[[L] Lunch D](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[7] History', inline: true},
      { name: 'Even Days', value: '[2] Band\n[4] IB SL English\n[6] IB Pyschology\n[[L] Lunch B](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)', inline: true},
    )
    .setTimestamp()
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

pobContact = new MessageEmbed()
    .setColor('#ead16b')
    .setTitle("Pob")    
    .setDescription('Contact Info')
    .setThumbnail('https://cdn.discordapp.com/emojis/752952822370271343.webp?size=240&quality=lossless')
    .addFields(
      { name: 'Phone Number', value: '571-326-7644'},
      { name: 'Discord', value: 'pobhee#1348'},
      { name: 'Email', value: 'phoebedawg123@gmail.com'},
      { name: 'Battle.net', value: 'pobhee#1928'},
      { name: 'Steam', value: 'Pobhee'},
      
    )
    .setTimestamp()
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

//TOBY EMBEDS
tobySchedule = new MessageEmbed()
    .setColor('#df1b1e')
    .setTitle("Toby's Schedule")    
    .addFields(
      { name: 'Odd Days', value: '[1] Study Block\n[3] IB SL AI Math\n[5] IB HL English\n[[L] Lunch A](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[7] HyC PF/Economics', inline: true},
      { name: 'Even Days', value: '[2] IB History\n[4] Spanish\n[6] AP Physics\n[[L] Lunch A](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)', inline: true},
    )
    .setTimestamp()
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

tobyContact = new MessageEmbed()
    .setColor('#df1b1e')
    .setTitle("Toby")    
    .setDescription('Contact Info')
    .setThumbnail('https://cdn.discordapp.com/emojis/896622971500757033.webp?size=240&quality=lossless')
    .addFields(
      { name: 'Phone Number', value: '703-712-6049'},
      { name: 'Discord', value: 'DEFENESTRAT10N#2997'},
      { name: 'Discord Alt', value: 'built different#9550'},
      { name: 'Email', value: 'idfk'},
    )
    .setTimestamp()
    .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

  lastWeekSchedule = new MessageEmbed()
      .setColor('DARK_VIVID_PINK')
      .setTitle("Last Week of School Schedule")
      .setDescription("-")
      .addFields( 
        { name: 'Monday, June 13th', value: 'Block 1: 8:05 - 9:55\nBreak: 9:55 - 10:20\nBlock 2: 10:20 - 12:10\n-' },
        { name: 'Tuesday, June 14th', value: 'Block 1: 8:05 - 9:55\nBreak: 9:55 - 10:20\nBlock 2: 10:20 - 12:10\n-' },
        { name: 'Wednesday, June 15th', value: 'Block 1: 8:05 - 9:55\nBreak: 9:55 - 10:20\nBlock 2: 10:20 - 12:10\n-' },
        { name: 'Thursday, June 16th', value: 'Block 1: 8:05 - 9:55\nBreak: 9:55 - 10:20\nBlock 2: 10:20 - 12:10\n-' },
        { name: 'Friday, June 17th', value: 'All classes in sequential order (1,2,3,etc)' }
      )
      .setTimestamp()
      .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });

      tripSchedule = new MessageEmbed()
      .setColor('ORANGE')
      .setTitle("Trip Schedule")
      .setDescription("Peeps on Trips")
      .addFields( 
        { name: 'Andy', value: 'June 23rd - 27th', },
        { name: 'Da', value: 'June 18th - 21st\nAugust 5th - 19th' },
        { name: 'Sofie', value: 'July 31st to August 22nd' },
        { name: 'Nick', value: 'July 16th - July 23rd' },
        { name: 'Ashley', value: 'June 26th - July 22nd'},
        { name: 'Pob', value: 'Week of July 4th\nAugust 15th - 19th'},
        { name: 'Claire', value: 'June 26th - July 9th\nJuly 24th - 31st'},
      )
      .setTimestamp()
      .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });


function removeCharAt(i, str) {
  str = str.substring(0, i) + " " + str.substring(i+1);
  return str;
}
      



console.log(daysArray[day] + ", " + monthsArray[month] + " " + dayOfMonth + suffixArray[dayOfMonth-1] + ", " + year);

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}!`)
    client.user.setPresence({ activities: [{ name: 'Sex 2' }], status: 'online' });
    client.user.setActivity('Sex 2\'s Ranked Mode', { type: 'COMPETING' });
    let message = "**H**"
    let hChannel = client.channels.cache.get('644696538521665558') //#h
    // if(hChannel) {
    //   hChannel.send(message)
    // }
    let botUpdateChannel = client.channels.cache.get('771171384901500972')
    if(botUpdateChannel) {
      
    }

  })

  function checkBDay(bdayUpdateChannel, curDate) {
    if(bdays.includes(curDate)) { 
      switch(curDate) {
        case "January 14": 
            if(bdayUpdateChannel) {            
              bdayUpdateChannel.send("Hey @everyone, it's Scout's Birthday!")
            }
          break;
        case "January 19": 
          console.log("Da")
          if(bdayUpdateChannel) {            
            bdayUpdateChannel.send("Hey @everyone, it's Da's Birthday!")
          }
          break;
        case "February 18": 
          console.log("YTPT Bot")
          if(bdayUpdateChannel) {            
            bdayUpdateChannel.send("Hey @everyone, it's YTPT Bot's Birthday!")
          }
          break;
        case "March 31": 
          console.log("Michael")
          if(bdayUpdateChannel) {            
            bdayUpdateChannel.send("Hey @everyone, it's Michael's Birthday!")
          }
          break;
        case "April 13": 
          console.log("Sunny")
          if(bdayUpdateChannel) {            
            bdayUpdateChannel.send("Hey @everyone, it's Sunny's Birthday!")
          }
          break;
        case "April 15": 
          console.log("Nick")
          if(bdayUpdateChannel) {            
            bdayUpdateChannel.send("Hey @everyone, it's Nick's Birthday!")
          }
          break;
        case "May 5": 
          console.log("Blue The Cat")
          if(bdayUpdateChannel) {            
            bdayUpdateChannel.send("Hey @everyone, it's Blue The Cat's Birthday!")
          }
          break;
        case "May 7": 
          console.log("Ozzy")
          if(bdayUpdateChannel) {            
            bdayUpdateChannel.send("Hey @everyone, it's Ozzy's Birthday!")
          }
          break;
        case "June 2": 
          console.log("Ashley")
          if(bdayUpdateChannel) {            
            bdayUpdateChannel.send("Hey @everyone, it's Ashley's Birthday!")
          }
          break;
        case "June 5": 
          console.log("Willie")
          if(bdayUpdateChannel) {            
            bdayUpdateChannel.send("Hey @everyone, it's Willie's Birthday!")
          }
          break;
        case "June 16 ": 
          console.log("Blue The Dog")
          if(bdayUpdateChannel) {            
            bdayUpdateChannel.send("Hey @everyone, it's Blue The Dog's Birthday!")
          }
          break;
        case "July 4": 
          console.log("Liza")
          if(bdayUpdateChannel) {            
            bdayUpdateChannel.send("Hey @everyone, it's Liza's Birthday!")
          }
          break;
        case "July 16": 
          console.log("Aidan")
          if(bdayUpdateChannel) {            
            bdayUpdateChannel.send("Hey @everyone, it's Aidan's Birthday!")
          }
          break;
        case "July 28": 
          console.log("Andy")
          if(bdayUpdateChannel) {            
            bdayUpdateChannel.send("Hey @everyone, it's Andy's Birthday!")
          }
          break;
        case "August 4": 
          console.log("Sofie")
          if(bdayUpdateChannel) {            
            bdayUpdateChannel.send("Hey @everyone, it's Sofie's Birthday!")
          }
          break;
        case "August 18": 
          console.log("Claire")
          if(bdayUpdateChannel) {            
            bdayUpdateChannel.send("Hey @everyone, it's Claire's Birthday!")
          }
          break;
        case "October 15": 
          console.log("Lula")
          if(bdayUpdateChannel) {            
            bdayUpdateChannel.send("Hey @everyone, it's Lula's Birthday!")
          }
          break;
        case "October 17": 
          console.log("Tano")
          if(bdayUpdateChannel) {            
            bdayUpdateChannel.send("Hey @everyone, it's Tano's Birthday!")
          }
          break;
        case "November 2": 
          console.log("Toby")
          if(bdayUpdateChannel) {            
            bdayUpdateChannel.send("Hey @everyone, it's Toby's Birthday!")
          }
          break;
        case "December 6": 
          console.log("Pob")
          if(bdayUpdateChannel) {            
            bdayUpdateChannel.send("Hey @everyone, it's Pob's Birthday!")
          }
          break;
      }
    }
  }
  function getMySchedule() {
    if(msg.author.username === "Father_Cheddar") {  
      msg.channel.send({ embeds: [aidanSchedule] })
    }  
  
  if(msg.author.username === "zeta") {
      msg.channel.send({ embeds: [andySchedule] })
    }
  
  if(msg.author.username === "ghostlywords") {
      msg.channel.send({ embeds: [ashleySchedule] })
  }
  
  if(msg.author.username === "hello there") {
      msg.channel.send({ embeds: [claireSchedule] })
    }
  
  if(msg.author.username === "twivight") {
      msg.channel.send({ embeds: [daSchedule] })
    }
  
  if(msg.author.username === "Advance") {
      msg.channel.send({ embeds: [nickSchedule] })
    }
  
  if(msg.author.username === "DemolitionDonut") { 
      msg.channel.send("https://imgur.com/a/VVCvlqE")
  }
  
  if(msg.author.username === "iSleepy") {
      msg.channel.send({ embeds: [sofieSchedule] })
    }

  if(msg.author.username === "pobhee") {
      msg.channel.send({ embeds: [pobSchedule] })
    }
  
  if(msg.author.username === "DEFENESTRAT10N" || msg.author.username === "built different") {
      msg.channel.send({ embeds: [tobySchedule] })
    }
  }
  
  client.on("messageCreate", async (msg) => {
    if(msg.content.startsWith("!")) {
      let inputter = msg.author.username;
      const args = msg.content.slice(1).split(/ +/)
      let commandName = args.shift().toLowerCase()
      console.log(commandName);
      let command;
      try { command = require('./commands/' + commandName); } catch (error) { console.log(`${inputter} tried to execute "${commandName}". it is not a command.`); }
      try {
        await command.execute(msg, ...args)
      } catch (error) {
        console.error(error);
        msg.reply("Hmm, something went wrong.")
      }
  }
  {
    //YOURSCHEDULE
  // if(msg.content === "!schedule") {
  //   getMySchedule()
  // } 
  //SCHEDULECHECK
  
    // if(msg.content.equalsIgnoreCase("!schedule Aidan")) {
    //   msg.channel.send({ embeds: [aidanSchedule] }) 
    // }
    // if(msg.content.equalsIgnoreCase("!schedule Andy")) {
    //   msg.channel.send({ embeds: [andySchedule] }) 
    // }
    // if(msg.content.equalsIgnoreCase("!schedule Ashley")) {
    //   msg.channel.send({ embeds: [ashleySchedule] }) 
    // }
    // if(msg.content.equalsIgnoreCase("!schedule Claire")) {
    //   msg.channel.send({ embeds: [claireSchedule] }) 
    // }
    // if(msg.content.equalsIgnoreCase("!schedule Da")) {
    //   msg.channel.send({ embeds: [daSchedule] }) 
    // }
    // if(msg.content.equalsIgnoreCase("!schedule Nick")) {
    //   msg.channel.send({ embeds: [nickSchedule] }) 
    // }

    // if(msg.content.equalsIgnoreCase("!schedule Michael")) {
    //   msg.channel.send({ embeds: [michaelSchedule] }) 
      
    // }
    // if(msg.content.equalsIgnoreCase("!schedule Pob")) {
    //   msg.channel.send({ embeds: [pobSchedule] }) 
      
    // }
    //  if(msg.content.equalsIgnoreCase("!schedule Sofie")) {
    //   msg.channel.send({ embeds: [sofieSchedule] }) 
      
    // }
    //  if(msg.content.equalsIgnoreCase("!schedule Toby")) {
    //   msg.channel.send({ embeds: [tobySchedule] }) 
      
    //  }
    // if(msg.content === "!dateslist") {
    //   msg.channel.send({ embeds: [datesList] }) 
    // }
    // // if(msg.content === "!dates") {
    // //   msg.channel.send({ embeds: [datesList] }) 
    // // }
    
    //LUNCH
    // if(msg.content === "!lunch") {
    //     msg.channel.send("https://fccps.nutrislice.com/menu/george-mason-high/lunch")
    // }
    //RETURN BLOCKS
  // if(msg.content === "!return") {
  //   msg.channel.send("**__Return Blocks Today:__**\n- 1:30 - 2:15: " + returnblock1 + "\n- 2:15 - 3:00: " + returnblock2 )
  // }
    //WORK SCHEDULES
  //   if(msg.content === "!workschedule") {
  //     msg.channel.send("Correct format: !workschedule <name>")
  //       }
  //   if(msg.content.equalsIgnoreCase("!workschedule Nick")) {
  //     msg.channel.send("Nick works **Thursdays** and **Fridays** from **5-10 PM** and **Sundays** from **4-9 PM**.")
  //       }
  // if(msg.content.equalsIgnoreCase("!workschedule Aidan")) {
  //     msg.channel.send("Aidan works **Mondays** and **Wednesdays** from **5-10 PM** and works from **12-4 PM** on **Saturdays** and **Sundays**.")
  //       }
  //   if(msg.content.equalsIgnoreCase("!workschedule Sofie")) {
  //     msg.channel.send("Sofie's work schedule varies from week to week.")
  //   }
  //   if(msg.content.equalsIgnoreCase("!workschedule Pob")) {
  //     msg.channel.send("Pob's work schedule varies from week to week.")
  //   }

    // if(msg.content.startsWith("!lastweek")) {
    //   msg.channel.send({ embeds: [lastWeekSchedule] })
    // }
    // if(msg.content.startsWith("!tripschedule")) {
    //   msg.channel.send({ embeds: [tripSchedule] })
    // }
    //PET PICTURE COMMANDS
  //   if(msg.content.startsWith("!petphoto")) {
  //     petName = msg.content.split("!petphoto ")[1]
  //   //PICTURES
  //   if(petName) {
  //     petName = petName.toLowerCase();
  //     if(petName === "scout") {    
  //       msg.channel.send("https://media.discordapp.net/attachments/747629100927025223/945457763901898762/20211128_074212.jpg")    
  //     }
  //     if(petName === "tano") { 
  //       msg.channel.send("https://media.discordapp.net/attachments/747629100927025223/944336770122788894/F758321A-84BA-4163-BE92-C5555301D03B.jpg?width=854&height=1139")
  //     }
  //     if(petName === "jacques") {
  //       msg.channel.send("https://cdn.discordapp.com/attachments/771171384901500972/944342431401402378/20210627_142951.mp4")
  //     }
  //     if(petName === "liza") { 
  //       msg.channel.send("https://media.discordapp.net/attachments/747629100927025223/944422941083435048/IMG_20210916_223307.jpg?width=901&height=676")
  //     }
  //     if(petName === "lula" ) {
  //       msg.channel.send("https://media.discordapp.net/attachments/771171384901500972/944343407973761074/image02.jpg?width=854&height=1139")
  //     } 
  //     if(petName === "bluecat" ) {
  //       msg.channel.send("https://media.discordapp.net/attachments/771171384901500972/944422731292770324/20200901_133950.jpg?width=507&height=676")
  //     }
  //     if(petName === "sunny" ) {
  //       msg.channel.send("https://media.discordapp.net/attachments/747629100927025223/944423159841587250/A210D4B1-F3BE-46D4-8F61-B1B0E8F1007A.jpg?width=507&height=676")
  //     }
  //     if(petName === "bluedog" ) {
  //       msg.channel.send("https://media.discordapp.net/attachments/747629100927025223/944423276531290175/C54B9E46-39B5-47A2-A739-F505AABF04E5.jpg?width=901&height=676")
  //     }
  //     if(petName === "lexi") { 
  //       msg.channel.send("https://media.discordapp.net/attachments/747629100927025223/945457492543045733/20220123_201608.jpg?width=512&height=1138")
  //   }
  //     if(petName === "willie") {  
  //       msg.channel.send("https://media.discordapp.net/attachments/885724281621843968/945457515578155028/7A1CF7AA-4EC9-4E6A-9B16-F2D258533F25.jpg?width=688&height=1136")
  //   }
  //     if(petName === "luna") {   
  //       msg.channel.send("https://media.discordapp.net/attachments/885724281621843968/945457480069152768/E8CD7BEC-2120-4E4C-9510-5D0EED8A7F27.jpg?width=854&height=1139")
  //     }
  //     if(petName === "ozzy") {
  //       msg.channel.send("https://media.discordapp.net/attachments/885724281621843968/948951015892336700/IMG_8306.PNG?width=526&height=1138")
  //     }
  //     if(petName === "cersi") {
  //       msg.channel.send("https://media.discordapp.net/attachments/673726915110240269/981001474228228096/3C2A5D1C-014C-4B1C-AC06-1B4A70EC5B8F.jpg?width=854&height=1139")
  //     }
  //     if(petName === "firefly") {
  //       msg.channel.send("https://media.discordapp.net/attachments/673726915110240269/981001612128550963/9969D526-D552-4B92-9044-3A30FFCE34AE.jpg?width=854&height=1139")
  //     }
  // } else {
  //   msg.channel.send("Correct format: !petphoto <petName>\n\nPets: Scout, Tano, Jacques, Liza, Lula, BlueCat, Sunny, BlueDog, Lexi, Willie, Luna, Ozzy, Cersi, Firefly")
  // }

  // }
    //BIRTHDAYLIST
    // if(msg.content === "!birthdaylist") {
      
    // }
    //ROCK PAPER SCISSORS GAME
  
    // const rpsButtons = new MessageActionRow()
    //       .addComponents(
    //         new MessageButton()
    //           .setCustomId('rock')
    //           .setLabel('ROCK')
    //           .setEmoji('🗿')
    //           .setStyle('SECONDARY'),
    //         new MessageButton()
    //           .setCustomId('paper')
    //           .setLabel('PAPER')
    //           .setEmoji('🧻')
    //           .setStyle('SECONDARY'),
    //         new MessageButton()
    //           .setCustomId('scissors')
    //           .setLabel('SCISSORS')
    //           .setEmoji('✂️')
    //           .setStyle('SECONDARY'),
            
    //       );
    // const rpsEmbed = new MessageEmbed()
    //   .setTitle("__THE MOST COMPLEX GAME YOU HAVE EVER SEEN__")
    //   .setDescription("THREE ENTIRELY DISTINCT CHOICES, WHO WILL WIN?")
    //   .setFields(
    //     { name: "Rock 🗿", value: "Old, but still trusty and reliable. Don't doubt the rock.", inline: true},
    //     { name: "Paper 🧻", value: "Has a steep learning curve, but deadly when utilized correctly.", inline: true},
    //     { name: "Scissors ✂️", value: "Extremely dangerous yet also weak, a glass cannon.", inline: true}
        
    //   )
    //   .setColor("#cccccc")
    //   .setTimestamp()
    //   .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });
      
    
    // if(msg.content === "!rps") {
    //   rpsRef = await msg.reply({ embeds:[rpsEmbed], components: [rpsButtons] })
    
    // }
     //TIME ZONES
  //    if(msg.content === "!timezones") {
  //     getTime()
  //     const timeZones = new MessageEmbed()
  //       .setColor("#107fc4")
  //       .setTitle("Time Zones")
  //       .setTimestamp()
  //       .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });
       
        
  //     if(timeMinutes < 10) {
  //       timeZones.setDescription("Normal Time: " + ET + ":0" + timeMinutes + meridiemET + "\nMichael Time: " + uzbek + ":0" + timeMinutes + meridiemUZ + "\n**Pob Time:** " + ETm + ":0" + timeMinutes)
  //       timeZones.addFields(
  //         { name: "**Normal Time**", value: ET + ":0" + timeMinutes + meridiemET, inline: true },
  //         { name: "**Michael Time**", value: uzbek + ":0" + timeMinutes + meridiemUZ, inline: true },
  //         { name: "**Pob Time**", value: ETm + ":0" + timeMinutes, inline: true }
  //       )
  //     }
  // else {
  //   timeZones.setDescription("**Normal Time:** " + ET + ":" + timeMinutes + meridiemET + "\n**Michael Time:** " + uzbek + ":" + timeMinutes + meridiemUZ + "\n**Pob Time:** " + ETm + ":" + timeMinutes)
  //   timeZones.addFields(
  //     { name: "**Normal Time**", value: ET + ":" + timeMinutes + meridiemET, inline: true },
  //     { name: "**Michael Time**", value: uzbek + ":" + timeMinutes + meridiemUZ, inline: true },
  //     { name: "**Pob Time**", value: ETm + ":" + timeMinutes, inline: true },
  //   )
  //   }
  //   msg.channel.send({ embeds: [timeZones] }) 
  // }
  
    
   
    //COLLEGE
  // if(msg.content === "!college") { msg.channel.send("https://docs.google.com/spreadsheets/d/1Dieyc8ww6XS9a7pbyF79597weyMvIXNoBxes1mz3vho/edit?usp=sharing")
  // }
  
    //EARLY RELEASE WEDNESDAYS
  // if(msg.content === "!wednesdays") {
  //   msg.channel.send("**__Early Release Wednesdays:__**\n- September 29th\n- October 13th\n- December 1st\n- January 12th\n- February 9th\n- March 16th\n- April 27th\n- May 18th\n- June 8th\n- June 13th, 14th, 15th, 16th, 17th")
  // }
  }
  //PC SPECS
  // if(msg.content === "!specs") {
  //   msg.channel.send("Correct format: !specs <name>")
  // }
  // if(msg.content.equalsIgnoreCase("!specs Andy")) {
  //   msg.channel.send("**__Andy's PC Specs:__**\nCPU: i7-9700f\nGPU: RTX 2060 Super\nRAM: 16 GB\nStorage: 1.5 TB")
  // }
  // if(msg.content.equalsIgnoreCase("!specs Da")) {
  //   msg.channel.send("**__Da's PC Specs:__**\nCPU: i7-9700f\nGPU: RTX 2060 Super\nRAM: 16 GB (2667 MHz)\nStorage: 2.5 TB")
  // }
  // if(msg.content.equalsIgnoreCase("!specs Nick")) {
  //   msg.channel.send("**__Nick's PC Specs:__**\nCPU: Ryzen 3700x\nGPU: RTX 2060 Super\nRAM: 32 GB (4600 MHz)\nStorage: 2.5 TB\nPSU: 850W 80+ Platinum\nMotherboard: X570\n**__Laptop Specs__**:\nCPU: Ryzen 5900hx\nGPU: RTX 3060\nRAM: 16 GB (3200 MHz)\nStorage: 1.5 TB")
  // }
  // if(msg.content.equalsIgnoreCase("!specs Michael")) {
  //   msg.channel.send("**__Michael's PC Specs:__**\nCPU: Ryzen 5800x\nGPU: GTX 1080 Ti\nRAM: 16 GB (3200 MHz)\nStorage: Big\nPSU: 750W 80+ Bronze\nMotherboard: B550")
  // }
  // if(msg.content.equalsIgnoreCase("!specs Aidan")) {
  //   msg.channel.send("**__Aidan's PC Specs:__**\nCPU: Ryzen 5800x\nGPU: RTX 2060 Super\nRAM: 16 GB (3200 MHz)\nStorage: Big\nPSU: 750W 80+ Gold\nMotherboard: B550")
  // }
  //   if(msg.content.equalsIgnoreCase("!specs Toby")) {
  //     msg.channel.send("<:bruhmoment:915607627516502036>")
  //   }
  //REMOVAL OF FORBIDDEN LETTER
  if(msg.content === "G") {
    msg.delete()
  }
  if(msg.content === "g") {
    msg.delete()
  }
  
  //SPOTIFY PLAYLISTS
  // if(msg.content === "!playlist") {
  //  msg.channel.send("Correct format: !playlist <name>") 
  // }
  // if(msg.content.equalsIgnoreCase("!playlist Da")) {
  //   msg.channel.send("**__Da's Playlist:__**\nhttps://open.spotify.com/playlist/0DuCccHYqLMGTNtUrdNkKu?si=74i1Mg5vTpeGSp5ZEIEMuw&utm_source=copy-link")
  // }
  // if(msg.content.equalsIgnoreCase("!playlist Nick")) {
  //   msg.channel.send("**__Nick's Playlist:__**\nhttps://open.spotify.com/playlist/7wRPM1gKZbZ7GtiUyqSFYv?si=xcH3nMGuQA67ZSrIpipkeA&utm_source=copy-link")
  // }
  // if(msg.content.equalsIgnoreCase("!playlist Andy")) {
  //   msg.channel.send("**__Andy's Playlist:__**\nhttps://open.spotify.com/playlist/1XjuQ8VrxJfch8rWocjcno?si=319b4da43add4cac")
  // }
  // //CONTACT INFO
  // if(msg.content.equalsIgnoreCase("!contact")) {
  //   msg.channel.send("Correct Format: !contact <name>")
  // }
  // if(msg.content.equalsIgnoreCase("!contact Aidan")) {
  //   msg.channel.send({ embeds: [aidanContact] }) 
  // } 
  // if(msg.content.equalsIgnoreCase("!contact Andy")) {
  //   msg.channel.send({ embeds: [andyContact] }) 
  // } 
  // if(msg.content.equalsIgnoreCase("!contact Ashley")) {
  //   msg.channel.send({ embeds: [ashleyContact] }) 
  // } 
  // if(msg.content.equalsIgnoreCase("!contact Claire")) {
  //   msg.channel.send({ embeds: [claireContact] }) 
  // } 
  // if(msg.content.equalsIgnoreCase("!contact Da")) {
  //   msg.channel.send({ embeds: [daContact] }) 
  // } 
  // if(msg.content.equalsIgnoreCase("!contact Nick")) {
  //   msg.channel.send({ embeds: [nickContact] }) 
  // } 
  // if(msg.content.equalsIgnoreCase("!contact Michael")) {
  //   msg.channel.send({ embeds: [michaelContact] }) 
  // }
  // if(msg.content.equalsIgnoreCase("!contact Pob")) {
  //   msg.channel.send({ embeds: [pobContact] }) 
  // } 
  // if(msg.content.equalsIgnoreCase("!contact Sofie")) {
  //   msg.channel.send({ embeds: [sofieContact] }) 
  // } 
  // if(msg.content.equalsIgnoreCase("!contact Toby")) {
  //   msg.channel.send({ embeds: [tobyContact] }) 
  // }  
  // if(msg.content.equalsIgnoreCase("!ib")) {
  //   msg.channel.send("**__Comprehensive Database of IB Examples [Video + Essay]__**\nhttps://www.sineadsukerta.com/ib-content")
  // }
  // //YTPT Watch List
  // if(msg.content.equalsIgnoreCase("!watchlist")) {
  // msg.channel.send('**__YTPT Must Watch List:__** \nhttps://docs.google.com/spreadsheets/d/1hoTzUCei5kiDlwOTmRec39PJdd-ewlfKdVENJp7ePtw/edit?usp=sharing\n**Key:** Shows marked in white text are deemed "must watch" and shows in *italics* are on more than one platform. Shows on this list can be on Netflix, Prime Video, Hulu, Disney+, HBO Max, and Apple TV.')
  // }

  //APPS LIST
  // if(msg.content.equalsIgnoreCase("!apps")) {
  //   msg.channel.send("**__Main Programs:__**\nOpera GX (Home Browser)\nChrome (School Browser)\nSteam\nEpic Games\nBattle.net Launcher\nRazer Cortex\nSpotify\nWinAero Tweaker(Disables Cortana)\nSteelSeries GG\n\n**__Optional Downloads:__**\nCemu\nDeSmuMe\nmGBA\nVoicemod\nUbisoft (For UNO)")
  // }

  
  //9+10=21
  //https://imgur.com/a/Wgte6Sj is 9+10
  //https://imgur.com/a/5WFUlaD is 21
  //https://imgur.com/a/5Jdvmw0 is YouStupid
  //https://imgur.com/a/JB5mubU is NoImNot
  // if(msg.content === "21") {
  //     msg.channel.send("https://imgur.com/a/Wgte6Sj\nhttps://imgur.com/a/5WFUlaD\nhttps://imgur.com/a/5Jdvmw0\nhttps://imgur.com/a/JB5mubU")
  // }
  
  //EVEN OR ODD DAY
  
  if(msg.content === "!today") {
    try {
      msg.channel.send({ embeds: [today], components: [ getSchedule ] }) 
    } catch (error) {
      msg.channel.send("Error, today is not defined. Use `!updatetoday` to fix it.")
    }
  }

  updateTodayTerminal = new MessageActionRow()
  .addComponents(
    new MessageButton()
      .setCustomId('odd')
      .setLabel('Odd')
      .setStyle('SECONDARY'),
    new MessageButton()
      .setCustomId('even')
      .setLabel('Even')
      .setStyle('SECONDARY'),
)

if(msg.content.startsWith("!updatetoday")) {

  msg.channel.send({ content: "Is it an **odd** or **even** day?", components: [ updateTodayTerminal ] })

}


if(msg.content.startsWith("!return1")) {
    let tempBlock = returnblock1
    returnblock1 = msg.content.split("!return1 ")[1];
    msg.channel.send("The return block was " + tempBlock + ". It has been updated to " + returnblock1 + ".");
  }

  if(msg.content.startsWith("!return2")) {
    let tempBlock = returnblock2
    returnblock2 = msg.content.split("!return2 ")[1];
    msg.channel.send("The return block was " + tempBlock + ". It has been updated to " + returnblock2 + ".");
  }

  
  //BOT AGREES
  if(msg.content === "back me up bot") {
    msg.channel.send("honestly straight fax, you right bro")
  }
  //NEXT CLASS
  if(msg.content === "!nextclass") {
    getTime()
    if(msg.author.username === "Father_Cheddar") {
      block1 = "AP Physics"; teacher1 = "Mr. Stark"; 
      block2 = "Band"; teacher2 = "Ms. West";
      block3 = "English"; teacher3 = "Ms. Risse";
      block4 = "Math"; teacher4 = "Ms. Smith";
      block5 = "IB Music"; teacher5 = "Ms. West";
      block6 = "Computer Science"; teacher6 = "Mr. Snyder";
      block7 = "History"; teacher7 = "Mr. Singer";
  }
  
  if(msg.author.username === "zeta") {
      block1 = "AP Physics"; teacher1 = "Mr. Stark"; 
      block2 = "Computer Science"; teacher2 = "Mr. Snyder";
      block3 = "Math"; teacher3 = "Ms. Alcoke";
      block4 = "English"; teacher4 = "Ms. Eaton";
      block5 = "Study Block"; teacher5 = "Ms. Rivas";
      block6 = "Government"; teacher6 = "Mr. Deal";
      block7 = "PF/Economics"; teacher7 = "Mr. Fay";
    }
  
  if(msg.author.username === "ghostlywords") {
      block1 = "PF/Economics"; teacher1 = "Mr. Fay";
      block2 = "Astronomy"; teacher2 = "Mr. Pepper";
      block3 = "Film Studies"; teacher3 = "Mr. Northrip";
      block4 = "Math"; teacher4 = "Ms. Dudley";
      block5 = "History"; teacher5 = "Mr. Singer";
      block6 = "English"; teacher6 = "Ms. Risse";
      block7 = "Study Block"; teacher7 = "Ms. Rivas";
    }
  
  if(msg.author.username === "hello there") {
      block1 = "Creative Writing"; teacher1 = "Ms. Eaton";
      block2 = "Band"; teacher2 = "Ms. West";
      block3 = "Math"; teacher3 = "Ms. Alcoke";
      block4 = "Astronomy"; teacher4 = "Mr. Pepper";
      block5 = "IB Music"; teacher5 = "Ms. West";
      block6 = "English"; teacher6 = "Ms. Risse";
      block7 = "History"; teacher7 = "Mr. Singer";
    }
  
  if(msg.author.username === "twivight") {
      block1 = "AP Physics"; teacher1 = "Mr. Stark"; 
      block2 = "Band"; teacher2 = "Ms. West";
      block3 = "Math"; teacher3 = "Ms. Alcoke";
      block4 = "PF/Economics"; teacher4 = "Mr. Fay";
      block5 = "IB Music"; teacher5 = "Ms. West";
      block6 = "English"; teacher6 = "Ms. Risse";
      block7 = "History"; teacher7 = "Mr. Singer";
    }
    
  if(msg.author.username === "Advance") {
      block1 = "AP Physics"; teacher1 = "Mr. Stark"; 
      block2 = "History"; teacher2 = "Mr. Fay";
      block3 = "English"; teacher3 = "Mr. Risse";
      block4 = "Math"; teacher4 = "Ms. Smith";
      block5 = "IB Music"; teacher5 = "Ms. West";
      block6 = "Computer Science"; teacher6 = "Mr. Snyder";
      block7 = "PF/Economics"; teacher7 = "Ms. Thrush";
  }
    
  if(msg.author.username === "DemolitionDonut") {
    msg.channel.send("⠀⠀⠘⡀ HOG RIDAAAAAA ⠀⠀ ⠀⠀⠀  ⡜⠀⠀⠀ ⠀⠀\n⠀  ⠑⡀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡔⠁⠀⠀⠀ \n⠀⠀⠀⠀⠈⠢⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠴⠊⠀⠀\n⠀⠀⠀ ⠀⠀⠀⢸⠀⠀⠀⢀⣀⣀⣀⣀⣀⡀⠤⠄⠒⠈⠀⠀⠀⠀⠀⠀⠀⠀\n ⠀⠀⠀⠀⠀⠀⠀⠘⣀⠄⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ \n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠉⢈⠩⢙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ \n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⠠⠀⠀⠨⠐⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ \n⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢐⠐⠌⡌⢄⢐⢈⠔⡝⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ \n⣿⣿⣿⣿⣿⣿⣿⡏⠉⡀⠐⡀⢁⠈⠐⠱⠑⡑⠈⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ \n⣿⣿⣿⣿⣿⣿⣿⢗⠀⠀⠐⡠⡛⠔⡁⢜⡔⡬⢎⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ \n⣿⣿⣿⣿⣿⣿⡿⠡⠀⠀⠀⠀⠂⠁⠀⠄⢂⠈⠂⢂⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ \n⣿⣿⣿⡿⢟⠩⠐⡀⠀⠀⠀⠐⠐⠁⠓⠒⠒⢀⠁⢐⢝⢟⢿⣿⣿⣿⣿⣿⣿⣿⣿ \n⣿⣿⠫⠡⠡⠨⢀⠂⠠⠀⠀⢁⠑⡱⠛⠗⡓⢂⠠⢸⢸⢨⠣⡝⣻⣿⣿⣿⣿⣿⣿ \n⣿⢏⢐⢁⠊⢌⠐⡈⠄⠠⠀⠀⠀⠀⠁⠑⠈⠀⢄⢕⠸⡨⠪⡪⡘⣻⣿⡿⣿⣿⣿ \n⣿⢂⠂⡂⠅⡂⠅⡐⠨⢐⠐⠠⠠⡀⢄⠠⡠⡡⡱⡐⠕⢌⢊⢆⢣⢒⠽⢿⣿⣿⣿ \n⠣⢂⠂⠄⠡⠐⠐⠈⠌⡐⠨⡈⠢⠨⡂⢌⢂⠆⡪⠨⡊⠂⡂⠢⢡⣢⣣⡣⣍⢿⣿ \n⠨⢂⢂⠁⡀⠀⠀⠁⠐⠈⠐⠈⢈⠈⠐⡀⠄⠁⠌⠈⠔⣄⡀⠠⡑⡂⠆⠢⢂⠑⠽ \n⡨⠐⠀⠀⠀⢠⡎⡀⠀⠀⠄⠈⡀⠌⠐⠠⠈⠄⡁⠂⡀⡫⠑⣑⠀⢂⠌⠄⢕⠀⠨ \n⠺⡪⠢⡀⠀⠞⢇⢂⠀⠂⡀⠠⠀⠄⠁⠌⠨⠀⢄⠢⡁⢂⢿⡟⡀⠀⠈⠈⡀⠂⣰ \n⢀⢀⠀⠄⠀⠀⡐⠀⡈⠄⡐⠅⡊⠌⢌⠄⡕⡑⡁⢂⠂⢂⠸⣿⡄⠀⠈⣠⣴⣿⣿ \n⢐⠔⠠⠀⠀⡐⠠⢈⠢⢑⠄⠑⢈⠊⡂⡱⢁⣂⢌⢔⢌⢄⠀⠹⢀⣺⡿⣟⢿⣿⣿ \n⢀⠡⠁⠂⠐⠠⠈⠄⢈⠠⢈⢢⡣⣗⠕⠄⣕⢮⣞⣞⣗⣯⢯⡷⡴⣹⡪⣷⣿⣿⣿ \n⠊⠄⠠⠠⠡⠈⠠⢐⠠⡊⡎⣗⢭⢐⠹⡹⣮⡳⡵⣳⣻⢾⣻⣽⣻⣺⣺⣽⣿⣿⣿ \n⣨⣾⢐⠰⠐⠅⡂⡂⢕⢜⢜⢵⢹⢑⢔⠨⢘⠸⡹⡵⣯⣻⢽⣳⣻⣺⢞⡿⣿⣿⣿ \n⣿⣿⡔⠠⢈⠐⠐⢠⢱⢸⢸⢸⢸⠰⡡⢘⢔⢕⠝⢮⣳⢽⢝⡾⡵⡯⣏⠯⣿⣿⣿ \n⣿⣿⣗⢅⢢⠠⠡⠢⡱⡑⡕⡕⢅⠣⡊⢨⢪⡣⡣⡂⡬⡳⢽⢽⢽⢽⣞⣧⠙⣿⣿ \n⡻⣿⡯⡪⠢⡡⠡⢑⢌⠪⡪⡊⠆⢌⠪⢐⢕⢱⢱⢱⢱⢱⢙⢮⡫⡟⣞⢮⣳⠙⣿ \n⠊⣿⣯⠪⡊⠄⢅⠂⢂⠁⢇⢇⢃⠂⢕⠐⠌⡲⡰⡡⣇⠇⢇⢕⠪⠉⠂⠅⠂⡑⠹ \n⣸⢿⣳⢱⠨⡐⡽⡿⡶⡾⡬⡢⢂⠅⡢⢡⣌⠐⠈⢎⢎⢎⢔⠠⠡⠠⠠⠡⡁⡂⠡ \n⡯⡯⡇⢅⠕⠠⢱⢹⡙⢮⢹⠨⡂⡂⢇⠌⠮⡳⠅⡂⢕⠡⡑⠠⢁⢁⣡⣡⣢⣶⣿ \n⣗⢽⢌⡢⡡⡡⡸⡢⡣⡣⡱⡑⠔⡈⢎⢆⢂⠂⠅⣢⡳⣽⡐⢅⢂⣊⣿⣿⣿⣿⣿ \n⣯⢯⢷⢽⢮⢯⣺⣪⢞⡮⣳⢘⠔⢌⢜⣞⣖⣮⣻⢮⣯⢷⣿⣻⣿⣿⣿⣿⣿⣿⣿ \n⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣾⣷⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿")
  }
    
  if(msg.author.username === "iSleepy") {
      block1 = "Creative Writing"; teacher1 = "Ms. Eaton";
      block2 = "History"; teacher2 = "Mr. Singer";
      block3 = "Math"; teacher3 = "Ms. Handley";
      block4 = "Study Block"; teacher4 = "Ms. Rivas";
      block5 = "IB Music"; teacher5 = "Ms. West";
      block6 = "English"; teacher6 = "Ms. Risse";
      block7 = "Environmental Science"; teacher7 = "Mr. Pepper";
  }
  if(msg.author.username === "pobhee") {
    block1 = "AP Physics"; teacher1 = "Mr. Stark"; 
    block2 = "Band"; teacher2 = "Ms. West";
    block3 = "Math"; teacher3 = "Ms. Alcoke";
    block4 = "English"; teacher4 = "Ms. Eaton";
    block5 = "IB Music"; teacher5 = "Ms. West";
    block6 = "Psychology"; teacher6 = "Mr. Visna";
    block7 = "History"; teacher7 = "Mr. Rivera";
  }
  if(msg.author.username === "DEFENESTRAT10N") {
    block1 = "Study Block"; teacher1 = "Ms. Rivas";
    block2 = "History"; teacher2 = "Mr. Singer";
    block3 = "Math"; teacher3 = "Ms. Dudley";
    block4 = "Spanish"; teacher4 = "Mr. Garcia";
    block5 = "English"; teacher5 = "Ms. Love";
    block6 = "AP Physics"; teacher6 = "Mr. Stark"; 
    block7 = "PF/Economics"; teacher7 = "Ms. Thrush";
  }
    if(daytype.equalsIgnoreCase("odd")) {
      if(ETm<=8) {
        msg.channel.send("Your next class is " + block1 + " with " + teacher1 + ".") 
      }
      if(ETm>=8 && ETm<10) {
        msg.channel.send("Your next class is " + block3 + " with " + teacher3 + ".") 
      }
      if(ETm>=10 && ETm<12) {
        msg.channel.send("Your next class is " + block5 + " with " + teacher5 + ".") 
      }
      if(ETm>=12 && ETm<15) {
        msg.channel.send("Your next class is " + block7 + " with " + teacher7 + ".")
      }
      if(ETm>=15) {
        msg.channel.send("Your next class is " + block2 + " with " + teacher2 + ".") 
      }
    }
    if(daytype.equalsIgnoreCase("even")) {
      if(ETm<8) {
        msg.channel.send("Your next class is " + block2 + " with " + teacher2 + ".") 
      }
      if(ETm>=8 && ETm<10) {
        msg.channel.send("Your next class is " + block4 + " with " + teacher4 + ".") 
      }
      if(ETm>=10 && ETm<12) {
        msg.channel.send("Your next class is " +block6 + " with " + teacher6 + ".") 
      }
      if(ETm>=12 && ETm<15) {
        msg.channel.send("Your next class is Block 8. Today, it is Return " + returnblock1 + " and " + returnblock2 + ".")
      }
      if(ETm>=15) {
        msg.channel.send("Your next class is " + block1  + " with " + teacher1 + ".") 
      }
    }    
  }
  
  //BASKETBALL STATS
  if(msg.content.startsWith("!stats")) {
    player = msg.content.split("!stats ")[1]
    player = player.toLowerCase()
    firstName = player.split(" ")[0]
    lastName = player.split(" ")[1]
    if(lastName.length>5) {
      lastName = lastName.substring(0,5)
    }
    firstName = firstName.substring(0,2)
    firstChar = lastName.substring(0,1)
    URL = "http://www.basketballreference.com/players/"
    msg.channel.send(URL + firstChar + "/" + lastName + firstName + "01.html") 
  }

  //PACERATOR
if(msg.content.startsWith("!pace")) {
  teamName = msg.content.split(" ")[1]
  wins = msg.content.split(" ")[2]
  losses = msg.content.split(" ")[3]
  gamesTotal = msg.content.split(" ")[4]
  gamesPlayed = +wins + +losses
  percent = wins/gamesPlayed
  winsEnd = percent * gamesTotal
  printedWins = Math.floor(winsEnd)
  msg.channel.send("The " + teamName + " currently have a record of " + wins + "-" + losses + ". I estimate the " + teamName + " will have " + printedWins + " wins at the end of the season.")
}

  
  //TWITTER
  if(msg.content.startsWith("!twitter")) {
    user = msg.content.split("!twitter ")[1]
    msg.channel.send("https://www.twitter.com/" + user)
  }
  if(msg.content.startsWith("!autoformat")) {
    IGN = msg.content.split(" ")[1]
    SR = msg.content.split(" ")[2]
    Hero = msg.content.split(" ")[3]
    GameStatus = msg.content.split(" ")[4]
    GameCode = msg.content.split(" ")[5]
    msg.channel.send("IGN: " + IGN + "\nSR: " + SR + "\nHeroes Played: " + Hero + "\nW/L/D: " + GameStatus + "\nGame Code: " + GameCode) 
  }
  //SEND AN UPDATE
  if(msg.content.startsWith("!update ")) {
    let update = msg.content.split("!update ")[1]
    let updateChannel = client.channels.cache.get('763451134290821192');
    if(updateChannel) {
      updateChannel.send(update)
    }
  }
  //INVITE LINK
  if(msg.content === "!invitelink") {
    msg.channel.send("https://bit.ly/ytptinvite")
  }
  //LINKTREE
  if(msg.content === "!linktree") {
    msg.channel.send("**__List of Useful Links For School__** \nSchoology: https://fccps.schoology.com/ \nPowerSchool: https://fccps.powerschool.com/public/ \nMHS Website: https://mhs.fccps.org/ \nFCCPS Twitter: https://twitter.com/FCCPS/ \n**__Math-Related__** \nCalculator: https://www.mathpapa.com/algebra-calculator.html \nDesmos: https://www.desmos.com/calculator \n**__Miscellaneous__** \nLasso Newspaper: https://meridianlasso.org/")
  }
  //PHONE SPECS
  if(msg.content === "!phonespecs") {
      msg.channel.send("**iPhone Specs:** https://discord.com/channels/644696367955968010/763451134290821192/808759429864357939")
      msg.channel.send("**Android Specs:** https://discord.com/channels/644696367955968010/763451134290821192/808485484812042270")
  }

  if(msg.author.username === "Orisa") {
    msg.channel.send("Thanks Orisa, very cool.")
}
if(msg.content.includes("nick") && msg.content.includes("gay")) {
  msg.channel.send("true that bro")
}

if(msg.channel.author === "AdvancedBot") {
  msg.delete();
}
if(msg.content === "Who is YTPT Bot?") {
  msg.channel.send("I am the original and superior version of <@!955855586581434408>. AdvancedBot is a shitstain on this server and needs to be exterminated.")
}
//WORDLE
if(msg.content.startsWith("!wordle")) {
  
  answer = msg.content.split("||")[1]
  if(answer == undefined || answer.length != 5 ) {
    msg.delete();
    msg.channel.send("Error -- could not fetch an answer. Remember, format is \"!wordle \\||<answer>||\"  ");
  }
  else {
    msg.delete()
  
  

  gridLetter = ["<:lgs:958407285426778192>","<:lgs:958407285426778192>","<:lgs:958407285426778192>","<:lgs:958407285426778192>","<:lgs:958407285426778192>"]
  row = [gridLetter[0] + gridLetter[1] + gridLetter[2] + gridLetter[3] + gridLetter[4] + "\n",gridLetter[0] + gridLetter[1] + gridLetter[2] + gridLetter[3] + gridLetter[4] + "\n",gridLetter[0] + gridLetter[1] + gridLetter[2] + gridLetter[3] + gridLetter[4] + "\n",gridLetter[0] + gridLetter[1] + gridLetter[2] + gridLetter[3] + gridLetter[4] + "\n",gridLetter[0] + gridLetter[1] + gridLetter[2] + gridLetter[3] + gridLetter[4] + "\n",gridLetter[0] + gridLetter[1] + gridLetter[2] + gridLetter[3] + gridLetter[4] + "\n"]

  guesses = ["","","","","",""]
  guessCount = 1
  

  wordleEmbed = new MessageEmbed()
      .setTitle("Wordle")
      .setColor("#447d3d")
      .setThumbnail("https://www.nytimes.com/games/wordle/images/NYT-Wordle-Icon-32.png")
      .addFields(
        { name: "Grid", value: row[0] + row[1] + row[2] + row[3] + row[4] + row[5] , inline: true },
        { name: "Guesses", value: "\u200B" + guesses[0] + "\n" + guesses[1] + "\n" + guesses[2] + "\n" + guesses[3] + "\n" + guesses[4] + "\n" + guesses[5] + "\n", inline: true}
      )
      .setFooter({text: "Use !guess to guess a word"})

  guessCount = 1;
  msgRef = await msg.channel.send({ embeds: [wordleEmbed] }); 
    
    
  }
}

if(msg.content.startsWith("!guess")) {
  
  wordleGuess = msg.content.split(" ")[1]
  wordleGuess = wordleGuess.toLowerCase();
  let wordleAnswer = answer;
  

  if(wordleGuess.length != 5) {
    // msg.channel.send("Error -- " + wordleGuess + " is not 5 letters, please try again. This message will self destruct in 5 seconds.")
    // setTimeout(1000*5)
    msg.delete();
    wordleEmbed.setDescription("Error -- " + wordleGuess + " is not 5 letters.")
    msgRef.edit({ embeds: [wordleEmbed]})
  }
  else {
    for(let j = 0; j<5; j++) {
      if( wordleGuess[j] === wordleAnswer[j] ) {
        wordleAnswer = removeCharAt(j, wordleAnswer)
        gridLetter[j] = ":green_square:"
      } 
      else if(wordleAnswer.includes(wordleGuess[j])) {
       
        for(let v = 0; v<5; v++) {
          if(wordleAnswer[v] === wordleGuess[j] ) {
            wordleAnswer = removeCharAt(v, wordleAnswer)
            break;
          }
        }
        gridLetter[j] = ":yellow_square:"
      }
      else {
        gridLetter[j] = ":black_large_square:"
      }
    
    }
    row[guessCount-1] = gridLetter[0] + gridLetter[1] + gridLetter[2] + gridLetter[3] + gridLetter[4] + "\n"
    
    guesses[guessCount-1] = ":regional_indicator_" + wordleGuess.charAt(0) + ":" + ":regional_indicator_" + wordleGuess.charAt(1) + ":" + ":regional_indicator_" + wordleGuess.charAt(2) + ":" + ":regional_indicator_" + wordleGuess.charAt(3) + ":" + ":regional_indicator_" + wordleGuess.charAt(4) + ":";
    wordleEmbed.fields = [];
    wordleEmbed.addFields(
      { name: "Grid", value: row[0] + row[1] + row[2] + row[3] + row[4] + row[5] , inline: true },
      { name: "Guesses", value: "\u200B" + guesses[0] + "\n" + guesses[1] + "\n" + guesses[2] + "\n" + guesses[3] + "\n" + guesses[4] + "\n" + guesses[5] + "\n", inline: true}
    )
    wordleEmbed.setDescription('Your most recent guess was "' + wordleGuess + '".')
    
    if(guessCount == 6 && wordleGuess != answer) {
      wordleEmbed.setColor("#ff0000")
      wordleEmbed.setDescription('Discordle X/6')
      wordleEmbed.setFooter({ text: "Noob, you lost. The answer was \"" + answer + "\""})
    }
    if(wordleGuess === answer) {
      wordleEmbed.setColor("#00ff00")
      wordleEmbed.setFooter({ text: 'Congratulations, you won!' })
      wordleEmbed.setDescription('Discordle ' + guessCount + "/6")
      
      
    }


    msgRef.edit({ embeds: [wordleEmbed] }) 
    guessCount = guessCount + 1;
    msg.delete();
    

  }
  

  }
 
  //NEW CONVO
  if(msg.content === "!newconvo") {
    msg.channel.send(":point_up: =========================== Let's leave it at that ====================  :point_up:\n:point_down: =========================== New convo ========================== :point_down:")
  }

  if(msg.content.startsWith("!poll")) {
    
    let question = msg.content.split("!poll ")[1]
    poll = await msg.channel.send("Hey @here, " + question)
    poll.react("1️⃣").then(poll.react("2️⃣"))
    
  }

  //COMMANDS LIST
    if(msg.content.startsWith("!help")) {
      msg.channel.send({ embeds: [helpList] }) 
  }
    //close of bracket
    }
  )



client.on('interactionCreate', async interaction  => {
  
  let userID = interaction.user.id;
  let userTag = interaction.user.username;

  const collector = interaction.channel.createMessageComponentCollector({ time: 15000 });
  
  collector.on('collect', async button => {
    if (button.customId === 'primary') {
      await button.update({ content: 'A button was clicked!', components: [] });
    }
  });
  
  collector.on('end', collected => {} );


  let returnBlock1A = new MessageActionRow()
    .addComponents(
        new MessageButton()
          .setCustomId('B1A')
          .setLabel('Block 1')
          .setStyle('SECONDARY'),
        new MessageButton()
          .setCustomId('B2A')
          .setLabel('Block 2')
          .setStyle('SECONDARY'),
        new MessageButton()
          .setCustomId('B3A')
          .setLabel('Block 3')
          .setStyle('SECONDARY'),
        new MessageButton()
          .setCustomId('B4A')
          .setLabel('Block 4')
          .setStyle('SECONDARY'),
        new MessageButton()
          .setCustomId('B5A')
          .setLabel('Block 5')
          .setStyle('SECONDARY'),
    )
  let returnBlock1B = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('B6A')
          .setLabel('Block 6')
          .setStyle('SECONDARY'),
        new MessageButton()
          .setCustomId('B7A')
          .setLabel('Block 7')
          .setStyle('SECONDARY'),
        new MessageButton()
          .setCustomId('stableA')
          .setLabel('Stable Group')
          .setStyle('SECONDARY'),
        new MessageButton()
          .setCustomId('workshopA')
          .setLabel('Choice Workshop')
          .setStyle('SECONDARY'),

      )

      let returnBlock2A = new MessageActionRow()
    .addComponents(
        new MessageButton()
          .setCustomId('B1B')
          .setLabel('Block 1')
          .setStyle('SECONDARY'),
        new MessageButton()
          .setCustomId('B2B')
          .setLabel('Block 2')
          .setStyle('SECONDARY'),
        new MessageButton()
          .setCustomId('B3B')
          .setLabel('Block 3')
          .setStyle('SECONDARY'),
        new MessageButton()
          .setCustomId('B4B')
          .setLabel('Block 4')
          .setStyle('SECONDARY'),
        new MessageButton()
          .setCustomId('B5B')
          .setLabel('Block 5')
          .setStyle('SECONDARY'),
    )
  let returnBlock2B = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('B6B')
          .setLabel('Block 6')
          .setStyle('SECONDARY'),
        new MessageButton()
          .setCustomId('B7B')
          .setLabel('Block 7')
          .setStyle('SECONDARY'),
        new MessageButton()
          .setCustomId('stableB')
          .setLabel('Stable Group')
          .setStyle('SECONDARY'),
        new MessageButton()
          .setCustomId('workshopB')
          .setLabel('Choice Workshop')
          .setStyle('SECONDARY'),

      )

  let checkThis = new MessageActionRow()
    .addComponents(
      new MessageButton()
              .setCustomId('good')
              .setLabel('Looks good!')
              .setEmoji('✔️')
              .setStyle('SUCCESS'),
            new MessageButton()
              .setCustomId('bad')
              .setLabel('Fix it!')
              .setEmoji('✖️')
              .setStyle('DANGER'),
    )

    let sendThis = new MessageActionRow()
    .addComponents(
      new MessageButton()
              .setCustomId('sendit')
              .setLabel('Send it!')
              .setEmoji('✔️')
              .setStyle('SUCCESS'),
            new MessageButton()
              .setCustomId('nosend')
              .setLabel('Don\'t send it')
              .setEmoji('✖️')
              .setStyle('DANGER'),

    )

  if( interaction.customId === "rock" ) {
    interaction.reply("Unlucky, I chose **Paper** :roll_of_paper:" )
    rpsRef.edit({ content: "<@!" + userID + "> -- You have chosen **Rock** :moyai:", embeds: [], components: []}) 
  }

  if( interaction.customId === "paper" ) {
    interaction.reply("Unlucky, I chose **Scissors** :scissors:" )
    rpsRef.edit({ content: "<@!" + userID + "> -- You have chosen **Paper** :roll_of_paper:", embeds: [], components: []})
  }

  if( interaction.customId === "scissors" ) {
    interaction.reply("Unlucky, I chose **Rock** :moyai:" )
    rpsRef.edit({ content: "<@!" + userID + "> -- You have chosen **Scissors** :scissors:", embeds: [], components: [] })
  } 
  if( interaction.customId === "nextpage") {
    swapPageRow.components = []
    swapPageRow.addComponents(
      new MessageButton()
          .setCustomId('previouspage')
          .setLabel('<-')
          .setStyle('SECONDARY'),
        
    )
    testRef.edit({ embeds: [pageTwoEmbed], components: [swapPageRow] })
  }
  if( interaction.customId === "previouspage") {
    swapPageRow.components = []
    swapPageRow.addComponents(
      new MessageButton()
          .setCustomId('nextpage')
          .setLabel('->')
          .setStyle('SECONDARY'),
        
    )
    interaction.deferReply("\u200B")
    testRef.edit({ embeds: [pageOneEmbed], components: [swapPageRow] })
  }

  if(interaction.customId === "odd") {
    getTime()
    daytype = "Odd";
    createTodayEmbed();
    interaction.update({ content: "**Today Embed Preview:**", embeds: [today], components: [checkThis] });
  
    
  }

  if(interaction.customId === "even") {
    getTime();
    daytype = "Even";
    interaction.update({ content: "**What is the first return block?**", components: [returnBlock1A, returnBlock1B] })
    
  }

  switch(interaction.customId) {

    //CHOOSING RETURN BLOCK 1

    case "B1A": 
      returnblock1 = "Block 1";
      interaction.update({ content: "**What is the second return block?**", components: [returnBlock2A, returnBlock2B] });
      break;
    case "B2A": 
      returnblock1 = "Block 2";
      interaction.update({ content: "**What is the second return block?**", components: [returnBlock2A, returnBlock2B] });
      break;
    case "B3A": 
      returnblock1 = "Block 3";
      interaction.update({ content: "**What is the second return block?**", components: [returnBlock2A, returnBlock2B] });
      break;
    case "B4A": 
      returnblock1 = "Block 4";
      interaction.update({ content: "**What is the second return block?**", components: [returnBlock2A, returnBlock2B] });
      break;
    case "B5A": 
      returnblock1 = "Block 5";
      interaction.update({ content: "**What is the second return block?**", components: [returnBlock2A, returnBlock2B] });
      break;
    case "B6A": 
      returnblock1 = "Block 6";
      interaction.update({ content: "**What is the second return block?**", components: [returnBlock2A, returnBlock2B] });
      break;
    case "B7A": 
      returnblock1 = "Block 7";
      interaction.update({ content: "**What is the second return block?**", components: [returnBlock2A, returnBlock2B] });
      break;
    case "stableA": 
      returnblock1 = "Stable Group";
      interaction.update({ content: "**What is the second return block?**", components: [returnBlock2A, returnBlock2B] });
      break;
    case "workshopA": 
      returnblock1 = "Choice Workshop";
      interaction.update({ content: "**What is the second return block?**", components: [returnBlock2A, returnBlock2B] });
      break;

    //CHOOSING RETURN BLOCK 2

    case "B1B": 
      returnblock2 = "Block 1";
      createTodayEmbed()
      interaction.update({ content: "**Today Embed Preview:**", embeds: [today], components: [checkThis] });
      break;
    case "B2B": 
      returnblock2 = "Block 2";
      createTodayEmbed()
      interaction.update({ content: "**Today Embed Preview:**", embeds: [today], components: [checkThis] });
      break;
    case "B3B": 
      returnblock2 = "Block 3";
      createTodayEmbed()
      interaction.update({ content: "**Today Embed Preview:**", embeds: [today], components: [checkThis] });
      break;
    case "B4B": 
      returnblock2 = "Block 4";
      createTodayEmbed()
      interaction.update({ content: "**Today Embed Preview:**", embeds: [today], components: [checkThis] });
      break;
    case "B5B": 
      returnblock2 = "Block 5";
      createTodayEmbed()
      interaction.update({ content: "**Today Embed Preview:**", embeds: [today], components: [checkThis] });
      break;
    case "B6B": 
      returnblock2 = "Block 6";
      createTodayEmbed()
      interaction.update({ content: "**Today Embed Preview:**", embeds: [today], components: [checkThis] });
      break;
    case "B7B": 
      returnblock2 = "Block 7";
      createTodayEmbed()
      interaction.update({ content: "**Today Embed Preview:**", embeds: [today], components: [checkThis] });
      break;
    case "stableB": 
      returnblock2 = "Stable Group";
      createTodayEmbed()
      interaction.update({ content: "**Today Embed Preview:**", embeds: [today], components: [checkThis] });
      break;
    case "workshopB": 
      returnblock2 = "Choice Workshop";
      createTodayEmbed()
      interaction.update({ content: "**Today Embed Preview:**", embeds: [today], components: [checkThis] });
      break;

  }

  if(interaction.customId === "bad") { 
    interaction.update({ content: "Is it an **odd** or **even** day?", components: [ updateTodayTerminal ], embeds: [] })

  }

  if(interaction.customId === "good" ) {
    interaction.update({ components: [sendThis] })
  }
  
  if(interaction.customId === "nosend") {
    interaction.update({ content: "Is it an **odd** or **even** day?", components: [ updateTodayTerminal ], embeds: [] })
    
  }

  if(interaction.customId === "sendit") {
    let heneral = client.channels.cache.get('763451134290821192')
    if(heneral) {
      heneral.send({ embeds: [today], components: [ getSchedule ] })
    }
    checkBDay()
    interaction.update({ content: "Is it an **odd** or **even** day?", components: [ updateTodayTerminal ], embeds: [] })
    
  }

  if(interaction.customId === "getSched") {
    
    switch(interaction.user.username) {
      case "Father_Cheddar": 
        interaction.reply({ embeds: [ aidanSchedule ], ephemeral: true })
        break;
      case "zeta":
        interaction.reply({ embeds: [ andySchedule ], ephemeral: true })
        break;
      case "ghostlyworlds":
        interaction.reply({ embeds: [ ashleySchedule ], ephemeral: true })
        break;
      case "hello there":
        interaction.reply({ embeds: [ claireSchedule ], ephemeral: true })
        break;
      case "twivight":
        interaction.reply({ embeds: [ daSchedule ], ephemeral: true })
        break;
      case "Advance":
        interaction.reply({ embeds: [ nickSchedule ], ephemeral: true })
        break;
      case "DemolitionDonut":
        interaction.reply({ embeds: [ michaelSchedule ], ephemeral: true })
        break;
      case "pobhee":
        interaction.reply({ embeds: [ pobSchedule ], ephemeral: true })
        break;
      case "iSleepy":
        interaction.reply({ embeds: [ sofieSchedule ], ephemeral: true })
        break;
      case "DEFENESTRAT10N":
        interaction.reply({ embeds: [ tobySchedule ], ephemeral: true })
        break;
      case "built different":
        interaction.reply({ embeds: [ tobySchedule ], ephemeral: true })
        break;
      
    }

  //   if(msg.author.username === "Father_Cheddar") {
  //     name = "Aidan";
      
  //     msg.channel.send({ embeds: [aidanSchedule] })
  //   }  
  
  // if(msg.author.username === "zeta") {
  //     name = "Andy";
      
  //     msg.channel.send({ embeds: [andySchedule] })
  //   }
  
  // if(msg.author.username === "ghostlywords") {
  //   name = "Ashley";
    
  //     msg.channel.send({ embeds: [ashleySchedule] })
  // }
  
  // if(msg.author.username === "hello there") {
  //     name = "Claire";
      
  //     msg.channel.send({ embeds: [claireSchedule] })
  //   }
  
  // if(msg.author.username === "twivight") {
  //     name = "Da";
      
  //     msg.channel.send({ embeds: [daSchedule] })
  //   }
  
  // if(msg.author.username === "Advance") {
  //     name = "Nick";
      
  //     msg.channel.send({ embeds: [nickSchedule] })
  //   }
  
  // if(msg.author.username === "DemolitionDonut") { msg.channel.send("https://imgur.com/a/VVCvlqE")
  // }
  
  // if(msg.author.username === "iSleepy") {
  //     name = "Sofie";
    
  //     msg.channel.send({ embeds: [sofieSchedule] })
  //   }

  // if(msg.author.username === "pobhee") {
  //     name = "Pob";
      
  //     msg.channel.send({ embeds: [pobSchedule] })
  //   }
  
  // if(msg.author.username === "DEFENESTRAT10N" || msg.author.username === "built different") {
  //     name = "Toby";
      
  //     msg.channel.send({ embeds: [tobySchedule] })
  //   }
  }
  

})

// client.on('clickButton', async (button) => {
//   if( interaction.customId === "rock" ) {
//         await button.message.edit("You have chosen **Rock** :moyai:")
//       }
//       if( interaction.customId === "paper" ) {
//         await button.message.edit("You have chosen **Paper** :roll_of_paper:")
//       }
//       if( interaction.customId === "scissors" ) {
//         await button.message.edit("You have chosen **Scissors** :scissors:"); 
//       } 
// })
  

  client.login("OTQ0MDcwODIwMjM2NTIxNTIy.Yg8Qdw.GBq48D0bC4bB_W8i06Gdx02Vyck") 