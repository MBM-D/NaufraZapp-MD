import fetch from 'node-fetch'  

const isLinkTik = /tiktok.com/i 
const isLinkYt = /youtube.com|youtu.be/i 
const isLinkTel = /telegram.com|t.me/i 
const isLinkFb = /facebook.com|fb.me/i 
const isLinkIg = /instagram.com/i 
const isLinkTw = /twitter.com|x.com/i 
const isLinkDc = /discord.com|discord.gg/i 
const isLinkTh = /threads.net/i 
const isLinkGit = /github.com|raw.githubusercontent.com/i 
const isLinkTch = /twitch.tv/i
  
let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
if (!m.isGroup) return 
if (!isAdmin || !isOwner || !isROwner || m.fromMe || !isBotAdmin) return

let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
let delet = m.key.participant
let bang = m.key.id
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
    
const isAntiLinkTik = isLinkTik.exec(m.text)
const isAntiLinkYt = isLinkYt.exec(m.text)
const isAntiLinkTel = isLinkTel.exec(m.text)
const isAntiLinkFb = isLinkFb.exec(m.text)
const isAntiLinkIg = isLinkIg.exec(m.text)
const isAntiLinkTw = isLinkTw.exec(m.text)
const isAntiLinkDc = isLinkDc.exec(m.text)
const isAntiLinkTh = isLinkTh.exec(m.text)
const isAntiLinkGit = isLinkGit.exec(m.text)
const isAntiLinkTch = isLinkTch.exec(m.text)
 
