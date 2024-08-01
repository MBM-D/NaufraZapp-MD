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
let menu = `┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ ${taguser}
│┃•───────•
│┃Fecha: *${date}*
│┃Tiempo activo: *${uptime}*
│┃Bot: ${wm}
│┃•───────•
│┃Version beta de
│┃NaufraZapp-MD
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄

• ❕ \`Solo funciona si la funcion de audios esta activa.\`
${readMore}
╭⋆───────────────────⋄
│⌕ Diviértete con los audios
│disponibles en este bot.
╰⋆───────────────────⋄
┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ஓீ፝͜͡🎤➩ *_Momento XD_*
│┃ஓீ፝͜͡🎤➩ *_El tóxico_*
│┃ஓீ፝͜͡🎤➩ *_Moshi moshi_*
│┃ஓீ፝͜͡🎤➩ *_Calla Fan de BTS_*
│┃ஓீ፝͜͡🎤➩ *_Bien pensado Woody_*
│┃ஓீ፝͜͡🎤➩ *_Jesucristo_*
│┃ஓீ፝͜͡🎤➩ *_Wtf_*
│┃ஓீ፝͜͡🎤➩ *_Una pregunta_*
│┃ஓீ፝͜͡🎤➩ *_Que sucede_*
│┃ஓீ፝͜͡🎤➩ *_Hablame_*
│┃ஓீ፝͜͡🎤➩ *_Buenos dias_*
│┃ஓீ፝͜͡🎤➩ *_Fiesta del admin_*
│┃ஓீ፝͜͡🎤➩ *_Viernes_*
│┃ஓீ፝͜͡🎤➩ *_Mierda de Bot_*
│┃ஓீ፝͜͡🎤➩ *_Me olvidé_*
│┃ஓீ፝͜͡🎤➩ *_Baneado_*
│┃ஓீ፝͜͡🎤➩ *_Feliz navidad_*
│┃ஓீ፝͜͡🎤➩ *_A nadie le importa_*
│┃ஓீ፝͜͡🎤➩ *_Sexo_*
│┃ஓீ፝͜͡🎤➩ *_Ara ara_*
│┃ஓீ፝͜͡🎤➩ *_Hola_*
│┃ஓீ፝͜͡🎤➩ *_Un pato_*
│┃ஓீ፝͜͡🎤➩ *_Te amo_*
│┃ஓீ፝͜͡🎤➩ *_Yamete_*
│┃ஓீ፝͜͡🎤➩ *_Te diagnostico con gay_*
│┃ஓீ፝͜͡🎤➩ *_Bañate_*
│┃ஓீ፝͜͡🎤➩ *_Vivan los novios_*
│┃ஓீ፝͜͡🎤➩ *_Marica quien_*
│┃ஓீ፝͜͡🎤➩ *_Es puto_*
│┃ஓீ፝͜͡🎤➩ *_La biblia_*
│┃ஓீ፝͜͡🎤➩ *_Me voy_*
│┃ஓீ፝͜͡🎤➩ *_Tengo los calzones del admin_*
│┃ஓீ፝͜͡🎤➩ *_Entrada épica_*
│┃ஓீ፝͜͡🎤➩ *_Esto va ser épico papus_*
│┃ஓீ፝͜͡🎤➩ *_Ingresa épicamente_*
│┃ஓீ፝͜͡🎤➩ *_No digas eso papu_*
│┃ஓீ፝͜͡🎤➩ *_Ma ma masivo_*
│┃ஓீ፝͜͡🎤➩ *_Masivo_*
│┃ஓீ፝͜͡🎤➩ *_Onichan_*
│┃ஓீ፝͜͡🎤➩ *_Bot puto_*
│┃ஓீ፝͜͡🎤➩ *_Feliz cumpleaños_*
│┃ஓீ፝͜͡🎤➩ *_Pasa pack Bot_*
│┃ஓீ፝͜͡🎤➩ *_Atencion grupo_*
│┃ஓீ፝͜͡🎤➩ *_Homero chino_*
│┃ஓீ፝͜͡🎤➩ *_Oh me vengo_*
│┃ஓீ፝͜͡🎤➩ *_Murio el grupo_*
│┃ஓீ፝͜͡🎤➩ *_Siuuu_*
│┃ஓீ፝͜͡🎤➩ *_Rawr_*
│┃ஓீ፝͜͡🎤➩ *_uwu_*
│┃ஓீ፝͜͡🎤➩ *_:c_*
│┃ஓீ፝͜͡🎤➩ *_a_*
│┃ஓீ፝͜͡🎤➩ *_Chao_*
│┃ஓீ፝͜͡🎤➩ *_Hentai_*
│┃ஓீ፝͜͡🎤➩ *_Triste_*
│┃ஓீ፝͜͡🎤➩ *_Estoy triste_*
│┃ஓீ፝͜͡🎤➩ *_Contexto_*
│┃ஓீ፝͜͡🎤➩ *_Basado_*
│┃ஓீ፝͜͡🎤➩ *_Fino señores_*
│┃ஓீ፝͜͡🎤➩ *_Verdad que te engañe_*
│┃ஓீ፝͜͡🎤➩ *_Sus_*
│┃ஓீ፝͜͡🎤➩ *_Yokese_*
│┃ஓீ፝͜͡🎤➩ *_Omaiga_*
│┃ஓீ፝͜͡🎤➩ *_Nadie te preguntó_*
│┃ஓீ፝͜͡🎤➩ *_Bueno si_*
│┃ஓீ፝͜͡🎤➩ *_Usted está detenido_*
│┃ஓீ፝͜͡🎤➩ *_No me hables_*
│┃ஓீ፝͜͡🎤➩ *_No chupala_*
│┃ஓீ፝͜͡🎤➩ *_El pepe_*
│┃ஓீ፝͜͡🎤➩ *_Esto va para ti_*
│┃ஓீ፝͜͡🎤➩ *_Abduzcan_*
│┃ஓீ፝͜͡🎤➩ *_Joder_*
│┃ஓீ፝͜͡🎤➩ *_Hablar primos_*
│┃ஓீ፝͜͡🎤➩ *_Mmm_*
│┃ஓீ፝͜͡🎤➩ *_Orale_*
│┃ஓீ፝͜͡🎤➩ *_Cambiate a Movistar_*
│┃ஓீ፝͜͡🎤➩ *_Que tal grupo_*
│┃ஓீ፝͜͡🎤➩ *_La voz de hombre_*
│┃ஓீ፝͜͡🎤➩ *_Pero esto_*
│┃ஓீ፝͜͡🎤➩ *_Pikachu_*
│┃ஓீ፝͜͡🎤➩ *_Niconico_*
│┃ஓீ፝͜͡🎤➩ *_Nico nico_*
│┃ஓீ፝͜͡🎤➩ *_Tal vez_*
│┃ஓீ፝͜͡🎤➩ *_Buenas noches_*
│┃ஓீ፝͜͡🎤➩ *_Porque ta tite_*
│┃ஓீ፝͜͡🎤➩ *_Eres Fuerte_*
│┃ஓீ፝͜͡🎤➩ *_Bueno Master_*
│┃ஓீ፝͜͡🎤➩ *_Traiganle una falda_*
│┃ஓீ፝͜͡🎤➩ *_Su nivel de pendejo_*
│┃ஓீ፝͜͡🎤➩ *_Elmo sabe donde vives_*
│┃ஓீ፝͜͡🎤➩ *_Y este quien es_*
│┃ஓீ፝͜͡🎤➩ *_Motivación_*
│┃ஓீ፝͜͡🎤➩ *_En caso de una investigación_*
│┃ஓீ፝͜͡🎤➩ *_Buen día grupo_*
│┃ஓீ፝͜͡🎤➩ *_Las reglas del grupo_*
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄
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
await conn.sendFile(m.chat, imagen2, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 
} catch (e) {
    conn.reply(m.chat, 'Ocurrio un error inesperado.', m);
    }
}

handler.command = /^(menuaudios|menuads|memuaudios|\?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
                                                                                                                                                              
