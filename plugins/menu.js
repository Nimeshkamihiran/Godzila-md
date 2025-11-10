const fs = require('fs');
const config = require('../settings');
const { lite, commands } = require('../neno');

lite({
    pattern: "menu",
    react: "👑",
    alias: ["fullmenu"],
    desc: "Get command list",
    category: "main",
    filename: __filename
},
async (conn, mek, m, {
    from, quoted, pushname, reply
}) => {
    try {
        let menu = {
            download: [], group: [], fun: [], owner: [],
            ai: [], anime: [], convert: [], reaction: [],
            main: [], other: []
        };

        // Group commands by category
        for (let i = 0; i < commands.length; i++) {
            let cmd = commands[i];
            if (cmd.pattern && !cmd.dontAddCommandList && menu.hasOwnProperty(cmd.category)) {
                menu[cmd.category].push(cmd.pattern);
            }
        }

        // Create category menu
        let categoryMenu = `
╭─❖ ⚡ *${config.BOT_NAME} ᴍᴇɴᴜ* ⚡ ❖─╮
│ 👤 *User:* ${pushname}
│ 🌐 *Mode:* [ ${config.MODE} ]
│ ✨ *Prefix:* [ ${config.PREFIX} ]
│ ⚙️ *Total Commands:* ${commands.length}
│ 📦 *Version:* ${config.version} BETA
╰──────────────────────────────╯

*📋 Select a Category:*

1️⃣ 🛠️ *Admin Commands* (${menu.group.length + menu.main.length + menu.other.length})
2️⃣ 📥 *Downloader Commands* (${menu.download.length})
3️⃣ 👑 *Owner Commands* (${menu.owner.length})
4️⃣ 🧠 *AI Commands* (${menu.ai.length})
5️⃣ ✨ *Logo / Anime Commands* (${menu.anime.length})
6️⃣ 🔄 *Convert Commands* (${menu.convert.length})
7️⃣ 🎭 *Reaction Commands* (${menu.reaction.length})
8️⃣ 🎉 *Fun Commands* (${menu.fun.length})
9️⃣ 📜 *All Commands*

*Reply with a number (1-9) to view commands*

╭──────────────────────────────╮
│ 🔥 *Stay Roaring With GODZILA-MD!* 🐉
│ 👑 *Owner:* Nɪᴍᴇsʜᴋᴀ Mɪʜɪʀᴀɴ 🇱🇰
│ 💬 *${config.DESCRIPTION}*
╰──────────────────────────────╯
`;

        // Send category menu
        const sentMsg = await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/se5svk.jpg'   },
                caption: categoryMenu,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363401225837204@newsletter',
                        newsletterName: 'ᴋɪɴɢ ɢᴏᴅᴢɪʟᴀ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        await conn.sendMessage(from, {
            audio: fs.readFileSync('./all/menu.m4a'),
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

        // Listen for reply
        const messageId = sentMsg.key.id;
        
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || msg.key.fromMe) return;
            
            const isReply = msg.message.extendedTextMessage?.contextInfo?.stanzaId === messageId;
            if (!isReply || msg.key.remoteJid !== from) return;

            const userReply = msg.message.conversation || msg.message.extendedTextMessage?.text || '';
            const choice = userReply.trim();

            let responseMenu = '';
            let categoryTitle = '';
            
            switch(choice) {
                case '1':
                    categoryTitle = '🛠️ *Admin Commands*';
                    responseMenu = `
╭─❖ ⚡ *${config.BOT_NAME}* ⚡ ❖─╮
│ 👤 *User:* ${pushname}
│ 📂 *Category:* Admin
│ 📊 *Commands:* ${menu.group.length + menu.main.length + menu.other.length}
╰──────────────────────────────╯

┌───『 🛠️ *Admin Commands* 』
${menu.group.map(cmd => `│ ⬡ ${cmd}`).join('\n') || '│ (No commands found)'}
${menu.main.map(cmd => `│ ⬡ ${cmd}`).join('\n') || ''}
${menu.other.map(cmd => `│ ⬡ ${cmd}`).join('\n') || ''}
└──────────────✦

╭──────────────────────────────╮
│ 💡 *Tip:* Type ${config.PREFIX}menu to see all categories
│ 🔥 *Stay Roaring With GODZILA-MD!* 🐉
╰──────────────────────────────╯`;
                    break;
                    
                case '2':
                    categoryTitle = '📥 *Downloader Commands*';
                    responseMenu = `
╭─❖ ⚡ *${config.BOT_NAME}* ⚡ ❖─╮
│ 👤 *User:* ${pushname}
│ 📂 *Category:* Downloader
│ 📊 *Commands:* ${menu.download.length}
╰──────────────────────────────╯

┌───『 📥 *Downloader Commands* 』
${menu.download.map(cmd => `│ ⬡ ${cmd}`).join('\n') || '│ (No commands found)'}
└──────────────✦

╭──────────────────────────────╮
│ 💡 *Tip:* Type ${config.PREFIX}menu to see all categories
│ 🔥 *Stay Roaring With GODZILA-MD!* 🐉
╰──────────────────────────────╯`;
                    break;
                    
                case '3':
                    categoryTitle = '👑 *Owner Commands*';
                    responseMenu = `
╭─❖ ⚡ *${config.BOT_NAME}* ⚡ ❖─╮
│ 👤 *User:* ${pushname}
│ 📂 *Category:* Owner
│ 📊 *Commands:* ${menu.owner.length}
╰──────────────────────────────╯

┌───『 👑 *Owner Commands* 』
${menu.owner.map(cmd => `│ ⬡ ${cmd}`).join('\n') || '│ (No commands found)'}
└──────────────✦

╭──────────────────────────────╮
│ 💡 *Tip:* Type ${config.PREFIX}menu to see all categories
│ 🔥 *Stay Roaring With GODZILA-MD!* 🐉
╰──────────────────────────────╯`;
                    break;
                    
                case '4':
                    categoryTitle = '🧠 *AI Commands*';
                    responseMenu = `
╭─❖ ⚡ *${config.BOT_NAME}* ⚡ ❖─╮
│ 👤 *User:* ${pushname}
│ 📂 *Category:* AI
│ 📊 *Commands:* ${menu.ai.length}
╰──────────────────────────────╯

┌───『 🧠 *AI Commands* 』
${menu.ai.map(cmd => `│ ⬡ ${cmd}`).join('\n') || '│ (No commands found)'}
└──────────────✦

╭──────────────────────────────╮
│ 💡 *Tip:* Type ${config.PREFIX}menu to see all categories
│ 🔥 *Stay Roaring With GODZILA-MD!* 🐉
╰──────────────────────────────╯`;
                    break;
                    
                case '5':
                    categoryTitle = '✨ *Logo / Anime Commands*';
                    responseMenu = `
╭─❖ ⚡ *${config.BOT_NAME}* ⚡ ❖─╮
│ 👤 *User:* ${pushname}
│ 📂 *Category:* Logo / Anime
│ 📊 *Commands:* ${menu.anime.length}
╰──────────────────────────────╯

┌───『 ✨ *Logo / Anime Commands* 』
${menu.anime.map(cmd => `│ ⬡ ${cmd}`).join('\n') || '│ (No commands found)'}
└──────────────✦

╭──────────────────────────────╮
│ 💡 *Tip:* Type ${config.PREFIX}menu to see all categories
│ 🔥 *Stay Roaring With GODZILA-MD!* 🐉
╰──────────────────────────────╯`;
                    break;
                    
                case '6':
                    categoryTitle = '🔄 *Convert Commands*';
                    responseMenu = `
╭─❖ ⚡ *${config.BOT_NAME}* ⚡ ❖─╮
│ 👤 *User:* ${pushname}
│ 📂 *Category:* Convert
│ 📊 *Commands:* ${menu.convert.length}
╰──────────────────────────────╯

┌───『 🔄 *Convert Commands* 』
${menu.convert.map(cmd => `│ ⬡ ${cmd}`).join('\n') || '│ (No commands found)'}
└──────────────✦

╭──────────────────────────────╮
│ 💡 *Tip:* Type ${config.PREFIX}menu to see all categories
│ 🔥 *Stay Roaring With GODZILA-MD!* 🐉
╰──────────────────────────────╯`;
                    break;
                    
                case '7':
                    categoryTitle = '🎭 *Reaction Commands*';
                    responseMenu = `
╭─❖ ⚡ *${config.BOT_NAME}* ⚡ ❖─╮
│ 👤 *User:* ${pushname}
│ 📂 *Category:* Reaction
│ 📊 *Commands:* ${menu.reaction.length}
╰──────────────────────────────╯

┌───『 🎭 *Reaction Commands* 』
${menu.reaction.map(cmd => `│ ⬡ ${cmd}`).join('\n') || '│ (No commands found)'}
└──────────────✦

╭──────────────────────────────╮
│ 💡 *Tip:* Type ${config.PREFIX}menu to see all categories
│ 🔥 *Stay Roaring With GODZILA-MD!* 🐉
╰──────────────────────────────╯`;
                    break;
                    
                case '8':
                    categoryTitle = '🎉 *Fun Commands*';
                    responseMenu = `
╭─❖ ⚡ *${config.BOT_NAME}* ⚡ ❖─╮
│ 👤 *User:* ${pushname}
│ 📂 *Category:* Fun
│ 📊 *Commands:* ${menu.fun.length}
╰──────────────────────────────╯

┌───『 🎉 *Fun Commands* 』
${menu.fun.map(cmd => `│ ⬡ ${cmd}`).join('\n') || '│ (No commands found)'}
└──────────────✦

╭──────────────────────────────╮
│ 💡 *Tip:* Type ${config.PREFIX}menu to see all categories
│ 🔥 *Stay Roaring With GODZILA-MD!* 🐉
╰──────────────────────────────╯`;
                    break;
                    
                case '9':
                    categoryTitle = '📜 *All Commands*';
                    responseMenu = `
╭─❖ ⚡ *${config.BOT_NAME}* ⚡ ❖─╮
│ 👤 *User:* ${pushname}
│ 📂 *Category:* All Commands
│ 📊 *Total:* ${commands.length}
╰──────────────────────────────╯

┌───『 🛠️ *Admin Commands* 』
${menu.group.map(cmd => `│ ⬡ ${cmd}`).join('\n') || '│ (No commands found)'}
${menu.main.map(cmd => `│ ⬡ ${cmd}`).join('\n') || ''}
${menu.other.map(cmd => `│ ⬡ ${cmd}`).join('\n') || ''}
└──────────────✦

┌───『 📥 *Downloader Commands* 』
${menu.download.map(cmd => `│ ⬡ ${cmd}`).join('\n') || '│ (No commands found)'}
└──────────────✦

┌───『 👑 *Owner Commands* 』
${menu.owner.map(cmd => `│ ⬡ ${cmd}`).join('\n') || '│ (No commands found)'}
└──────────────✦

┌───『 🧠 *AI Commands* 』
${menu.ai.map(cmd => `│ ⬡ ${cmd}`).join('\n') || '│ (No commands found)'}
└──────────────✦

┌───『 ✨ *Logo / Anime Commands* 』
${menu.anime.map(cmd => `│ ⬡ ${cmd}`).join('\n') || '│ (No commands found)'}
└──────────────✦

┌───『 🔄 *Convert Commands* 』
${menu.convert.map(cmd => `│ ⬡ ${cmd}`).join('\n') || '│ (No commands found)'}
└──────────────✦

┌───『 🎭 *Reaction Commands* 』
${menu.reaction.map(cmd => `│ ⬡ ${cmd}`).join('\n') || '│ (No commands found)'}
└──────────────✦

┌───『 🎉 *Fun Commands* 』
${menu.fun.map(cmd => `│ ⬡ ${cmd}`).join('\n') || '│ (No commands found)'}
└──────────────✦

╭──────────────────────────────╮
│ 🔥 *Stay Roaring With GODZILA-MD!* 🐉
│ 👑 *Owner:* Nɪᴍᴇsʜᴋᴀ Mɪʜɪʀᴀɴ 🇱🇰
╰──────────────────────────────╯`;
                    break;
                    
                default:
                    await conn.sendMessage(from, {
                        image: { url: config.MENU_IMAGE_URL },
                        caption: '❌ *Invalid Choice!*\n\nPlease reply with a number between *1-9*\n\nType .menu to see the menu again.',
                        contextInfo: {
                            mentionedJid: [msg.key.participant || msg.key.remoteJid],
                            forwardingScore: 999,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: '120363401225837204@newsletter',
                                newsletterName: 'ᴋɪɴɢ ɢᴏᴅᴢɪʟᴀ',
                                serverMessageId: 143
                            }
                        }
                    }, { quoted: msg });
                    return;
            }

            if (responseMenu) {
                await conn.sendMessage(from, {
                    image: { url: config.MENU_IMAGE_URL },
                    caption: responseMenu,
                    contextInfo: {
                        mentionedJid: [msg.key.participant || msg.key.remoteJid],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363401225837204@newsletter',
                            newsletterName: 'ᴋɪɴɢ ɢᴏᴅᴢɪʟᴀ',
                            serverMessageId: 143
                        }
                    }
                }, { quoted: msg });

                // Send voice note for each reply
                await conn.sendMessage(from, {
                    audio: fs.readFileSync('./all/menu.m4a'),
                    mimetype: 'audio/mp4',
                    ptt: true
                }, { quoted: msg });
            }
        });

    } catch (e) {
        console.error(e);
        reply(`${e}`);
    }
});