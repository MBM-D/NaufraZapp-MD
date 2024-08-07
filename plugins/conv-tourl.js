import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
let handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => gataImg.getRandom())
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `『🎉』𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣𝙖 𝙞𝙢𝙖𝙜𝙚𝙣 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
let caption = `『🏙️』𝗘𝗡𝗟𝗔𝗖𝗘: ${link}\n『🌆』𝗣𝗘𝗦𝗢: ${media.length}\n『🌌』𝗘𝗫𝗣𝗜𝗥𝗔𝗖𝗜𝗢𝗡: ${isTele ? 'Sin expiración.' : 'Desconocido.'}`
conn.reply(m.chat, caption, m, { contextInfo: {externalAdReply :{mediaUrl: channel, mediaType: 2, title: '꧁𝆭🎉𝆹𝅥ꥈ「𝙉ꥈ𝙖𝆭𝙪𝙛𝙧𝆭ꥈ𝙖𝙕𝙖𝆭𝙥ꥈ𝙥」ꥈ𝆹𝅥🎉𝆭꧂', body: '• Convertidor de enlaces.', thumbnail: await(await fetch(link)).buffer(), sourceUrl: link }}})}
handler.help = ['tourl']
handler.tags = ['herramientas']
handler.command = /^(tourl|upload)$/i
export default handler

async function shortUrl(url) {
let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
return await res.text()
  }
                                                                              
