var handler = async (m, {conn, text, usedPrefix, command}) => {

global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) return conn.reply(m.chat, '⬇️ 𝗥𝗲𝘀𝗽𝗼𝗻𝗱𝗮 𝗮 𝘂𝗻𝗮 𝗶𝗺𝗮𝗴𝗲𝗻 𝗼 𝘀𝘁𝗶𝗰𝗸𝗲𝗿.', m )
if (!m.quoted.fileSha256) return conn.reply(m.chat, '♨️ 𝗦𝗼𝗹𝗼 𝘀𝗲 𝗮𝗱𝗺𝗶𝘁𝗲𝗻 𝗶𝗺𝗮𝗴𝗲𝗻𝗲𝘀 𝗼 𝘀𝘁𝗶𝗰𝗸𝗲𝗿𝘀.', m )
if (!text) return conn.reply(m.chat, `🚫 𝗘𝗿𝗿𝗼𝗿, 𝘁𝗲 𝗳𝗮𝗹𝘁𝗼 𝗶𝗻𝗴𝗿𝗲𝘀𝗮𝗿 𝘂𝗻 𝘁𝗲𝘅𝘁𝗼. 𝗣𝗼𝗿 𝗲𝗷𝗲𝗺𝗽𝗹𝗼:\n${usedPrefix + command} *#menu responder a sticker*`, m )
  
const sticker = global.db.data.sticker
const hash = m.quoted.fileSha256.toString('base64')

if (sticker[hash] && sticker[hash].locked) return conn.reply(m.chat, '🚫 𝗦𝗼𝗹𝗼 𝗲𝗹 𝗰𝗿𝗲𝗮𝗱𝗼𝗿 𝗹𝗼𝘀 𝗽𝗿𝗼𝗽𝗶𝗲𝘁𝗮𝗿𝗶𝗼𝘀 𝗽𝘂𝗲𝗱𝗲𝗻 𝘂𝘀𝗮𝗿 𝗲𝘀𝘁𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼.', m )
sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false}
conn.reply(m.chat, `💾 𝗖𝗼𝗺𝗮𝗻𝗱𝗼 𝗴𝘂𝗮𝗿𝗱𝗮𝗱𝗼.`, m)
}

handler.tags = ['database']
handler.help = ['setcmd']
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset']

handler.rowner = true

export default handler
