let handler = async (m, { conn, command }) => {
 
 let media = imagen7

let str = `❮🌎❯ » *_BIENVENIDO A LOS GRUPOS OFICIALES DEL BOT._*
•────────────────•

- 𝙂𝙧𝙪𝙥𝙤 𝙜𝙚𝙣𝙚𝙧𝙖𝙡:
• *${grupo1}*
(𝘯𝘰 𝘴𝘦 𝘱𝘦𝘳𝘮𝘪𝘵𝘦𝘯 𝘣𝘰𝘵𝘴)

•────────────────•

- 𝙂𝙧𝙪𝙥𝙤 𝙥𝙖𝙧𝙖 𝙚𝙡 𝙗𝙤𝙩:
• *${grupo2}*

•────────────────•`
await conn.sendButton(m.chat, str, wm, media, [
['𝗠𝗲𝗻𝘂 🔜', '.menu']], null, [
['𝗖𝗮𝗻𝗮𝗹 🔜', `${canal}`]], m)}

handler.command = /^linkgc|grupos|gruposnz|nzgrupos$/i
handler.register = true
export default handler
