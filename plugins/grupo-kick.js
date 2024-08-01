const handler = async (m, {conn, participants, usedPrefix, command}) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `❮❌❯ » 𝙇𝙖𝙨 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙘𝙞𝙤𝙣𝙚𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙚𝙨𝙩𝙖𝙣 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤𝙨.\n\n𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝘾𝙊𝙉:\n#on restrict`
let texto = `❮❕❯ » 𝙋𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙙𝙚𝙗𝙚𝙨 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙖𝙧 𝙤 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧 𝙖 𝙖𝙡𝙜𝙪𝙞𝙚𝙣.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n${usedPrefix + command} @${global.owner[0][0]}`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(texto, m.chat, {mentions: conn.parseMention(texto)})
if (m.mentionedJid.includes(conn.user.jid)) return
const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
const owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')}
handler.command = /^(kick|echar|hechar|sacar|ban)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
handler.register = true
export default handler