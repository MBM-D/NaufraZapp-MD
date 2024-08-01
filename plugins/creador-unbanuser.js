let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `❮❕❯ » 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙗𝙖𝙣𝙚𝙖𝙙𝙤 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙗𝙖𝙣𝙚𝙖𝙧𝙡𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} @${global.owner[0][0]}*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `❮❌❯ » 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙣𝙤 𝙛𝙪𝙚 𝙗𝙖𝙣𝙚𝙖𝙙𝙤 𝙤 𝙣𝙤 𝙚𝙭𝙞𝙨𝙩𝙚 𝙚𝙣 𝙢𝙞 𝙗𝙖𝙨𝙚 𝙙𝙚 𝙙𝙖𝙩𝙤𝙨, 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙗𝙖𝙣𝙚𝙖𝙙𝙤.`
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `❮✅❯ » 𝙐𝙨𝙪𝙖𝙧𝙞𝙤 𝙙𝙚𝙨𝙗𝙖𝙣𝙚𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤, 𝙖𝙝𝙤𝙧𝙖 𝙥𝙪𝙚𝙙𝙚 𝙪𝙨𝙖𝙧 𝙚𝙡 𝙗𝙤𝙩.`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.group = true
handler.admin = true 
export default handler
