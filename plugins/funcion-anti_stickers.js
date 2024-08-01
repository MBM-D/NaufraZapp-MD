var handler = m => m
handler.before = function (m, { isAdmin, isBotAdmin }) {

if (m.isBaileys && m.fromMe) return true
let chat = global.db.data.chats[m.chat]
let sender = global.db.data.chats[m.sender]
  

let isSticker = m.mtype
if (chat.antiSticker && isSticker) {
if (isSticker === 'stickerMessage'){
if (global.opts) {
if (isAdmin || !isBotAdmin){		  
} else{

conn.reply(m.chat, '⚠️ • 𝙀𝙣 𝙚𝙨𝙩𝙚 𝙘𝙝𝙖𝙩 𝙣𝙤 𝙨𝙚 𝙥𝙚𝙧𝙢𝙞𝙩𝙚𝙣 𝙡𝙞𝙨 𝙨𝙩𝙞𝙘𝙠𝙚𝙧𝙨, 𝙨𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤.', fkontak, m ) 
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')

} return true
}}}
return true

}

export default handler
