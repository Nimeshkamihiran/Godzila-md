


const { isJidGroup } = require('@whiskeysockets/baileys');
const config = require('../settings');

const getContextInfo = (m) => {
    return {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363401225837204@newsletter',
            newsletterName: 'ɢᴏᴅᴢɪʟᴀ-ᴍᴅ',
            serverMessageId: 143,
        },
    };
};

const ppUrls = [
    'https://i.ibb.co/KhYC4FY/1221bc0bdd2354b42b293317ff2adbcf-icon.png',
    'https://i.ibb.co/KhYC4FY/1221bc0bdd2354b42b293317ff2adbcf-icon.png',
    'https://i.ibb.co/KhYC4FY/1221bc0bdd2354b42b293317ff2adbcf-icon.png',
];

const GroupEvents = async (conn, update) => {
    try {
        const isGroup = isJidGroup(update.id);
        if (!isGroup) return;

        const metadata = await conn.groupMetadata(update.id);
        const participants = update.participants;
        const desc = metadata.desc || "No Description";
        const groupMembersCount = metadata.participants.length;

        let ppUrl;
        try {
            ppUrl = await conn.profilePictureUrl(update.id, 'image');
        } catch {
            ppUrl = ppUrls[Math.floor(Math.random() * ppUrls.length)];
        }

        for (const num of participants) {
            const userName = num.split("@")[0];
            const timestamp = new Date().toLocaleString();

            if (update.action === "add" && config.WELCOME === "true") {
                const WelcomeText = `╭─❖ ⚡ *Wᴇʟᴄᴏᴍᴇ ᴛᴏ Gᴏᴅᴢɪʟᴀ-ᴍᴅ Rᴇᴀʟᴍ!* ⚡ ❖─╮

👋🏻 Hey @${userName}!

🎉 Wᴇʟᴄᴏᴍᴇ ᴛᴏ *${metadata.subject}* 🏡  
Yᴏᴜ’ʀᴇ ᴛʜᴇ *#${groupMembersCount}ᴛʜ ᴍᴇᴍʙᴇʀ!*  

🕒 *Jᴏɪɴᴇᴅ ᴀᴛ:* ${timestamp}  
📌 *Gʀᴏᴜᴘ Iɴꜰᴏ:*  
${desc || "— No description available —"}

💬 Mᴀᴋᴇ ʏᴏᴜʀꜱᴇʟғ ᴀᴛ ʜᴏᴍᴇ ᴀɴᴅ ᴋᴇᴇᴘ ᴛʜᴇ ᴠɪʙᴇ ᴄᴏᴏʟ ⚡  

> 🔧 *Pᴏᴡᴇʀᴇᴅ ʙʏ ${config.BOT_NAME}*  
> 👑 *Oᴡɴᴇʀ:* Nɪᴍᴇsʜᴋᴀ Mɪʜɪʀᴀɴ 🇱🇰  
╰──────────────────────────────╯`;

                await conn.sendMessage(update.id, {
                    image: { url: ppUrl },
                    caption: WelcomeText,
                    mentions: [num],
                    contextInfo: getContextInfo({ sender: num }),
                });

            } else if (update.action === "remove" && config.WELCOME === "true") {
                const GoodbyeText = `╭─❖ ⚡ *Mᴇᴍʙᴇʀ Lᴇғᴛ ᴛʜᴇ Rᴇᴀʟᴍ* ⚡ ❖─╮

😔 @${userName} ʜᴀꜱ ʟᴇꜰᴛ *${metadata.subject}* 🏡  

🕒 *Lᴇꜰᴛ ᴀᴛ:* ${timestamp}  
👥 *Rᴇᴍᴀɪɴɪɴɢ Mᴇᴍʙᴇʀꜱ:* ${groupMembersCount}  

💭 Wɪꜱʜɪɴɢ ʏᴏᴜ ɢᴏᴏᴅ ʟᴜᴄᴋ ᴏɴ ʏᴏᴜʀ ɴᴇxᴛ ᴊᴏᴜʀɴᴇʏ 🌍  
> 👋 *${config.BOT_NAME} Sᴀʏꜱ Gᴏᴏᴅʙʏᴇ*  
> 👑 *Oᴡɴᴇʀ:* Nɪᴍᴇsʜᴋᴀ Mɪʜɪʀᴀɴ 🇱🇰  
╰──────────────────────────────╯`;

                await conn.sendMessage(update.id, {
                    image: { url: ppUrl },
                    caption: GoodbyeText,
                    mentions: [num],
                    contextInfo: getContextInfo({ sender: num }),
                });

            } else if (update.action === "demote" && config.ADMIN_EVENTS === "true") {
                const demoter = update.author.split("@")[0];
                await conn.sendMessage(update.id, {
                    text: `⚠️ *Admin Notice*

@${demoter} has removed @${userName} from admin status 🔻  

🕒 *Time:* ${timestamp}  
📢 *Group:* ${metadata.subject}`,
                    mentions: [update.author, num],
                    contextInfo: getContextInfo({ sender: update.author }),
                });

            } else if (update.action === "promote" && config.ADMIN_EVENTS === "true") {
                const promoter = update.author.split("@")[0];
                await conn.sendMessage(update.id, {
                    text: `🎉 *Admin Notice*

@${promoter} has promoted @${userName} to admin! 🛡️  

🕒 *Time:* ${timestamp}  
📢 *Group:* ${metadata.subject}  

Give a warm welcome to our new leader!`,
                    mentions: [update.author, num],
                    contextInfo: getContextInfo({ sender: update.author }),
                });
            }
        }
    } catch (err) {
        console.error('Group event error:', err);
    }
};

module.exports = GroupEvents;
