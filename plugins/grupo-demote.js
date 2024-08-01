var handler = async (m, { conn,usedPrefix, command, text }) => {

if (isNaN(text) && !text.match(/@/g)){
	
} else if (isNaN(text)) {
var number = text.split`@`[1]
} else if (!isNaN(text)) {
var number = text
}

if (!text && !m.quoted) return conn.reply(m.chat, `• 𝙈𝙚𝙣𝙨𝙞𝙤𝙣𝙚 𝙖 𝙪𝙣 𝙖𝙙𝙢𝙞𝙣 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`, m )
if (number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `• 𝙀𝙧𝙧𝙤𝙧, 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙖𝙧 𝙖 𝙪𝙣 𝙖𝙙𝙢𝙞𝙣.`, m )
  
try {
if (text) {
var user = number + '@s.whatsapp.net'
} else if (m.quoted.sender) {
var user = m.quoted.sender
} else if (m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'demote')
conn.reply(m.chat, `✅ • 𝙁𝙪𝙚 𝙙𝙚𝙨𝙘𝙖𝙧𝙩𝙖𝙙𝙤 𝙘𝙤𝙢𝙤 𝙖𝙙𝙢𝙞𝙣.`, m )
}

}
handler.help = ['demote']
handler.tags = ['grupo']
handler.command = ['demote', 'degradar']

handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null

export default handler
