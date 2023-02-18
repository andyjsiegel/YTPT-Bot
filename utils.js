const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Message } = require('discord.js');
const moment = require('moment');

function getTime() {
    now = new Date();
    nowMoment = moment(now);
    global.bdays = ["May 27","January 14","January 19","February 18","March 31","April 13","April 15","May 5","May 7","June 2","June 3","June 16","July 4","July 16","July 28","August 4","August 18","November 19","October 17","November 2","December 6",]
    countdownDate = new Date('8/29/2022');
    diffMillis = Math.abs(now - countdownDate);
    diffDays = Math.ceil(diffMillis / (1000 * 60 * 60 * 24) )
    timeHours = now.getUTCHours();
    timeMinutes = now.getUTCMinutes();  
    day = now.getDay();
    dayOfMonth = now.getDate();
    month = now.getMonth();
    ET = timeHours - 4;
    uzbek = timeHours + 5;
    meridiemET = " PM";
    meridiemUZ = " AM";
    ETm = timeHours - 4;
    year = now.getFullYear();
    start = new Date(now.getFullYear(), 0, 0);
    diff = now - start;
    oneDay = 1000 * 60 * 60 * 24;
    dayTestThing = Math.floor(diff / oneDay);
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
    curDate = monthsArray[month] + " " + dayOfMonth;
    curDateYear = curDate + `, ${year}`
    daysOff = [
      {date: 'September 2, 2022', name: 'Labor Day'},
      {date: 'September 5, 2022', name: 'Labor Day'},
      {date: 'September 26, 2022', name: 'Rosh Hashanah'},
      {date: 'October 5, 2022', name: 'Yom Kippur'},
      {date: 'October 10, 2022', name: 'Columbus Day'},
      {date: 'October 24, 2022', name: 'Diwali'},
      {date: 'November 7, 2022', name: 'Election Day'},
      {date: 'November 8, 2022', name: 'Teacher Workday'},
      {date: 'November 11, 2022', name: 'Veterans Day'},
      {date: 'November 23, 2022', name: 'Thanksgiving Break'},
      {date: 'November 24, 2022', name: 'Thanksgiving Day'},
      {date: 'November 25, 2022', name: 'Thanksgiving Break'},
      {date: 'December 19, 2022', name: 'Winter Break'},
      {date: 'December 20, 2022', name: 'Winter Break'},
      {date: 'December 21, 2022', name: 'Winter Break'},
      {date: 'December 22, 2022', name: 'Winter Break'},
      {date: 'December 23, 2022', name: 'Winter Break'},
      {date: 'December 24, 2022', name: 'Christmas Eve'},
      {date: 'December 25, 2022', name: 'Christmas Day'},
      {date: 'December 26, 2022', name: 'Winter Break'},
      {date: 'December 27, 2022', name: 'Winter Break'},
      {date: 'December 28, 2022', name: 'Winter Break'},
      {date: 'December 29, 2022', name: 'Winter Break'},
      {date: 'December 30, 2022', name: 'Winter Break'},
      {date: 'December 31, 2022', name: 'New Year\'s Eve'},
      {date: 'January 1, 2023', name: 'New Year\'s Day'},
      {date: 'January 16, 2023', name: 'Martin Luther King Jr. Day'},
      {date: 'January 27, 2023', name: 'Teacher Workday'},
      {date: 'February 20, 2023', name: 'Presidents\' Day'},
      {date: 'April 3, 2023', name: 'Spring Break'},
      {date: 'April 4, 2023', name: 'Spring Break'},
      {date: 'April 5, 2023', name: 'Spring Break'},
      {date: 'April 6, 2023', name: 'Spring Break'},
      {date: 'April 7, 2023', name: 'Spring Break'},
      {date: 'April 9, 2023', name: 'Easter Sunday'},
      {date: 'April 10, 2023', name: 'Teacher Workday'},
      
      
      { date: 'May 29, 2023', name: 'Memorial Day'},
      
      
    ]

    importantDates = [
      {date: 'September 2, 2022', name: 'Labor Day'},
      {date: 'September 5, 2022', name: 'Labor Day'},
      {date: 'September 26, 2022', name: 'Rosh Hashanah'},
      {date: 'October 5, 2022', name: 'Yom Kippur'},
      {date: 'October 10, 2022', name: 'Columbus Day'},
      {date: 'October 24, 2022', name: 'Diwali'},
      {date: 'November 7, 2022', name: 'Election Day'},
      {date: 'November 8, 2022', name: 'Teacher Workday'},
      {date: 'November 11, 2022', name: 'Veterans Day'},
      {date: 'November 23, 2022', name: 'Thanksgiving Break'},
      {date: 'November 24, 2022', name: 'Thanksgiving Day'},
      {date: 'November 25, 2022', name: 'Thanksgiving Break'},
      {date: 'December 19, 2022', name: 'Winter Break'},
      {date: 'December 20, 2022', name: 'Winter Break'},
      {date: 'December 21, 2022', name: 'Winter Break'},
      {date: 'December 22, 2022', name: 'Winter Break'},
      {date: 'December 23, 2022', name: 'Winter Break'},
      {date: 'December 24, 2022', name: 'Christmas Eve'},
      {date: 'December 25, 2022', name: 'Christmas Day'},
      {date: 'December 26, 2022', name: 'Winter Break'},
      {date: 'December 27, 2022', name: 'Winter Break'},
      {date: 'December 28, 2022', name: 'Winter Break'},
      {date: 'December 29, 2022', name: 'Winter Break'},
      {date: 'December 30, 2022', name: 'Winter Break'},
      {date: 'December 31, 2022', name: 'New Year\'s Eve'},
      {date: 'January 1, 2023', name: 'New Year\'s Day'},
      {date: 'January 16, 2023', name: 'Martin Luther King Jr. Day'},
      {date: 'January 27, 2023', name: 'Teacher Workday'},
      {date: 'February 20, 2023', name: 'Presidents\' Day'},
      {date: 'April 3, 2023', name: 'Spring Break'},
      {date: 'April 4, 2023', name: 'Spring Break'},
      {date: 'April 5, 2023', name: 'Spring Break'},
      {date: 'April 6, 2023', name: 'Spring Break'},
      {date: 'April 7, 2023', name: 'Spring Break'},
      {date: 'April 9, 2023', name: 'Easter Sunday'},
      {date: 'April 10, 2023', name: 'Teacher Workday'},
      { date: 'April 28, 2023', name: 'IB Business & Management Paper 1' },
      { date: 'May 1, 2023', name: 'IB Business & Management Paper 2' },
      { date: 'May 3, 2023', name: 'English A: Literature HL - Paper 1' },
      { date: 'May 4, 2023', name: 'English A: Literature HL - Paper 2' },
      { date: 'May 5, 2023', name: 'Environmental Systems and Societies - Paper 1' },
      { date: 'May 5, 2023', name: 'Computer Science SL - Paper 1' },
      { date: 'May 8, 2023', name: 'Computer Science SL - Paper 2' },
      { date: 'May 8, 2023', name: 'Mathematics AI - Paper 1' },
      { date: 'May 8, 2023', name: 'Environmental Systems and Societies - Paper 2' },
      { date: 'May 9, 2023', name: 'Mathematics AI - Paper 2' },
      { date: 'May 10, 2023', name: 'World History - Paper 1' },
      { date: 'May 10, 2023', name: 'World History - Paper 2' },
      { date: 'May 11, 2023', name: 'World History - Paper 3' },
      { date: 'May 19, 2023', name: 'Last Day of School for Seniors' },
      { date: 'May 29, 2023', name: 'Memorial Day'},
      { date: 'June 7, 2023', name: 'Graduation'},
      { date: 'June 16, 2023', name: 'Last Day Of K-12 School'}
    ]
    
    let shortDays = [
      'September 21, 2022',
      'October 12, 2022',
      'November 16, 2022',
      'December 7, 2022',
      'January 11, 2023',
      'February 8, 2023',
      'March 15, 2023',
      'April 26, 2023',
      'May 17, 2023',
      'June 7, 2023',
      'June 12, 2023',
      'June 13, 2023',
      'June 14, 2023',
      'June 15, 2023',
      'June 16, 2023'
    ]

    function getCountdown(daysOff) {
      const now = new Date();
      let closestDate = null;
      let closestNamedDate = null;
      let closestDiff = Number.MAX_SAFE_INTEGER;
    
      daysOff.forEach(dayOff => {
        const date = new Date(dayOff.date);
        const nameOfDate = dayOff.name
        const diff = date.getTime() - now.getTime();
    
        if (diff > 0 && diff < closestDiff) {
          closestDate = date;
          closestNamedDate = nameOfDate
          closestDiff = diff;
        }
      });
      if (closestDate === null) {
        return "There are no upcoming events.";
      }
    
      const oneDay = 24 * 60 * 60 * 1000;
      const diffDays = Math.round(closestDiff / oneDay);
    
      if (diffDays === 0) {
        return `Today is ${closestNamedDate}.`;
      }
    
      return `There are ${diffDays} day(s) until ${closestNamedDate}.`;
    }
    
    function getClosestDates(importantDates, currentDate) {
      const sortedImportantDates = importantDates.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
    
      const closestImportantDates = sortedImportantDates.filter(dayOff => {
        return new Date(dayOff.date) >= currentDate;
      });
    
      return closestImportantDates;
    }
    
    const currentDate = new Date();
    const closestDates = getClosestDates(importantDates, currentDate);
    upcomingEvents = "";
    closestDates.forEach((item, idx, arr) => {
      upcomingEvents += `${item.date} - ${item.name}\n`
    })
    
    
    
    let isDayOff = daysOff.some(dayOff => dayOff.date.split(',')[0] === curDate);
    let isShortDay = shortDays.some(shortDay => shortDay.split(',')[0] === curDate);

    if (isDayOff) {
        daytype = "odd";
        specialday = "closed"
    } else {
        // Offset the day by the number of holidays that have occurred
        if(isShortDay) {
          specialday = "shortday"
        }
        let daysOffCount = daysOff.filter(x => moment(x, "MMMM DD, YYYY").isBefore(nowMoment)).length;
        console.log(daysOffCount)
        let adjustedDay = dayTestThing - daysOffCount;
    
        if (adjustedDay % 2 == 0) {
            daytype = "odd";
        } else {
            daytype = "even";
        }
    }
    console.log(daytype)
    
    
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
    
    workArray = [
        'Andy is working from 4-9 PM.\nFelix is working from 9 AM-5 PM.\nAshley is working from 7 AM-12 PM.', //sunday
        'Felix is working from 4-7:30 PM.', //monday
        'Pob is working from 4-7 PM.', //tuesday
        'Andy is working from 5-10 PM.\nFelix is working from 4-7:30 PM.', //wednesday
        'Pob is working from 4-7 PM.\nNick is working from 4-8 PM.\nAshley is working from 4-8 PM.', //thursday
        'Pob is working from 4-7 PM.', //friday
        'Pob is working from 12-3 PM.', //saturday
      ];
    nextDate = getCountdown(daysOff)
    
    return { monthsArray, daysArray, meridiemUZ, meridiemET, uzbek, ET, schoolday, suffixArray, year, ETm, month, dayOfMonth, bdays, day, countdownDate, diffMillis, diffDays, curDate, daytype, nextDate, upcomingEvents, specialday }
}
getTime();

