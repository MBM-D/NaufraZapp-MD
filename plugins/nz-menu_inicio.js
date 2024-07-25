let handler = async (m, { conn, command, usedPrefix }) => {
let pp = imagen1
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let menu = `•═══• ❮🌎 \`BIENVENIDO/A\` 🌎❯ •═══•

- *_Para ver el menu completo, presione el boton de_*
• \`Ir al menu\`
`
await conn.sendButton(m.chat, menu, wm, pp, [
['Ir al menu 🔜', '.allmenu']], null, [
['Canal 🔜', `${canal}`]], m)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(help|memu|comandos|menu)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
 
