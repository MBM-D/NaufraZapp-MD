import { googleImage } from '@bochilteam/scraper'

var handler = async (m, { conn, text, usedPrefix, command }) => {

const prohibited = ['se men', 'hen tai', 'se xo', 'te tas', 'cu lo', 'c ulo', 'cul o', 'ntr', 'rule34', 'rule', 'caca', 'polla', 'porno', 'porn', 'gore', 'cum', 'semen', 'puta', 'puto', 'culo', 'putita', 'putito', 'pussy', 'hentai', 'pene', 'coño', 'asesinato', 'zoofilia', 'mia khalifa', 'desnudo', 'desnuda', 'cuca', 'chocha', 'muertos', 'pornhub', 'xnxx', 'xvideos', 'teta', 'vagina', 'marsha may', 'misha cross', 'sexmex', 'furry', 'furro', 'furra', 'xxx', 'rule34', 'panocha', 'pedofilia', 'necrofilia', 'pinga', 'horny', 'ass', 'nude', 'popo', 'nsfw', 'femdom', 'futanari', 'erofeet', 'sexo', 'sex', 'yuri', 'ero', 'ecchi', 'blowjob', 'anal', 'ahegao', 'pija', 'verga', 'trasero', 'violation', 'violacion', 'bdsm', 'cachonda', '+18', 'cp', 'mia marin', 'lana rhoades', 'cepesito', 'hot', 'buceta', 'xxx']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return conn.reply(m.chat, '⚠️ • 𝘽𝙪𝙨𝙘𝙖𝙩𝙚 𝙚𝙨𝙖𝙨 𝙘𝙤𝙨𝙖𝙨 𝙥𝙤𝙧 𝙜𝙤𝙤𝙜𝙡𝙚...', m )

if (!text) return conn.reply(m.chat, `☁️ • 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: #imagen Gato`, m )
m.react(done)

const res = await googleImage(text)
let image = res.getRandom()
let link = image

conn.sendFile(m.chat, link, 'error.jpg', `✅ • 𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨`, m)

}
handler.help = ['gimage', 'imagen']
handler.tags = ['imagenes']
handler.command = /^(gimage|image|imagen)$/i

handler.limit = true
handler.register = true

export default handler
