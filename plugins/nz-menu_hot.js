let imagebot = './Menu2.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `
╭• •꒰─•🔥·𝙓𝙓𝙓 𝙍𝘼𝙉𝘿𝙊𝙈 🌡️ٜ۬･
│•┐ _${usedPrefix}xxxloli_
┃•│ _${usedPrefix}xxxfoot_
┃•│ _${usedPrefix}xxxass_ 
┃•│ _${usedPrefix}xxxbdsm_
┃•│ _${usedPrefix}xxxcum_
┃•│ _${usedPrefix}xxxero_
┃•│ _${usedPrefix}xxxfemdom_
┃•│ _${usedPrefix}xxxglass_
┃•│ _${usedPrefix}xxxhentai_
┃•│ _${usedPrefix}xxxorgy_
┃•│ _${usedPrefix}xxxtetas_
┃•│ _${usedPrefix}xxxbooty_
┃•│ _${usedPrefix}xxxecchi_
┃•│ _${usedPrefix}xxxfurro_
┃•│ _${usedPrefix}xxxpanties_
┃•│ _${usedPrefix}xxxpene_
┃•│ _${usedPrefix}xxxporno_
┃•│ _${usedPrefix}xxxrandom_
┃•│ _${usedPrefix}xxxpechos_
┃•│ _${usedPrefix}xxxyuri_
┃•│ _${usedPrefix}xxxyuri2_
│•┘ _${usedPrefix}xxxlesbians_
╰• •───• •───• •───•

╭• •꒰─•🔥·𝘼𝙉𝙄𝙈𝙀 𝙂𝙄𝙍𝙇 😏ٜ۬･
│•┐
┃•│ _${usedPrefix}igarashi_
│•┘ 
╰• •───• •───• •───•

╭• •꒰─•🔥·𝘼𝙉𝙄𝙈𝙀 𝘽𝙊𝙔 😏ٜ۬･
│•┐ _${usedPrefix}asuma_
┃•│ _${usedPrefix}endeavor_
┃•│ _${usedPrefix}takeda_
┃•│ _${usedPrefix}xxxyaoi_
│•┘ _${usedPrefix}xxxyaoi2_
╰• •───• •───• •───•
`
await conn.sendButton(m.chat, str, wm, imagebot, [
['IR AL MENU ⚡', '.allmenu'],
['GRUPOS 👥', '#gruposnz'],
['ESTADO ✅', '/estado']], null, null, fkontak)}
handler.command = /^menuhot|menuhorny|menu18|memu18|memuhot$/i
//handler.private = true
handler.register = true
export default handler

  
