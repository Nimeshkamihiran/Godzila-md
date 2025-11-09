const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "GODZILA~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEs3allEZXdXVUNoeGNoWHYxcU9BZTFmQ2haTlB4MUthY2dndEgrME9YWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3VqaXhqS20vYUU5WmFyYkNYMSt5Qy9PdjhEQlZVNjdKcmdjZCtCV0UyST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwS0NkdXR6czVaMmZjOFVaSlhXWTJyc3ozWlIweTlUVHRZVnlZSkVFaGs4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTTZYQ0VrYXpyWkxFVDAxaXE4cmdXbXJBRWdKb2pnT2Q1em1SWFhDckZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNOMzFDanpoSkRvTGlWb21yWFAwanlURzFjcUU0Q1JvVTFpUHlxMjZrR3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlU5QnAwZG85THpUanZZZGRKRk8xVnpCWU1XZkNhK2pEdEdxS2NZbkkvSEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUR2MG91T0lwUkFqWjdkMzBTVmo2cEovVFluMHNZcWdzYldUeXFaSkgwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmY1TTB5QldORk9Dd29DQ2tUend6VmZ1Nk1xMXNlY2orWHRBSmdRMHRCRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik14QkNFSCt0dUxzZS9CZjB2R3pCbmpNdGx3dUMxMSsyNWUrL3hGOVVLMzR2VFBNSVVjSEQvcVJ3aHoyVjBMSWpaTE9EakN0RGdMYnVlem1XN0N5RGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ4LCJhZHZTZWNyZXRLZXkiOiJSSEswblVtYVNQbTNPZnFKRGFzMlZqalF0d09jTUNvT2JPMTE5MCtNejhRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg5MzQ1NTMxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDOTFBREY2RDBCNDQ0NEM2OTYxNTQzM0QzRjI2ODYyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjI2NzgyMDR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg5MzQ1NTMxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNzQxNTZBNTM1RDMxRUJCNzM5Rjg5OTYyMkM1MjIwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjI2NzgyMDR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg5MzQ1NTMxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDOEEzRjU2NjI0REFCMjYxN0U4MDVEODIwM0I3MUIxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjI2NzgyMDZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg5MzQ1NTMxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDREExQTQwOURDRjVGOUNFM0MwQ0Q1MENBM0E3RTQ2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjI2NzgyMDZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJXTVFlSVJ2VHlPQ013enh0UC14VWciLCJwaG9uZUlkIjoiMjQ1YzExNjktOTZiOS00N2ZjLWEzYmMtODcwOGI0MDMyNmI3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZCUEwxY2VFM2NHREljSHJLdk1Na0pLZ2ZrTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrNmpHTUNaaUZ2NmhnK0FQYUpyOFV1S1g5WDg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTVJNQUxWSU4iLCJtZSI6eyJpZCI6Ijk0Nzg5MzQ1NTMxOjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI5OTE3MTQ2NTk2OTgzMzoxQGxpZCIsIm5hbWUiOiJtaWhpcmFuZ2FtaWhpcmFuZ2EyMjMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tPOXQ0OEJFSzJyd2NnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InpUbHh1Y1JsNjhIeUpiYy91MUt3cSt4UTh0SG1mWlJYV2FQU1doMUcwdzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ink1clpPR015eXR2ZmxjWENSeUZ6MUxuVVRGNlFnQkxCUm5IaHZ0QmN6cERzeUJ4ZklSd3liUVJ4ZzA0Vlk4Q0F2ZzU1OS85ckRkbUdDNVM2aXNBVkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxRFdPMDdaUGMxanVyUXFzNXhaZEo2TU5GRElQRWQ1UUlrV3NybHQ1eEVqUW5vd0J5SFk3b0tJMy9FWnhyYk50NXVEdUl6UGN3VDFiaU14dC9md0FqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg5MzQ1NTMxOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYzA1Y2JuRVpldkI4aVczUDd0U3NLdnNVUExSNW4yVVYxbWowbG9kUnRNUCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBZ04ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYyNjc4MjAyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhvdiJ9",
    // add your Session Id make sure it starts with lite~

    PREFIX: process.env.PREFIX || ".",
    // add your prefix for bot

    BOT_NAME: process.env.BOT_NAME || "ɢᴏᴅᴢɪʟᴀ-ᴍᴅ",
    // add bot name here for menu

    MODE: process.env.MODE || "public",
    // make bot public-private-inbox-group 

    LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    // make true or false status auto seen

    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    // make true if you want auto reply on status 

    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    // make true if you want auto reply on status 

    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*🔥𝐒𝐄𝐄 𝐘𝐎𝐔𝐑 𝐒𝐓𝐀𝐓𝐔𝐒𝐄 𝐁𝐘 𝐆𝐎𝐃𝐙𝐈𝐋𝐀 👑*",
    // set the auto reply message on status reply  

    WELCOME: process.env.WELCOME || "true",
    // true if want welcome and goodbye msg in groups 

    ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
    // make true to know who dismiss or promoted a member in group

    ANTI_LINK: process.env.ANTI_LINK || "true",
    // make anti link true,false for groups 

    MENTION_REPLY: process.env.MENTION_REPLY || "false",
    // make true if want auto voice reply if someone mention you 

    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/lm4a0b.jpg",
    // add custom menu and mention reply image url

    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lm4a0b.jpg",
    // add img for alive msg

    LIVE_MSG: process.env.LIVE_MSG || 
