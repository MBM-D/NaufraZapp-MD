var handler = async (m, { conn, usedPrefix, command}) => {

let Reglas = `
• ❌ REGLAS DEL BOT ❌ •
No llamar al bot.
No video llamar al bot
No hacer spam al bot
No agregar en grupos sin consentimiento.
`.trim()
await conn.reply(m.chat, Reglas, fkontak, m )

}
handler.customPrefix = /reglas|Reglas|reglasbot, botreglas|uso, usobot|uso del bot/i
handler.command = new RegExp

handler.register = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
