import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs'
import path from 'path'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function before(m, { conn, participants, groupMetadata}) {
if (!m.messageStubType || !m.isGroup) return
let usuario = `@${m.sender.split`@`[0]}`
const groupName = (await conn.groupMetadata(m.chat)).subject
const groupAdmins = participants.filter((p) => p.admin)
let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
const img = await (await fetch(pp)).buffer()
const chat = global.db.data.chats[m.chat]
const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)]
const mentionsContentM = [m.sender, m.messageStubParameters[0]]
const links = linkSity.getRandom()

if (chat.detect2 && m.messageStubType == 2) {
const chatId = m.isGroup ? m.chat : m.sender;
const uniqid = chatId.split('@')[0];
const sessionPath = './NaufraBotSession/';
const files = await fs.readdir(sessionPath);
let filesDeleted = 0;
for (const file of files) {
if (file.includes(uniqid)) {
await fs.unlink(path.join(sessionPath, file));
filesDeleted++;
console.log(`『✦』Formato desconocido...`)}}}

if (chat.detect2 && m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `『✦』El participante: ${usuario} ha modificado el nombre del grupo.`, mentions: [m.sender], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 

} else if (chat.detect2 && m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `『✦』El participante: ${usuario} ha modificado la foto del grupo.`, mentions: [m.sender] }, { quoted: fliveLoc, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 

} else if (chat.detect2 && m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `『✦』El participante: ${usuario} ha configurado la descripción del grupo:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fliveLoc, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect2 && m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `『✦』Se ha configurado los ajustes del grupo, ${m.messageStubParameters[0] == 'on' ? 'solo los admins' : 'ahora todos'} pueden configurar los ajustes del grupo.`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect2 && m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `『✦』Se ha configurado los ajustes del grupo, ${m.messageStubParameters[0] == 'on' ? 'se cierra el grupo.' : 'se abre el grupo.'}*\n\n${m.messageStubParameters[0] == 'on' ? 'Ahora solo los admins' : 'Ahora todos'} pueden enviar mensajes en este chat.`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect2 && m.messageStubType == 29) {
let txt1 = `『✦』 @${m.sender.split`@`[0]} ha promovido admin a:\n`
txt1 += `@${m.messageStubParameters[0].split`@`[0]}\n\n`
txt1 += `> NaufraZapp-MD`

await conn.sendMessage(m.chat, {text: txt1, mentions: [...txt1.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: { mentionedJid: [...txt1.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": links, "sourceUrl": links}}})

} else if (chat.detect2 && m.messageStubType == 30) {
let txt2 = `『✦』 @${m.sender.split`@`[0]} ha quitado admin a\n`
txt2 += `@${m.messageStubParameters[0].split`@`[0]}\n\n`
txt2 += `> NaufraZapp-MD`

await conn.sendMessage(m.chat, {text: txt2, mentions: [...txt2.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: { mentionedJid: [...txt2.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": links, "sourceUrl": links}}})

} else if (chat.detect2 && m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `『✦』El participante: ${usuario} ha configurado los ajustes temporales a: @${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect2 && m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `『✦』El participante: ${usuario} ha desactivado los mensajes temporales.`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}
