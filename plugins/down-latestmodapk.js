import fetch from 'node-fetch'

var handler = async (m, { conn, args, usedPrefix, command }) => {

if (!args[0]) return conn.reply(m.chat, `*『✦』Ingrese el enlace valido ppr favor.*`, m )
if (!args[0].match(/latestmodapks/gi)) return conn.reply(m.chat, `『✦』El enlace ingresado no es valido.`, m )

try {
  
let res = await fetch(`https://api.akuari.my.id/downloader/dlmod?link=${args[0]}`)
let json = await res.json()
await conn.reply(m.chat, `『✦』TAMAÑO: ${json.respon.size}\n\n『⏳』Se esta descargando...`, m )
let { linkdl, size } = json.respon
    
conn.sendMessage(m.chat, { document: { url: linkdl }, mimetype: 'application/videos.android.package-archive', fileName: `Apk modlatest.apk` }, { quoted: m })
} catch {
return conn.reply(m.chat, '*『✦』Ocurrio un error inesperado.*', m )}

}
handler.help = ['dlmodlatest']
handler.tags = ['descargas']
handler.command = ['apk2', 'dlmodlatest'] 

handler.register = true
handler.limit = true

export default handler
