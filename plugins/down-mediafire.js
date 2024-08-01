import fetch from 'node-fetch'
import { mediafiredl } from '@bochilteam/scraper'

var handler = async (m, { conn, args, usedPrefix, command, isOwner, isPrems }) => {

let limit
if((isOwner || isPrems)) limit = 1000
else limit = 600

if (!args[0]) return conn.reply(m.chat, `*『✦』Ingrese un enlace de mediafire valido por favor.*`, m )
if (!args[0].match(/mediafire/gi)) conn.reply(m.chat, `『✦』El enlace ingresado no es valido.`, m )

try {

m.react(rwait)
let full = /f$/i.test(command)
let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url: u }))).buffer()
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let isLimit = (isPrems || isOwner ? limit : limit) * 1012 < filesize

await conn.reply(m.chat, `*『✦』NOMBRE:*
• ${filename}

*『✦』TAMAÑO:*
• ${filesizeH}

*『✦』WEB:*
• ${ext}

*『✦』ACTUALIZACION:*
• ${aploud}`, m )
    
if(!isLimit) await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
m.react(done)
} catch (e) {
conn.reply(m.chat, `『✦』Ocurrio un error inesperado, intente de nuevo.`, m )
console.log(e)}

}
handler.help = ['mediafire']
handler.tags = ['descargas']
handler.command = ['mediafire', 'mfire', 'm']

handler.diamond = true
handler.register = true

export default handler
