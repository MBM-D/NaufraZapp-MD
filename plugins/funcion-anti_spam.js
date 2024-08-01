const userSpamData = {}
let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner, isROwner, isPrems}) {
const chat = global.db.data.chats[m.chat]
const bot = global.db.data.settings[conn.user.jid] || {}
if (!m.isGroup) return
if (!bot.antiSpam) return
if (chat.modoadmin) return  
if (!isBotAdmin) return
if (isOwner || isROwner || isAdmin || isPrems) return

let user = global.db.data.users[m.sender]
const sender = m.sender
const currentTime = new Date().getTime()
const timeWindow = 5000 
const messageLimit = 10 

let time, time2, time3, mensaje, motive
time = 30000 
time2 = 60000 
time3 = 120000  

if (!(sender in userSpamData)) {
userSpamData[sender] = {
lastMessageTime: currentTime,
messageCount: 1, 
antiBan: 0, 
message: 0,
message2: 0,
message3: 0,
}
} else {
const userData = userSpamData[sender]
const timeDifference = currentTime - userData.lastMessageTime

if (userData.antiBan === 1) {
if (userData.message < 1) {
userData.message++  
motive = `Spam de mensajes.`
await conn.reply(m.chat, `❮1️⃣❯ » \`𝙋𝙍𝙄𝙈𝙀𝙍𝘼 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼\`\n\n- _No podras usar el bot por \`30\` segundos._\n\n• *_Usuario:_* @${m.sender.split`@`[0]}\n- *Motivo:* ${motive}`, m, { mentions: [m.sender] })  
user.messageSpam = motive
}} else if (userData.antiBan === 2) {
if (userData.message2 < 1) {
userData.message2++  
motive =  `Spam de mensajes seguido.`
await conn.reply(m.chat, `❮2️⃣❯ » \`𝙎𝙀𝙂𝙐𝙉𝘿𝘼 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼\`\n\n- _No podras usar el bot por \`1\` minuto._\n\n• *_Usuario:_* @${m.sender.split`@`[0]}\n- *Motivo:* ${motive}`, m, { mentions: [m.sender] })  
user.messageSpam = motive
}} else if (userData.antiBan === 3) {
if (userData.message3 < 1) {
userData.message3++  
motive = `Spam de mensajes mas instantes.`
await conn.reply(m.chat, `❮3️⃣❯ » \`𝙏𝙀𝙍𝘾𝙀𝙍𝘼 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼\`\n\n- _No podras usar el bot por \`2\` minutos._\n\n• *_Usuario:_* @${m.sender.split`@`[0]}\n- *Motivo:* ${motive}`, m, { mentions: [m.sender] }) 
user.messageSpam = motive
await conn.groupParticipantsUpdate(m.chat, [sender], 'remove')
}}

if (timeDifference <= timeWindow) {
userData.messageCount += 1

if (userData.messageCount >= messageLimit) {
const mention = `@${sender.split("@")[0]}`
const warningMessage = `• *_Hola_* ${mention}, *_esta prohibido hacer spam en este chat._*`
if (userData.antiBan > 2) return
await conn.reply(m.chat, warningMessage, m, { mentions: [m.sender] })  
user.banned = true
userData.antiBan++
userData.messageCount = 1
                
if (userData.antiBan === 1) {
setTimeout(() => {
if (userData.antiBan === 1) {
userData.antiBan = 0
userData.message = 0
userData.message2 = 0
userData.message3 = 0
user.antispam = 0
motive = 0
user.messageSpam = 0
user.banned = false
}}, time) 
  
} else if (userData.antiBan === 2) {
setTimeout(() => {
if (userData.antiBan === 2) {
userData.antiBan = 0
userData.message = 0
userData.message2 = 0
userData.message3 = 0
user.antispam = 0
motive = 0
user.messageSpam = 0
user.banned = false
}}, time2) 
                
} else if (userData.antiBan === 3) {
setTimeout(() => {
if (userData.antiBan === 3) {
userData.antiBan = 0
userData.message = 0
userData.message2 = 0
userData.message3 = 0
user.antispam = 0
motive = 0
user.messageSpam = 0
user.banned = false
}}, time3)
    
}}
} else {
if (timeDifference >= 2000) {
userData.messageCount = 1
}}
userData.lastMessageTime = currentTime
}}

export default handler

