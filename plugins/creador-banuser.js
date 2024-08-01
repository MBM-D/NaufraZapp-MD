let handler = async (m, { conn, text, usedPrefix, command}) => {
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
bant = IDexotic.respoUser2
if (!text && !m.quoted) return conn.reply(m.chat, bant, null, { mentions: [user] })               
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
if(user === conn.user.jid) return conn.reply(m.chat, '❮❕❯ » 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙮𝙖 𝙚𝙨𝙩𝙖 𝙗𝙖𝙣𝙚𝙖𝙙𝙤.', null, { mentions: [user] })   
for (let i = 0; i < global.owner.length; i++) {
ownerNumber = global.owner[i][0];
if (user.replace(/@s\.whatsapp\.net$/, '') === ownerNumber) {
aa = ownerNumber + '@s.whatsapp.net'
await conn.reply(m.chat, '❮👤❯ » 𝙈𝙚𝙣𝙨𝙞𝙤𝙣𝙖 𝙖 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤.', null, { mentions: [aa] })
return
}}
users = global.db.data.users
if (users[user].banned === true) conn.reply(m.chat, IDexotic.banUserD, null, { mentions: [user] }) 
users[user].banned = true
usr = m.sender.split('@')[0]     
await conn.reply(m.chat, '❮✅❯ » 𝙐𝙨𝙪𝙖𝙧𝙞𝙤 𝙗𝙖𝙣𝙚𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤, 𝙣𝙤 𝙥𝙪𝙚𝙙𝙚 𝙪𝙨𝙖𝙧 𝙚𝙡 𝙗𝙤𝙩.', null, { mentions: [user] })   
}} catch (e) {
await conn.reply(m.chat, '❮❌❯ » 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤..', null, m)
console.log(e) 
}}
handler.command = /^banuser$/i
handler.rowner = true
export default handler