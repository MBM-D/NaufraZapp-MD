let handler = async (m, { conn, command, usedPrefix }) => {
let pp = imagen1
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `
❮🗿❯ » 𝘊𝘙𝘌𝘈𝘋𝘖𝘙:
• ${creador}

❮📝❯ » 𝘈𝘚𝘐𝘚𝘛𝘌𝘕𝘊𝘐𝘈:
• ${asistencia}

❮🌎❯ » 𝘔𝘖𝘋𝘖:
• publico.

❮🤖❯ » 𝘛𝘐𝘗𝘖 𝘋𝘌 𝘉𝘖𝘛:
• ${(conn.user.jid == global.conn.user.jid ? 'Bot Oficial' : `*Sub Bot de: https://wa.me/${global.conn.user.jid.split`@`[0]}*`) || ''}

❮🔑❯ » 𝘌𝘚𝘛𝘈𝘋𝘖:
• Activo.

❮📅❯ » 𝘈𝘊𝘛𝘐𝘝𝘐𝘋𝘈𝘋:
• ${uptime}

❮🤖❯ » 𝘉𝘖𝘛:
• ${wm}
`
await conn.sendButton(m.chat, estado, 'Estado del bot.', pp, [
['𝗠𝗲𝗻𝘂 🔜', '.menu']], null, [['𝗖𝗮𝗻𝗮𝗹 🔜', `${canal}`]], m)
}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|heygata|stado|stats|botstat(us)?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
