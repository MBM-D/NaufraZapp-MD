let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
const pp = './storage/logos/Menu2.jpg'

let love = `『✦』El comando ${usedPrefix + command} no es compatible para SubBots.`

conn.sendMessage(m.chat, {text: love, mentions: [m.sender]}, {quoted: m})

//conn.reply(m.chat, `*🚩 Ocurrió un fallo*`, m, fake, )

}
handler.help = ['love']
handler.tags = ['juegos']
handler.command = /^(love|amor|Love)$/i

handler.register = true

export default handler
