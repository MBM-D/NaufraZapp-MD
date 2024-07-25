let handler = async (m, { conn, command, usedPrefix }) => {
let pp = imagen1
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let menu = `☞ 👑𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿👑

☛  NɑufrɑZɑpp-MD es un creɑdo pɑrɑ *fɑcilitɑr el mɑnejo de tus grupos de Whɑtsɑpp* y *brindɑrte errɑmientɑs de entretenimiento pɑrɑ tus grupos.*  

💥ɑnteriormente este bot erɑ *privɑdo* pero devido ɑ que muchos usuɑrios tɑmbién queriɑn instɑlɑrlo por ellos mismos se lɑnzo lɑ versión públicɑ de este mɑrɑvilloso bot, pɑrɑ que todos puedɑn disfrutɑrlo💥

🫂ɢʀᴀᴄɪᴀs ᴀ ᴛᴏᴅᴏs ʟᴏs ᴄᴏʟᴀʙᴏʀᴀᴅᴏʀᴇs ᴘᴏʀ ᴇsᴛᴇ ᴍᴀʀᴀᴠɪʟʟᴏsᴏ ᴘʀᴏʏᴇᴄᴛᴏ🤗

También pueden seguirnos en nuestro canal oficial de WhatsApp para recibir información del bot y también para participar en algunos sorteos💥

Antes de comenzar a utilizar el bot, no se olvide de *verificarse o registrarse* para usar todos los comandos libremente👇
`
await conn.sendButton(m.chat, menu, wm, pp, [
['𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 💥', '.menucompleto'],
['𝘼𝙐𝙏𝙊 𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼𝙍 ✅', '#reg nauSub.20']], null, [
['𝘾𝘼𝙉𝘼𝙇 𝙊𝙁𝙄𝘾𝙄𝘼𝙇🌎', `${channel}`]], m)
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
 
