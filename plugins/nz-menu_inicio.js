let handler = async (m, { conn, command }) => {

const naufragoAll = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13, imagen14, imagen15, imagen6].getRandom()

//let media = './imagenes/nz'
    const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    let str = `
•═══• ❮🌎 \`BIENVENIDO/A\` 🌎❯ •═══•

- *_Para ver el menu completo, presione el boton de_*
• \`Ir al menu\``
await conn.sendButton(m.chat, str, wm, naufragoAll, [
['𝗜𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 🏷️', '.allmenu']], null, [
['𝗖𝗔𝗡𝗔𝗟 🔜', `${canal}`]], fkontak )}
handler.command = /^allmenu|menucompleto|allmenu|menutodo$/i
handler.register = true
//handler.exp = 35
//handler.private = true
export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}


/*
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
*/