var handler = async (m, { conn, text, usedPrefix, command}) => {

let user, number, bot, bant, ownerNumber, aa, users, usr, q, mime, img

try {
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)
if(isNaN(text)) {
number = text.split`@`[1]
} else if(!isNaN(text)) {
number = text
}
user = conn.user.jid.split`@`[0] + '@s.whatsapp.net'
bot = conn.user.jid.split`@`[0] 
bant = `『🪐』𝙈𝙚𝙣𝙨𝙞𝙤𝙣𝙚 𝙖 𝙪𝙣𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`
if (!text && !m.quoted) return conn.reply(m.chat, bant, m, { mentions: [user] })               
try {
if(text) {
user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
user = m.quoted.sender
} else if(m.mentionedJid) {
user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
number = user.split('@')[0]
if(user === conn.user.jid) return conn.reply(m.chat, `『📣』𝙉𝙤 𝙥𝙪𝙚𝙙𝙤 𝙨𝙚𝙧 𝙗𝙖𝙣𝙚𝙖𝙙𝙤...`, m, { mentions: [user] })   
for (let i = 0; i < global.owner.length; i++) {
ownerNumber = global.owner[i][0];
if (user.replace(/@s\.whatsapp\.net$/, '') === ownerNumber) {
aa = ownerNumber + '@s.whatsapp.net'
await conn.reply(m.chat, `『📣』𝙉𝙤 𝙥𝙪𝙚𝙙𝙤 𝙗𝙖𝙣𝙚𝙖𝙧 𝙖𝙡 𝙤𝙬𝙣𝙚𝙧 @${ownerNumber} 𝙙𝙚𝙡 𝙗𝙤𝙩.`, m, { mentions: [aa] })
return
}}
users = global.db.data.users
if (users[user].banned === true) conn.reply(m.chat, `『🪐』𝙉𝙤 𝙚𝙨 𝙣𝙚𝙘𝙚𝙨𝙖𝙧𝙞𝙤 𝙗𝙖𝙣𝙚𝙖𝙧 𝙖 @${number}, 𝙮𝙖 𝙚𝙨𝙩𝙖 𝙗𝙖𝙣𝙚𝙖𝙙𝙤.`, m, { mentions: [user] }) 
users[user].banned = true
usr = m.sender.split('@')[0]     
await conn.reply(m.chat, '『✅』𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙛𝙪𝙚 𝙗𝙖𝙣𝙚𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!!', m, { mentions: [user] })   

}} catch (e) {
await conn.reply(m.chat, '『❌』𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤...' )
console.log(e) 
}

}
handler.tags = ['owner']
handler.commnad = ['banuser']
handler.command = /^banuser$/i

handler.rowner = true

export default handler
