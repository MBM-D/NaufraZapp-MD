let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) throw `❮❕❯ » 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣𝙖 𝙞𝙢𝙖𝙜𝙚𝙣 𝙥𝙖𝙧𝙖 𝙘𝙖𝙢𝙗𝙞𝙖𝙧 𝙡𝙖 𝙛𝙤𝙩𝙤 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.`
await conn.updateProfilePicture(m.chat, img).then(_ => m.reply(`❮✅❯ » 𝙁𝙤𝙩𝙤 𝙜𝙧𝙪𝙥𝙖𝙡 𝙘𝙖𝙢𝙗𝙞𝙖𝙙𝙖 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤.`))
} else throw `❮❕❯ » 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣𝙖 𝙞𝙢𝙖𝙜𝙚𝙣 𝙥𝙖𝙧𝙖 𝙘𝙖𝙢𝙗𝙞𝙖𝙧 𝙡𝙖 𝙛𝙤𝙩𝙤 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.`}
handler.command = /^setpp(group|grup|gc)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.register = true
export default handler
