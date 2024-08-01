var handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `『✦』Infrese el mensaje de reporte, por ejemplo: #${command} el comando #play esta fallando.`, m, fpay, )
if (text.length < 10) return conn.reply(m.chat, `『✦』 *Mínimo 10 caracteres para hacer el reporte*`, m, fpay, )
if (text.length > 1000) return conn.reply(m.chat, `『✦』 *Máximo 1000 caracteres para hacer el reporte.*`, m, fpay, )

let teks = `『✦』REPORTE『✦』

\`Usuario/a:\`
wa.me/${m.sender.split`@`[0]}

\`Mensaje:\`
${text}
`
conn.reply('5493873687620@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})

conn.reply(m.chat, `『✦』El reporte fue enviado con exito.`, m, fpay, )

}
handler.help = ['reporte', 'request']
handler.tags = ['bot']
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i

handler.register = true

export default handler
