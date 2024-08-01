var handler = async (m, { conn, args, text, usedPrefix, command }) => {

let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	
let user = global.db.data.users[who]
let nom = conn.getName(m.sender)
if (!global.db.data.settings[conn.user.jid].restrict) return conn.reply(m.chat, `『✦』Esta funcion no es compatible para *Sub-Bots*`, m)
if (!text) return conn.reply(m.chat, `*『✦』Ingrese el numero de la persona sin el (+), por ejemplo:\n\n#${command} 5217299999999`, m)
if (text.includes('+')) return conn.reply(m.chat, `『✦』Error, debe de ingresar el numero sin el código (+).`, m )
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
await conn.reply(text+'@s.whatsapp.net', `*『✦』Hola soy un bot de WhatsApp, alguien te invito a un grupo.*\n\n*『✦』LINK/ENLACE:*\n${link}\n\n『😃』Te estamos esperando.`, m, {mentions: [m.sender]} )
conn.reply(m.chat, `*『✅』La invitación se ha enviado al privado de:*\n${nom}`, m) 

}
handler.help = ['add']
handler.tags = ['grupo']
handler.command = /^(add|agregar|invitar|invite|añadir|\+)$/i

handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null

export default handler
