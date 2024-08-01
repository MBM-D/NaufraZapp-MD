/*Créditos a https://github.com/AzamiJs*/

import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

var handler = async (m) => {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '❕ • 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣𝙖 𝙞𝙢𝙖𝙜𝙚𝙣 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.'
m.react(done)
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
let info = ` 
🌐 • 𝗘𝗻𝗹𝗮𝗰𝗲 : ${link} 
📅 • 𝗘𝘅𝗽𝗶𝗿𝗮𝗰𝗶𝗼𝗻 : ${isTele ? 'No expira.' : 'Desconocido.'}
`
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply :{ mediaUrl: naufraAll, mediaType: 2, title: wm, body: 'link telegra', thumbnail: await(await fetch(link)).buffer(), sourceUrl: link}}})

}
handler.help = ['tourl']
handler.tags = ['transformador']
handler.command = /^(tourl|upload)$/i

handler.limit = true

export default handler

async function shortUrl(url) {
let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
return await res.text()
}