const schedule = { 
  aidan: {
    block1: "Senior Study", 
    block2: "Wind Ensemble",
    block3: "IB HL English",
    block4: "Senior Study",
    block5: "IB Music",
    block6: "IB AI II (Math)",
    block7: "IB World History",
    lunchOdd: "Lunch A",
    lunchEven: "Lunch C",
},
  andy: {
    block1: "IB Business", 
    block2: "Senior Study",
    block3: "AP Calculus BC",
    block4: "Senior Study",
    block5: "IB Computer Science",
    block6: "IB SL English",
    block7: "US History",
    lunchOdd: "Lunch C",
    lunchEven: "Lunch C",
},
  ashley: {
    block1: "Prob & Stats", 
    block2: "IB English HL",
    block3: "IB Business",
    block4: "Senior Study",
    block5: "HyC Earth Science",
    block6: "Film Studies II",
    block7: "IB World History",
    lunchOdd: "Lunch C",
    lunchEven: "Lunch C",
},
  felix: {
    block1: "IB HL English", 
    block2: "Wind Ensemble",
    block3: "AP Calculus BC",
    block4: "Senior Study",
    block5: "IB Music",
    block6: "IB Physics",
    block7: "IB World History",
    lunchOdd: "Lunch A",
    lunchEven: "Lunch C",
},
  da: {
    block1: "AP Computer Science", 
    block2: "Wind Ensemble",
    block3: "AP Calculus BC",
    block4: "Design",
    block5: "Senior Study",
    block6: "IB HL English",
    block7: "IB World History",
    lunchOdd: "Lunch C",
    lunchEven: "Lunch C",
},
  nick: {
    block1: "IB Business", 
    block2: "Senior Study",
    block3: "IB HL English",
    block4: "Senior Study",
    block5: "IB Computer Science",
    block6: "IB AI II (Math)",
    block7: "IB World History",
    lunchOdd: "Lunch C",
    lunchEven: "Lunch C",
},
  pob: {
    block1: "Senior Study", 
    block2: "IB Psychology",
    block3: "AP Calculus BC",
    block4: "Chemistry II",
    block5: "IB Music",
    block6: "IB SL English",
    block7: "Senior Study",
    lunchOdd: "Lunch A",
    lunchEven: "Lunch A",
},
  sofie: {
    block1: "Computer Graphics", 
    block2: "IB HL English",
    block3: "IB World History",
    block4: "Senior Study",
    block5: "Art II",
    block6: "Prob & Stats",
    block7: "Environmental Science",
    lunchOdd: "Lunch C",
    lunchEven: "Lunch C",
},
  toby: {
    block1: "Guitar", 
    block2: "Biology II",
    block3: "IB HL English",
    block4: "IB AI II (Math)",
    block5: "Emergency Med Tech",
    block6: "Senior Study",
    block7: "IB World History",
    lunchOdd: "Lunch C",
    lunchEven: "Lunch C",
  },
  //close object 
}

