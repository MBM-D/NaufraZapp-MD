let imagebot = './Menu1.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `
╭─────────────────···•⊰ ⋆
│🪐 𝗜𝗡𝗦𝗧𝗔𝗟𝗔𝗖𝗜𝗢𝗡 𝗗𝗘𝗟 𝗕𝗢𝗧 🪐
│NaufraZapp-MD
╰─────────────────···•⊰ ⋆

𝗖𝗼𝗽𝗶𝗮 𝗹𝗼𝘀 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀 𝘂𝗻𝗼 𝗽𝗼𝗿 𝘂𝗻𝗼
𝗲𝗻 𝘁𝗲𝗿𝗺𝘂𝘅.
•─────────────────···•⊰ ⋆
termux-setup-storage

apt update && apt upgrade && pkg install -y git nodejs ffmpeg imagemagick yarn

git clone https://github.com/MultiBot-OFC/NaufraZapp-MD && cd NaufraZapp-MD

yarn install && npm install
•─────────────────···•⊰ ⋆
𝗥𝗲𝗰𝘂𝗲𝗿𝗱𝗮 𝗽𝗼𝗻𝗲𝗿 𝗲𝘀𝘁𝗲 𝘂𝗹𝘁𝗶𝗺𝗼
𝗰𝗼𝗺𝗮𝗻𝗱𝗼:

npm start`
await conn.sendButton(m.chat, str, wm, imagebot, [
['IR AL MENU 🏷️', '.allmenu'],
['GRUPOS 🎳', '#gruposnz'],
['SERBOT 🤖', '/serbot']], `termux-setup-storage && apt update && apt upgrade && pkg install -y git nodejs ffmpeg imagemagick yarn && git clone https://github.com/MultiBot-OFC/NaufraZapp-MD && cd NaufraZapp-MD && yarn install && npm install`, [['DESCARGAR TERMUX', 'https://f-droid.org/repo/com.termux_1020.apk']], fkontak)}
handler.command = /^installbot|instalarbot|installnz$/i
//handler.private = true
handler.register = true
export default handler