`> ⚡ ʙᴏᴛ ɪꜱ ᴀʟɪᴠᴇ ᴀɴᴅ ʀᴏᴀʀɪɴɢ!  

🔥 ᴋᴇᴇᴘ ᴜsɪɴɢ ✦Gᴏᴅᴢɪʟᴀ-ᴍᴅ✦ ᴘᴏᴡᴇʀᴇᴅ ʙʏ Nɪᴍᴇsʜᴋᴀ Mɪʜɪʀᴀɴ 🇱🇰  

*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - Gᴏᴅᴢɪʟᴀ ᴍᴅ 🐉*

> ɢɪᴛʜᴜʙ : github.com/Nimeshkamihiran`,
    // add alive msg here 

    STICKER_NAME: process.env.STICKER_NAME || "ɢᴏᴅᴢɪʟᴀ-ᴅᴇᴍᴀɴ💪",
    // type sticker pack name 

    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    // make this true for custom emoji react  

    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,💛,💚,💙,💜,🤎,🖤,🤍",
    // choose custom react emojis by yourself 

    DELETE_LINKS: process.env.DELETE_LINKS || "false",
    // automatic delete links without removing member 

    OWNER_NUMBER: process.env.OWNER_NUMBER || "94721584279",
    // add your bot owner number

    OWNER_NAME: process.env.OWNER_NAME || "ɴɪᴍᴇꜱʜᴋᴀ ᴍɪʜɪʀᴀɴ",
    // add bot owner name

    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇɴᴏ ᴏᴡɴᴇʀꜱ*",
    // add bot owner description  

    READ_MESSAGE: process.env.READ_MESSAGE || "false",
    // Turn true or false for automatic read msgs

    AUTO_REACT: process.env.AUTO_REACT || "false",
    // make this true or false for auto react on all msgs

    ANTI_BAD: process.env.ANTI_BAD || "false",
    // false or true for anti bad words  

    ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
    // make anti link true,false for groups 

    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    // make true for automatic stickers 

    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    // make true or false automatic text reply 

    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    // make true for always online 

    PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
    // make false if want private mode

    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    // true for automatic show typing  

    READ_CMD: process.env.READ_CMD || "false",
    // true if want mark commands as read  

    DEV: process.env.DEV || "94721584279",
    // replace with your whatsapp number  

    ANTI_VV: process.env.ANTI_VV || "true",
    // true for anti once view 

    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
    // change it to 'inbox' or 'same' if you want to resend deleted message in same chat 

    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
    // make it true for auto recording 

    version: process.env.version || "0.0.1",

    START_MSG: process.env.START_MSG || 
`╭─❖ ⚡ *Gᴏᴅᴢɪʟᴀ-ᴍᴅ Cᴏɴɴᴇᴄᴛᴇᴅ!* ⚡ ❖─╮

*👋🏻 Hᴇʏ Tʜᴇʀᴇ!*  
Tʜᴇ Bᴇᴀsᴛ ɪs ᴀᴡᴀᴋᴇ ᴀɴᴅ Rᴇᴀᴅʏ ᴛᴏ Rᴏᴀʀ 🐉  

🔥 *Kᴇᴇᴘ Rᴏᴀʀɪɴɢ ᴡɪᴛʜ Gᴏᴅᴢɪʟᴀ Mᴏᴅs*  
> Sᴛᴀʏ Pᴏᴡᴇʀᴇᴅ. Sᴛᴀʏ Dᴏᴍɪɴᴀɴᴛ.  

🎬 *YᴏᴜTᴜʙᴇ Tᴜᴛᴏʀɪᴀʟꜱ:*  
https://youtube.com/@NENO-XMD

💠 *ʙᴏᴛ ᴘʀᴇғɪx:* ➡️ [ . ]  
> ᴜꜱᴇ .prefix ᴄᴏᴍᴍᴀɴᴅ ᴛᴏ ᴄʜᴀɴɢᴇ ɪᴛ  

⭐ *Sʜᴀʀᴇ, Sᴛᴀʀ & Fᴏʀᴋ ᴛʜᴇ ʀᴇᴘᴏ:*  
https://github.com/Nimeshkamihiran

👑 *Oᴡɴᴇʀ:* Nɪᴍᴇsʜᴋᴀ Mɪʜɪʀᴀɴ 🇱🇰  
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ Gᴏᴅᴢɪʟᴀ-ᴍᴅ ⚔️
╰───────────────────────────────╯`,
};