function schedules() {
    aidanSchedule = new EmbedBuilder().setColor('#d0753c').setTitle('Aidan\'s Schedule').addFields({ name: 'Odd Days', value: `[1] ${schedule.aidan.block1}\n[3] ${schedule.aidan.block3}\n[5] ${schedule.aidan.block5}\n[[L] ${schedule.aidan.lunchOdd}](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[7] ${schedule.aidan.block7}`, inline: true},{ name: 'Even Days', value: `[2] ${schedule.aidan.block2}\n[3] ${schedule.aidan.block3}\n[4] ${schedule.aidan.block4}\n[[L] ${schedule.aidan.lunchEven}](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[6] ${schedule.aidan.block6}`, inline: true}).setTimestamp() .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });
    andySchedule = new EmbedBuilder().setColor('#5acafa').setTitle('Andy\'s Schedule').addFields({ name: 'Odd Days', value: `[1] ${schedule.andy.block1}\n[3] ${schedule.andy.block3}\n[5] ${schedule.andy.block5}\n[[L] ${schedule.andy.lunchOdd}](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[7] ${schedule.andy.block7}`, inline: true},{ name: 'Even Days', value: `[2] ${schedule.andy.block2}\n[3] ${schedule.andy.block3}\n[4] ${schedule.andy.block4}\n[[L] ${schedule.andy.lunchEven}](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[6] ${schedule.andy.block6}`, inline: true}).setTimestamp() .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });
    ashleySchedule = new EmbedBuilder().setColor('#8c5cca').setTitle('Ashley\'s Schedule').addFields({ name: 'Odd Days', value: `[1] ${schedule.ashley.block1}\n[3] ${schedule.ashley.block3}\n[5] ${schedule.ashley.block5}\n[[L] ${schedule.ashley.lunchOdd}](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[7] ${schedule.ashley.block7}`, inline: true},{ name: 'Even Days', value: `[2] ${schedule.ashley.block2}\n[3] ${schedule.ashley.block3}\n[4] ${schedule.ashley.block4}\n[[L] ${schedule.ashley.lunchEven}](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[6] ${schedule.ashley.block6}`, inline: true}).setTimestamp() .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });
    felixSchedule = new EmbedBuilder().setColor('#4900f2').setTitle('Felix\'s Schedule').addFields({ name: 'Odd Days', value: `[1] ${schedule.felix.block1}\n[3] ${schedule.felix.block3}\n[5] ${schedule.felix.block5}\n[[L] ${schedule.felix.lunchOdd}](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[7] ${schedule.felix.block7}`, inline: true},{ name: 'Even Days', value: `[2] ${schedule.felix.block2}\n[3] ${schedule.felix.block3}\n[4] ${schedule.felix.block4}\n[[L] ${schedule.felix.lunchEven}](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[6] ${schedule.felix.block6}`, inline: true}).setTimestamp() .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });
    daSchedule = new EmbedBuilder().setColor('#f2bdcf').setTitle('Da\'s Schedule').addFields({ name: 'Odd Days', value: `[1] ${schedule.da.block1}\n[3] ${schedule.da.block3}\n[5] ${schedule.da.block5}\n[[L] ${schedule.da.lunchOdd}](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[7] ${schedule.da.block7}`, inline: true},{ name: 'Even Days', value: `[2] ${schedule.da.block2}\n[3] ${schedule.da.block3}\n[4] ${schedule.da.block4}\n[[L] ${schedule.da.lunchEven}](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[6] ${schedule.da.block6}`, inline: true}).setTimestamp() .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });
    nickSchedule = new EmbedBuilder().setColor('#ffffff').setTitle('Nick\'s Schedule').addFields({ name: 'Odd Days', value: `[1] ${schedule.nick.block1}\n[3] ${schedule.nick.block3}\n[5] ${schedule.nick.block5}\n[[L] ${schedule.nick.lunchOdd}](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[7] ${schedule.nick.block7}`, inline: true},{ name: 'Even Days', value: `[2] ${schedule.nick.block2}\n[3] ${schedule.nick.block3}\n[4] ${schedule.nick.block4}\n[[L] ${schedule.nick.lunchEven}](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[6] ${schedule.nick.block6}`, inline: true}).setTimestamp() .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });
    michaelSchedule = new EmbedBuilder() .setColor('#bd194d') .setTitle("Michael's Schedule") .addFields( { name: 'Morning Routine', value: 'Step 1: Wake up\nStep 2: <:hh:810653717690318918>\nStep 3: Shit\nStep 4: Get out of bed 😎', inline: true}, ) .setTimestamp() .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });
    pobSchedule = new EmbedBuilder().setColor('#ead16b').setTitle('Pob\'s Schedule').addFields({ name: 'Odd Days', value: `[1] ${schedule.pob.block1}\n[3] ${schedule.pob.block3}\n[5] ${schedule.pob.block5}\n[[L] ${schedule.pob.lunchOdd}](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[7] ${schedule.pob.block7}`, inline: true},{ name: 'Even Days', value: `[2] ${schedule.pob.block2}\n[3] ${schedule.pob.block3}\n[4] ${schedule.pob.block4}\n[[L] ${schedule.pob.lunchEven}](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[6] ${schedule.pob.block6}`, inline: true}).setTimestamp() .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });
    sofieSchedule = new EmbedBuilder().setColor('#53aa80').setTitle('Sofie\'s Schedule').addFields({ name: 'Odd Days', value: `[1] ${schedule.sofie.block1}\n[3] ${schedule.sofie.block3}\n[5] ${schedule.sofie.block5}\n[[L] ${schedule.sofie.lunchOdd}](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[7] ${schedule.sofie.block7}`, inline: true},{ name: 'Even Days', value: `[2] ${schedule.sofie.block2}\n[3] ${schedule.sofie.block3}\n[4] ${schedule.sofie.block4}\n[[L] ${schedule.sofie.lunchEven}](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[6] ${schedule.sofie.block6}`, inline: true}).setTimestamp() .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });
    tobySchedule = new EmbedBuilder().setColor('#df1b1e').setTitle('Toby\'s Schedule').addFields({ name: 'Odd Days', value: `[1] ${schedule.toby.block1}\n[3] ${schedule.toby.block3}\n[5] ${schedule.toby.block5}\n[[L] ${schedule.toby.lunchOdd}](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[7] ${schedule.toby.block7}`, inline: true},{ name: 'Even Days', value: `[2] ${schedule.toby.block2}\n[3] ${schedule.toby.block3}\n[4] ${schedule.toby.block4}\n[[L] ${schedule.toby.lunchEven}](https://fccps.nutrislice.com/menu/george-mason-high/lunch/)\n[6] ${schedule.toby.block6}`, inline: true}).setTimestamp() .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });
    return { aidanSchedule, andySchedule, ashleySchedule, felixSchedule, daSchedule, nickSchedule, michaelSchedule, pobSchedule, sofieSchedule, tobySchedule}
}