if (chat.antiTiktok && isAntiLinkTik) {  
if (chat.delete) return conn.sendMessage(m.chat, { text: `❮❌❯ » 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙚 𝙚𝙡 (#on antidelete) 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨.` }, { quoted: m })  
if (isBotAdmin) {
await conn.reply(m.chat, `❮⛔❯ » 𝙃𝙤𝙡𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 *@${toUser}*, 𝙩𝙚 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙢𝙤𝙨 𝙦𝙪𝙚 𝙣𝙤 𝙨𝙚 𝙥𝙚𝙧𝙢𝙞𝙩𝙚𝙣 𝙡𝙤𝙨 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 \`TikTok\` 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.\n\n• 𝙎𝙚𝙧𝙖𝙨 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙙𝙤/𝙖 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
}}
    
if (chat.antiYoutube && isAntiLinkYt) {
if (chat.delete) return conn.sendMessage(m.chat, { text: `❮❌❯ » 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙚 𝙚𝙡 (#on antidelete) 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨.` }, { quoted: m })  
if (isBotAdmin) {
await conn.reply(m.chat, `❮⛔❯ » 𝙃𝙤𝙡𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 *@${toUser}*, 𝙩𝙚 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙢𝙤𝙨 𝙦𝙪𝙚 𝙣𝙤 𝙨𝙚 𝙥𝙚𝙧𝙢𝙞𝙩𝙚𝙣 𝙡𝙤𝙨 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 \`YouTube\` 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.\n\n• 𝙎𝙚𝙧𝙖𝙨 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙙𝙤/𝙖 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
}}
    
if (chat.antiTelegram && isAntiLinkTel) {
if (chat.delete) return conn.sendMessage(m.chat, { text: `❮❌❯ » 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙚 𝙚𝙡 (#on antidelete) 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨.` }, { quoted: m })   
if (isBotAdmin) {
await conn.reply(m.chat, `❮⛔❯ » 𝙃𝙤𝙡𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 *@${toUser}*, 𝙩𝙚 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙢𝙤𝙨 𝙦𝙪𝙚 𝙣𝙤 𝙨𝙚 𝙥𝙚𝙧𝙢𝙞𝙩𝙚𝙣 𝙡𝙤𝙨 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 \`Telegram\` 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.\n\n• 𝙎𝙚𝙧𝙖𝙨 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙙𝙤/𝙖 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
}}
    
if (chat.antiFacebook && isAntiLinkFb) {
if (chat.delete) return conn.sendMessage(m.chat, { text: `❮❌❯ » 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙚 𝙚𝙡 (#on antidelete) 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨.` }, { quoted: m })  
if (isBotAdmin) {
await conn.reply(m.chat, `❮⛔❯ » 𝙃𝙤𝙡𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 *@${toUser}*, 𝙩𝙚 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙢𝙤𝙨 𝙦𝙪𝙚 𝙣𝙤 𝙨𝙚 𝙥𝙚𝙧𝙢𝙞𝙩𝙚𝙣 𝙡𝙤𝙨 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 \`Facebook\` 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.\n\n• 𝙎𝙚𝙧𝙖𝙨 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙙𝙤/𝙖 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return 
}}
    
if (chat.antiInstagram && isAntiLinkIg) {
if (chat.delete) return conn.sendMessage(m.chat, { text: `❮❌❯ » 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙚 𝙚𝙡 (#on antidelete) 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨.` }, { quoted: m })  
if (isBotAdmin) {
await conn.reply(m.chat, `❮⛔❯ » 𝙃𝙤𝙡𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 *@${toUser}*, 𝙩𝙚 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙢𝙤𝙨 𝙦𝙪𝙚 𝙣𝙤 𝙨𝙚 𝙥𝙚𝙧𝙢𝙞𝙩𝙚𝙣 𝙡𝙤𝙨 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 \`Instagram\` 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.\n\n• 𝙎𝙚𝙧𝙖𝙨 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙙𝙤/𝙖 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return 
}}
    
if (chat.antiTwitter && isAntiLinkTw) {
if (chat.delete) return conn.sendMessage(m.chat, { text: `❮❌❯ » 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙚 𝙚𝙡 (#on antidelete) 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨.` }, { quoted: m })  
if (isBotAdmin) {
await conn.reply(m.chat, `❮⛔❯ » 𝙃𝙤𝙡𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 *@${toUser}*, 𝙩𝙚 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙢𝙤𝙨 𝙦𝙪𝙚 𝙣𝙤 𝙨𝙚 𝙥𝙚𝙧𝙢𝙞𝙩𝙚𝙣 𝙡𝙤𝙨 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 \`Twitter\` 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.\n\n• 𝙎𝙚𝙧𝙖𝙨 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙙𝙤/𝙖 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
}}

if (chat.antiDiscord && isAntiLinkDc) {
if (chat.delete) return conn.sendMessage(m.chat, { text: `❮❌❯ » 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙚 𝙚𝙡 (#on antidelete) 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨.` }, { quoted: m })  
if (isBotAdmin) {
await conn.reply(m.chat, `❮⛔❯ » 𝙃𝙤𝙡𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 *@${toUser}*, 𝙩𝙚 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙢𝙤𝙨 𝙦𝙪𝙚 𝙣𝙤 𝙨𝙚 𝙥𝙚𝙧𝙢𝙞𝙩𝙚𝙣 𝙡𝙤𝙨 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 \`Discord\` 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.\n\n• 𝙎𝙚𝙧𝙖𝙨 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙙𝙤/𝙖 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
}}

if (chat.antiThreads && isAntiLinkTh) {
if (chat.delete) return conn.sendMessage(m.chat, { text: `❮❌❯ » 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙚 𝙚𝙡 (#on antidelete) 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨.` }, { quoted: m })  
if (isBotAdmin) {
await conn.reply(m.chat, `❮⛔❯ » 𝙃𝙤𝙡𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 *@${toUser}*, 𝙩𝙚 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙢𝙤𝙨 𝙦𝙪𝙚 𝙣𝙤 𝙨𝙚 𝙥𝙚𝙧𝙢𝙞𝙩𝙚𝙣 𝙡𝙤𝙨 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 \`Threads\` 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.\n\n• 𝙎𝙚𝙧𝙖𝙨 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙙𝙤/𝙖 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
}}

if (chat.antiGithub && isAntiLinkGit) {
if (chat.delete) return conn.sendMessage(m.chat, { text: `❮❌❯ » 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙚 𝙚𝙡 (#on antidelete) 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨.` }, { quoted: m })  
if (isBotAdmin) {
await conn.reply(m.chat, `❮⛔❯ » 𝙃𝙤𝙡𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 *@${toUser}*, 𝙩𝙚 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙢𝙤𝙨 𝙦𝙪𝙚 𝙣𝙤 𝙨𝙚 𝙥𝙚𝙧𝙢𝙞𝙩𝙚𝙣 𝙡𝙤𝙨 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 \`Github\` 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.\n\n• 𝙎𝙚𝙧𝙖𝙨 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙙𝙤/𝙖 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
}}

if (chat.antiTwitch && isAntiLinkTch) {
if (chat.delete) return conn.sendMessage(m.chat, { text: `❮❌❯ » 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙚 𝙚𝙡 (#on antidelete) 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨.` }, { quoted: m })  
if (isBotAdmin) {
await conn.reply(m.chat, `❮⛔❯ » 𝙃𝙤𝙡𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 *@${toUser}*, 𝙩𝙚 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙢𝙤𝙨 𝙦𝙪𝙚 𝙣𝙤 𝙨𝙚 𝙥𝙚𝙧𝙢𝙞𝙩𝙚𝙣 𝙡𝙤𝙨 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 \`Twitch\` 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.\n\n• 𝙎𝙚𝙧𝙖𝙨 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙙𝙤/𝙖 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
}}

return !0
}
export default handler
