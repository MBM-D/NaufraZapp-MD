import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `╭─────────────────···•⊰ ⋆
│👋🏻 Hola ${taguser}
│soy NaufraZapp-MD
│•────────────────···•⊰
│Fecha: ${date}
│Tiempo activo: ${uptime}
╰─────────────────···•⊰ ⋆

• https://youtube.com/@user-bw5wl4ye8r?si=qN8bP4ZdKm3yXwbx

• https://whatsapp.com/channel/0029VaRibRvDuMRj6ozMSN1l
${readMore}
╭• •꒰─•🗒️·𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉ٜ۬･
│•┐ _${usedPrefix}estado_
┃•│ _${usedPrefix}nzgrupos_
┃•│ _${usedPrefix}tipobot_
┃•│ _${usedPrefix}on : off_
┃•┘ _${usedPrefix}perfil_
╰• •───• •───• •───•

╭• •꒰─•🤖·𝙎𝙀𝙍𝘽𝙊𝙏 : 𝙉𝙕ٜ۬･
│•┐ _${usedPrefix}serbot_
┃•│ _${usedPrefix}borrarsesion_
┃•│ _${usedPrefix}stop_
┃•│ _${usedPrefix}bcbots_
┃•│ _${usedPrefix}ds_
┃•┘ _${usedPrefix}bots_
╰• •───• •───• •───•

╭• •꒰─•⭐·𝙀𝘾𝙊𝙉𝙊𝙈𝙄𝘼 : 𝙍𝙋𝙂ٜ۬･
│•┐ _${usedPrefix}cofre_
┃•│ _${usedPrefix}levelup_
┃•│ _${usedPrefix}robar_
┃•│ _${usedPrefix}unreg_
┃•│ _${usedPrefix}reg_
┃•│ _${usedPrefix}minar_
┃•│ _${usedPrefix}minar2_
┃•│ _${usedPrefix}minar3_
┃•┘ _${usedPrefix}work_
╰• •───• •───• •───•

╭• •꒰─•🎰·𝙅𝙐𝙀𝙂𝙊𝙎ٜ۬･
│•┐ _${usedPrefix}acertijo_
┃•│ _${usedPrefix}tictactoe_
│•┘ _${usedPrefix}delttt_
╰• •───• •───• •───•

╭• •꒰─•🌎·𝙈𝙀𝙉𝙐𝙎ٜ۬･
│•┐ _${usedPrefix}menu_
┃•│ _${usedPrefix}menu18_
│•┘ _${usedPrefix}menuaudios_
╰• •───• •───• •───•

╭• •꒰─•🧰·𝙃𝙀𝙍𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎ٜ۬･
│•┐ _${usedPrefix}chatgpt_ *texto*
┃•│ _${usedPrefix}chatgptvoz_ *texto*
┃•│ _${usedPrefix}delchatgpt_
┃•│ _${usedPrefix}hd_
│•┘ _${usedPrefix}traducir_ *texto*
╰• •───• •───• •───•

╭• •꒰─•🌅·𝙐𝙏𝙄𝙇𝙄𝘿𝘼𝘿ٜ۬･
│•┐ _${usedPrefix}toimg_
┃•│ _${usedPrefix}tourl_
│•┘ _${usedPrefix}sticker_
╰• •───• •───• •───•

╭• •꒰─•💾·𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎ٜ۬･
│•┐ _${usedPrefix}fb_ *link*
┃•│ _${usedPrefix}apk_
┃•│ _${usedPrefix}mediafire_ *link*
┃•│ _${usedPrefix}ig_ *link*
┃•│ _${usedPrefix}tiktok_ *link*
┃•│ _${usedPrefix}twitter_ *link*
┃•│ _${usedPrefix}pinterest_ *texto*
┃•│ _${usedPrefix}mega_ *link*
┃•│ _${usedPrefix}gitclone_ *link*
┃•│ _${usedPrefix}quemusica_ *vídeo : audio*
┃•│ _${usedPrefix}play : play2_ *texto*
│•┘ _${usedPrefix}playdoc : playdoc2_ *texto*
╰• •───• •───• •───•

╭• •꒰─•👥·𝙋𝘼𝙍𝘼 𝙂𝙍𝙐𝙋𝙊𝙎ٜ۬･
│•┐ _${usedPrefix}admins_
┃•│ _${usedPrefix}add_
┃•│ _${usedPrefix}grupo_ *abrir : cerrar*
┃•│ _${usedPrefix}demote_
┃•│ _${usedPrefix}promote_
┃•│ _${usedPrefix}kick_
┃•│ _${usedPrefix}link_
┃•│ _${usedPrefix}resetlink_
┃•│ _${usedPrefix}tagall_
┃•│ _${usedPrefix}fantasmas_
┃•│ _${usedPrefix}kickfantasmas_
┃•│ _${usedPrefix}hidetag_
┃•│ _${usedPrefix}setwelcome_
┃•│ _${usedPrefix}setbye_
┃•│ _${usedPrefix}setdesc_
┃•│ _${usedPrefix}setname_
┃•│ _${usedPrefix}setpp_
┃•│ _${usedPrefix}grupoid_
│•┘ _${usedPrefix}infogroup_
╰• •───• •───• •───•

╭• •꒰─•👑·𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊ٜ۬･
│•┐ _${usedPrefix}backup_
┃•│ _${usedPrefix}update_
┃•│ _${usedPrefix}updat_
┃•│ _${usedPrefix}reporte_ *texto*
┃•│ _${usedPrefix}unbanuser_
┃•│ _${usedPrefix}banuser_
┃•│ _${usedPrefix}banchat_
│•┘ _${usedPrefix}unbanchat_
╰• •───• •───• •───•
 `.trim()
    
const vi = [
'https://qu.ax/ygwT.mp4',
  'https://qu.ax/iFCi.mp4',
     'https://qu.ax/jie.mp4',
        'https://qu.ax/Pbha.mp4',
           'https://qu.ax/bdvm.mp4'
]
try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, contextInfo: yt })
//await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: imgAll.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen4, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 
} catch (e) {
    conn.reply(m.chat, 'Ocurrio un error inesperado.', m);
    }
}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

