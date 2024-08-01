let WAMessageStubType = (await import(global.baileys)).default
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';
import './exotico-fakes.js'

let handler = m => m
handler.before = async function (m, { conn, participants, groupMetadata}) {

if (!m.messageStubType || !m.isGroup) return
let usuario = `@${m.sender.split`@`[0]}`
let chat = global.db.data.chats[m.chat]
let users = participants.map(u => conn.decodeJid(u.id))
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*• ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')

if (chat.detect && m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `❮🌐❯ » \`𝘼𝙑𝙄𝙎𝙊 𝙂𝙍𝙐𝙋𝘼𝙇:\`\n- _El nombre del grupo fue configurado recientemente._\n• _El nombre del grupo ahora es:_\n» *${m.messageStubParameters[0]}*\n\n- *_Configurado por:_* ${usuario}`, mentions: [m.sender], mentions: [...groupAdmins.map(v => v.id)] }, { quoted: m })   
} else if (chat.detect && m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `❮🌐❯ » \`𝘼𝙑𝙄𝙎𝙊 𝙂𝙍𝙐𝙋𝘼𝙇:\`\n- _La foto de perfil del grupo fue configurado recientemente._\n\n- *_Configurado por:_* ${usuario}`, mentions: [m.sender] }, { quoted: m })  
} else if (chat.detect && m.messageStubType == 23) {
await this.sendMessage(m.chat, { text: `❮🌐❯ » \`𝘼𝙑𝙄𝙎𝙊 𝙂𝙍𝙐𝙋𝘼𝙇:\`\n- _Se ha restablecido el enlace de:_ ( ${groupMetadata.subject} ) _recientemente._\n\n- *_Configurado por:_* ${usuario}`, mentions: [m.sender] }, { quoted: m }) 
} else if (chat.detect && m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `❮🌐❯ » \`𝘼𝙑𝙄𝙎𝙊 𝙂𝙍𝙐𝙋𝘼𝙇:\`\n- _El usuario:_ ${usuario} _ha cambiado la descripcion del grupo recientemente._\n\n*NUEVA DESCRIPCION GRUPAL:*\n`, mentions: [m.sender] }, { quoted: m }) 
} else if (chat.detect && m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `❮🌐❯ » \`𝘼𝙑𝙄𝙎𝙊 𝙂𝙍𝙐𝙋𝘼𝙇:\`\n- _Se ha configurado el grupo para que ${m.messageStubParameters[0] == 'on' ? 'solo los admins' : 'todos'} puedan configurar los ajustes en el grupo.\n\n- *_Configurado por_* ${usuario}`, mentions: [m.sender] }, { quoted: m })
} else if (chat.detect && m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `❮🌐❯ » \`𝘼𝙑𝙄𝙎𝙊 𝙂𝙍𝙐𝙋𝘼𝙇:\`\n- _Se ha ${m.messageStubParameters[0] == 'on' ? 'cerrado el grupo,' : 'abierto el grupo,'} ${m.messageStubParameters[0] == 'on' ? 'solo los admins pueden escribir' : 'todos pueden escribir'} en este grupo._\n\n- *_Configurado por:_* ${usuario}`, mentions: [m.sender] }, { quoted: m })
} else if (chat.detect && m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: `❮🌐❯ » \`𝘼𝙑𝙄𝙎𝙊 𝙂𝙍𝙐𝙋𝘼𝙇:\`\n- _El/La admin: ${usuario} ha asignado un participante como admin del grupo recientemente._\n\n- *_Nuevo admin:_* @${m.messageStubParameters[0].split`@`[0]}`, mentions: [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)] }, { quoted: m }) 
} else if (chat.detect && m.messageStubType == 30) {
await this.sendMessage(m.chat, { text: `❮🌐❯ » \`𝘼𝙑𝙄𝙎𝙊 𝙂𝙍𝙐𝙋𝘼𝙇:\`\n- _El/La admin: ${usuario} ha descartado como admin a un administrador(a) recientemente._\n\n- *_Ex admin:_* @${m.messageStubParameters[0].split`@`[0]}`, mentions: [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)] }, { quoted: m }) 
} else if (chat.detect && m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `❮🌐❯ » \`𝘼𝙑𝙄𝙎𝙊 𝙂𝙍𝙐𝙋𝘼𝙇:\`\n- _Se ha configurado los mensajes temporales de este grupo ha:_ @${m.messageStubParameters[0]}\n\n- *_Configurado por:_* ${usuario}`, mentions: [m.sender] }, { quoted: m })
} else if (chat.detect && m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `❮🌐❯ » \`𝘼𝙑𝙄𝙎𝙊 𝙂𝙍𝙐𝙋𝘼𝙇:\`\n- _Se ha desactivado los mensajes temporales de este grupo._\n\n- *_Configurado por:_* ${usuario}`, mentions: [m.sender] }, { quoted: m })
} else {

}}
export default handler
