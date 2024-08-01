var handler = async (m, { conn,usedPrefix, command, text }) => {

if (isNaN(text) && !text.match(/@/g)){
	
} else if (isNaN(text)) {
var number = text.split`@`[1]
} else if (!isNaN(text)) {
var number = text
}

if (!text && !m.quoted) return conn.reply(m.chat, `• 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙥𝙖𝙧𝙖 𝙖𝙨𝙞𝙜𝙣𝙖𝙧𝙡𝙚 𝙖𝙙𝙢𝙞𝙣.`, m )
if (number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `• 𝘿𝙚𝙗𝙚 𝙙𝙚 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧 𝙤 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙖𝙧 𝙖 𝙪𝙣𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`, m )
  
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
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
conn.reply(m.chat, `✅ • 𝙁𝙪𝙚 𝙖𝙜𝙧𝙚𝙜𝙖𝙙𝙤 𝙘𝙤𝙢𝙤 𝙖𝙙𝙢𝙞𝙣 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤.`, m )
}

}
handler.help = ['promote']
handler.tags = ['grupo']
handler.command = ['promote', 'promover']

handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null

export default handler