function getName(username) {
  let name = ""
  switch(username) {
    case "Father_Cheddar": 
      name = "Aidan";
      break;
    case "zeta": 
      name = "Andy"
      break;
    case "SexEnjoyer": 
      name = "Andyeet"
      break;
  case "ghostlyworlds": 
      name = "Ashley"
      break;
    case "hello there": 
      name = "Felix"
      break;
    case "twivight": 
      name = "Da"
      break;
    case "Advance": 
      name = "Nick"
      break;
    case "DemolitionDonut": 
      name = "Michael"
      break;
    case "pobhee": 
      name = "Pob"
      break;
    case "iSleepy": 
      name = "Sofie"
      break;
    case "DEFENESTRAT10N": 
      name = "Toby"
      break;
    case "built different": 
      name = "Toby again"
      break;
    default: 
      name = username
      break;
  } return name;
    
}

function getUserObject(name, client) {
  name.toLowerCase();
  var userObject;
  switch(name) {
    case "aidan": 
      userObject = client.users.cache.get('591661500343648256');
      break;
    case "andy": 
      userObject = client.users.cache.get('263088719416786944');
      break;
  case "ashley": 
      userObject = client.users.cache.get('862033336327340032');
      break;
    case "felix": 
      userObject = client.users.cache.get('299886083745775616');
      break;
    case "da": 
      userObject = client.users.cache.get('294541886100733952');
      break;
    case "nick": 
      userObject = client.users.cache.get('617497366420914231');
      break;
    case "michael": 
      userObject = client.users.cache.get('555967885814661122');
      break;
    case "pob": 
      userObject = client.users.cache.get('552603758496972830');
      break;
    case "sofie": 
      userObject = client.users.cache.get('471488873306914826');
      break;
    case "toby": 
      userObject = client.users.cache.get('651465158912245790');
      break;
  } return userObject;
    
}

