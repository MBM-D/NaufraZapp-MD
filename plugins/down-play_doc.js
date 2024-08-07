import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `❮🚀❯ » 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} Erika Lundmeon - Yad*`
let res = await yts(text)
let vid = res.videos[0]
if (!vid) throw `❮❌❯ » 𝙀𝙣𝙡𝙖𝙘𝙚 𝙣𝙤 𝙫𝙖𝙡𝙞𝙙𝙤, 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙡𝙖 𝙘𝙖𝙣𝙘𝙞𝙤𝙣.`
let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
//m.react('✅') 
let buscador = `•═══• ❮ 🎥 • \`Play Doc\` • 🎙️ ❯ •═══•

*TITULO:*
• ${vid.title}

*DURACION:*
• ${vid.timestamp}

*VISTAS:*
• ${vid.views}

*PUBLICADO EN:*
• ${vid.ago}

*ENLACE:*
• ${vid.url}`
 await conn.sendButton(m.chat, buscador, 'Seleccione el boton para descargar.', thumbnail, [
['📂 𝗩𝗜𝗗𝗘𝗢 🎥', `${usedPrefix}video2 ${url}`],
['📂 𝗔𝗨𝗗𝗜𝗢 🎙️', `${usedPrefix}audio2 ${url}`]
], null, null, m)}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['playdoc', 'playdoc2']
handler.register = true
handler.disabled = false
export default handler
   
