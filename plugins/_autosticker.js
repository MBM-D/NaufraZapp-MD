import { sticker } from '../lib/sticker.js'

let handler = m => m

handler.all = async function (m) {
let chat = db.data.chats[m.chat]
let user = db.data.users[m.sender]

if (chat.autosticker && m.isGroup) {
let q = m
let stiker = false
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/webp/g.test(mime)) return
if (/image/g.test(mime)) {
let img = await q.download?.()
if (!img) return
stiker = await sticker(img, false, packname, author)
} else if (/video/g.test(mime)) {
if (/video/g.test(mime)) if ((q.msg || q).seconds > 8) return await m.reply(`❮⚠️❯ » 𝙀𝙡 𝙫𝙞𝙙𝙚𝙤 𝙣𝙤 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙙𝙪𝙧𝙖𝙧 𝙢𝙖𝙨 𝙙𝙚 8 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨, 𝙧𝙚𝙘𝙤𝙧𝙩𝙚 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧.`)
let img = await q.download()
if (!img) return
stiker = await sticker(img, false, packname, author)
} else if (m.text.split(/\n| /i)[0]) {
if (isUrl(m.text)) stiker = await sticker(false, m.text.split(/\n| /i)[0], packname, author)
else return
}
if (stiker) {
await conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: packname,  mediaType: 2, thumbnail: imagen2, sourceUrl: canal }}}, { quoted: m })
}}
return !0
}
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/, 'gi'))}