async function createTodayEmbed(daytype, specialday) {
  scheduleTitle = "Schedule:"
  if(daytype === "odd") {
    switch(day) {
      case 0: 
        schoolday = "It's the weekend!"
        break;
      case 1: 
        schoolday = "Block 1 [8:05 - 9:32]\nStable Group [9:42 - 10:42]\nBlock 5 [11:30 - 1:27]\nBlock 7 [1:33 - 3:00]"
        break;  
      case 6: 
        schoolday = "It's the weekend!"
        break;  
      default: 
        schoolday = "Block 1 [8:05 - 9:32]\nStable Group [9:38 - 9:53]\nBlock 3 [10:29 - 11:24]\nBlock 5 [11:30 - 1:27]\nBlock 7 [1:33 - 3:00]"
    }
  }
  if(daytype === "even") {
    switch(day) {
      case 0: 
        schoolday = "It's the weekend!"
        break;
      case 1: 
        schoolday = "Block 2 [8:05 - 9:32]\nStable Group [9:42 - 10:42]\nBlock 4 [11:30 - 1:27]\nBlock 6 [1:33 - 3:00]"
        break;  
      case 6: 
        schoolday = "It's the weekend!"
        break;  
      default: 
        schoolday = "Block 2 [8:05 - 9:32]\nStable Group [9:38 - 9:53]\nBlock 3 [10:29 - 11:24]\nBlock 4 [11:30 - 1:27]\nBlock 6 [1:33 - 3:00]"
    }
  }
  if(specialday) {
    console.log(specialday)

    if(specialday === "closed") {
      schoolday = "School is closed today!"
    }

    else if(specialday === "latearr") {
      scheduleTitle = "Schedule [Late Arrival]:"
      if(daytype === "odd") {
        schoolday = "Block 1 [10:05 - 11:00]\nBlock 5 [11:05 - 1:00]\nBlock 3 [1:05 - 2:00]\nBlock 7 [2:05 - 3:00]" 
      } 
      else if(daytype === "even") {
        schoolday = "Block 2 [10:05 - 11:00]\nBlock 4 [11:05 - 1:00]\nBlock 3 [1:05 - 2:00]\nBlock 6 [2:05 - 3:00]" 
      }
    }

    else if(specialday === "shortday") {
      scheduleTitle = "Schedule [Short Day]:"
      if(daytype === "odd") {
        schoolday = "Block 1 [8:05 - 9:01]\nBlock 3 [9:07 - 10:04]\nBlock 5 [10:10 - 11:07]\nBlock 7 [11:13 - 12:10]"
      } 
      else if(daytype === "even") {
        schoolday = "Block 2 [8:05 - 9:01]\nBlock 3 [9:07 - 10:04]\nBlock 4 [10:10 - 11:07]\nBlock 6 [11:13 - 12:10]"
      }
    }
  }
  todayEmbed = new EmbedBuilder()
      .setTitle("Today is " + daysArray[day] + ", " + monthsArray[month] + " " + dayOfMonth + suffixArray[dayOfMonth-1] + ", " + year)
      .setDescription(nextDate)
      .setColor("#5865F2")
      .addFields(
        { name: scheduleTitle, value: schoolday, inline: false },
        { name: "Work Schedule:", value: workArray[day], inline: false },
      )
      .setTimestamp()
      .setFooter({ text: 'Brought to you by YTPT Bot', iconURL: 'https://cdn.discordapp.com/emojis/810653717690318918.webp?size=240&quality=lossless' });
  
  todayRow = new ActionRowBuilder()
      .addComponents(
          new ButtonBuilder()
          .setLabel('Get Schedule')
          .setCustomId('getSched')
          .setDisabled(false)
          .setStyle('Success'),
          new ButtonBuilder()
          .setLabel('Update Work')
          .setCustomId('workSchedule')
          .setDisabled(false)
          .setStyle('Primary'),
          new ButtonBuilder()
          .setLabel('Lunch Menu')
          .setStyle('Link')
          .setDisabled(false)
          .setURL('https://fccps.nutrislice.com/menu/george-mason-high/lunch'),
          
      )
  sendButtons = new ActionRowBuilder()
  .addComponents(
    new ButtonBuilder()
            .setCustomId('sendit')
            .setLabel('Send it!')
            .setEmoji('✔️')
            .setStyle('Success'),
          new ButtonBuilder()
            .setCustomId('nosend')
            .setLabel('Don\'t send it')
            .setEmoji('✖️')
            .setStyle('Danger'),
    )
  return { todayEmbed, todayRow, sendButtons}
}

function checkBDay(bdayUpdateChannel, curDate) {
  if(bdays.includes(curDate)) { 
    console.log(curDate)
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
      case "June 3": 
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
        console.log("Felix")
        if(bdayUpdateChannel) {            
          bdayUpdateChannel.send("Hey @everyone, it's Felix's Birthday!")
        }
        break;
      case "November 19": 
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

module.exports = { 
    getTime,
    schedules,
    getName,
    createTodayEmbed,
    getUserObject,
    checkBDay,
}