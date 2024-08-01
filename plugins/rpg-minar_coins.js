let handler = async (m, { conn, isPrems}) => { 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let minar = `*『⛏️』Genial, lograste minar:*`
let pp = './Menu1.jpg'

let d = Math.floor(Math.random() * 3000)
global.db.data.users[m.sender].money += d * 1  
let time = global.db.data.users[m.sender].lastmonedas + 600000
if (new Date - global.db.data.users[m.sender].lastmonedas < 600000) throw `*『⛏️』Por favor, espere* ${msToTime(time - new Date())} *para volver a minar diamantes. ⛏️*`  

global.db.data.users[m.sender].lastmonedas = new Date * 1  
  

conn.reply(m.chat, `${minar} \`${d}\` *de NaufraCoins* 🪙`, m)
}
handler.help = ['minar']
handler.tags = ['rol']
handler.command = ['minar3', 'miming3', 'mine3', 'minarcoins', 'minarmonedas', 'minarnaufracoins'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
