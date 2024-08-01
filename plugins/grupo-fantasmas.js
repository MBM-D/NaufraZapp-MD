//import { areJidsSameUser } from '@adiwajshing/baileys'
let areJidsSameUser =  (await import(global.baileys)).default
let handler = async (m, { conn, text, participants, args, areJidsSameUser, command }) => {
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "fantasmas": 
if(total == 0) return conn.reply(m.chat, `❮✅❯ » 𝙂𝙧𝙪𝙥𝙤 𝙖𝙘𝙩𝙞𝙫𝙤, 𝙣𝙤 𝙝𝙖𝙮 𝙛𝙖𝙣𝙩𝙖𝙨𝙢𝙖𝙨.`, m) 
m.reply(`• *REVICION DE INACTIVIDAD*\n\n*GRUPO:* ${await conn.getName(m.chat)}\n*PARTICIPANTES:* ${sum}\n\n*LISTA DE INACTIVOS:*\n${sider.map(v => '  • @' + v.replace(/@.+/, '')).join('\n')}\n\n❮✅❯ » Esto no puede ser cierto al 100%, el bot inicia el conteo al entrar en el grupo.`, null, { mentions: sider }) 
  break   
case "kickfantasmas":  
        if(total == 0) return conn.reply(m.chat, `❮✅❯ » 𝙂𝙧𝙪𝙥𝙤 𝙖𝙘𝙩𝙞𝙫𝙤, 𝙣𝙤 𝙝𝙖𝙮 𝙛𝙖𝙣𝙩𝙖𝙨𝙢𝙖𝙨.`, m) 
       await m.reply(`• *ELIMINAR INACTIVOS/AS:*\n\n*GRUPO:* ${await conn.getName(m.chat)}\n*PARTICIPANTES:* ${sum}\n\n*MENSIONADOS:*\n${sider.map(v => '@' + v.replace(/@.+/, '')).join('\n')}\n\n❮✅❯ » *Se eliminara un usuario cada 10 segundos o 5 segundos con exito.*`, null, { mentions: sider }) 
       await delay(1 * 10000)
       let chat = global.db.data.chats[m.chat]
       chat.welcome = false
       try{
       
         let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
       let kickedGhost = sider.map(v => v.id).filter(v => v !== conn.user.jid)
       for (let user of users)
           if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin)
        {
        let res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
        kickedGhost.concat(res)
       await delay(1 * 10000)
       }} finally{
        chat.welcome = true
       }
break            
}}
handler.command = /^(fantasmas|kickfantasmas)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
handler.register = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


    //desarrollado por https://github.com/ReyEndymion
    //participa en desactivacion de despedida https://github.com/BrunoSobrino/


