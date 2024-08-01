let imagebot = './Menu1.jpg'
let handler = async (m, { conn, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `
╭─────────────────···•⊰ ⋆
│👋🏻 Hola usuario/a
│soy NaufraZapp-MD
╰─────────────────···•⊰ ⋆

╭• •꒰─•⭐·𝙀𝘾𝙊𝙉𝙊𝙈𝙄𝘼 : 𝙍𝙋𝙂۬⭐ٜ･
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

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│•꒰─•🗒️·𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉ٜ۬🗒️･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}estado
└•⌕ *ver estado del bot*
┌• ${usedPrefix}nzgrupos
└•⌕ *ver grupos oficiales*
┌• ${usedPrefix}tipobot
└•⌕ *información del bot*
┌• ${usedPrefix}on / off
└•⌕ *muestra las funciones.*
┌• ${usedPrefix}perfil
└•⌕ *información de tu perfil*

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│•꒰─•🤖·𝙎𝙀𝙍𝘽𝙊𝙏 : 𝙉𝙕ٜ۬🤖･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}serbot
└•⌕ *Registra con código de 8 dígitos*
┌• ${usedPrefix}borrarsesion_
└•⌕ *borra todos los sub bots*
┌• ${usedPrefix}stop
└•⌕ *apagar mi sub bot*
┌• ${usedPrefix}bcbots
└•⌕ *mensaje para todos los subbots*
┌• ${usedPrefix}ds_
└•⌕ *Registra con código de 8 dígitos*
┌• ${usedPrefix}bots
└•⌕ *ver sub bots*
╰• •───• •───• •───•

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│.      •꒰─•🎰·𝙅𝙐𝙀𝙂𝙊𝙎ٜ۬🎰･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}acertijo
└•⌕ *Acertijo.*
┌• ${usedPrefix}tictactoe
└•⌕ *Tictactoe*
┌• ${usedPrefix}delttt
└•⌕ *delttt*

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│.      •꒰─•🌎·𝙈𝙀𝙉𝙐𝙎ٜ۬🌎･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}menu
└•⌕ *Menu principal*
┌• ${usedPrefix}menu18
└•⌕ *Menu para adultos*
┌• ${usedPrefix}menuaudios
└•⌕ *menu audios*

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│•꒰─•🧰·𝙃𝙀𝙍𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎ٜ۬🧰･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}chatgpt
└•⌕ *texto*
┌• ${usedPrefix}chatgptvoz
└•⌕ *texto*
┌• ${usedPrefix}bot
└•⌕ *texto*
┌• ${usedPrefix}delchatgpt
└•⌕ *elimina sesión gpt*
┌• ${usedPrefix}hd
└•⌕ *imagen*
┌• ${usedPrefix}traducir
└•⌕ *mensaje traducido*
┌• ${usedPrefix}toimg
└•⌕ *Responde a sticker.*
┌• ${usedPrefix}tourl
└•⌕ *Guardar sticker.*
┌• ${usedPrefix}sticker
└•⌕ *Imagen o video*

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│「⬇️ִֶָ 𖥔 ࣪˖𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒔ִֶָ 𖥔 ࣪˖⬇️」
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}fb
└•⌕ *enlace*
┌• ${usedPrefix}apk
└•⌕ *nombre*
┌• ${usedPrefix}mediafire
└•⌕ *enlace*
┌• ${usedPrefix}ig
└•⌕ *enlace*
┌• ${usedPrefix}tiktok
└•⌕ *enlace*
┌• ${usedPrefix}twitter
└•⌕ *enlace*
┌• ${usedPrefix}pinterest
└•⌕ *texto*
┌• ${usedPrefix}google
└•⌕ *texto*
┌• ${usedPrefix}mega
└•⌕ *enlace*
┌• ${usedPrefix}gitclone
└•⌕ *enlace*
┌• ${usedPrefix}playdoc2
└•⌕ *enlace • texto*
┌• ${usedPrefix}playdoc
└•⌕ *enlace • texto*
┌• ${usedPrefix}quemusica
└•⌕ *enlace • texto*
┌• ${usedPrefix}play
└•⌕ *enlace • texto*
┌• ${usedPrefix}play2
└•⌕ *enlace • texto*
┌• ${usedPrefix}dlav
└•⌕ *enlace • texto*

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│•꒰─•👥·𝙋𝘼𝙍𝘼 𝙂𝙍𝙐𝙋𝙊𝙎ٜ۬👥･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}admins
└•⌕ *llamar a los admins*
┌• ${usedPrefix}add
└•⌕ *numero +54xxxxxxx*
┌• ${usedPrefix}grupo
└•⌕ *abrir : cerrar*
┌• ${usedPrefix}demote
└•⌕ *quitar admin*
┌• ${usedPrefix}promote
└•⌕ *dar admin*
┌• ${usedPrefix}ban
└•⌕ *@tag*
┌• ${usedPrefix}link
└•⌕ *mostrar enlace*
┌• ${usedPrefix}resetlink
└•⌕ *cambiar link grupal*
┌• ${usedPrefix}tagall
└•⌕ *mensionar a todos*
┌• ${usedPrefix}fantasmas
└•⌕ *ver inactivos*
┌• ${usedPrefix}kickfantasmas
└•⌕ *eliminar inactivos*
┌• ${usedPrefix}hidetag
└•⌕ *mensionar con mensaje*
┌• ${usedPrefix}setwelcome
└•⌕ *texto*
┌• ${usedPrefix}setbye
└•⌕ *texto*
┌• ${usedPrefix}setdesc
└•⌕ *texto*
┌• ${usedPrefix}setfoto
└•⌕ *img*
┌• ${usedPrefix}setname
└•⌕ *texto*
┌• ${usedPrefix}grupoid
└•⌕ *id del grupo*
┌• ${usedPrefix}infogrupo
└•⌕ *información del grupo*
╰• •───• •───• •───•

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│•꒰─•👑·𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊۬👑ٜ･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}backup
└•⌕ *backup dol bot.*
┌• ${usedPrefix}update
└•⌕ *Actualizar bot.*
┌• ${usedPrefix}reporte
└•⌕ *reportar comando*
┌• ${usedPrefix}unbanuser
└•⌕ *Desbanear el usuario.*
┌• ${usedPrefix}banuser
└•⌕ *Banear el usuario.*
┌• ${usedPrefix}banchat
└•⌕ *Banear el chat.*
┌• ${usedPrefix}unbanchat
└•⌕ *Desbanear el chat.*
`
await conn.sendButton(m.chat, str, wm, imagebot, [
['𝗜𝗡𝗦𝗧𝗔𝗟𝗔𝗥 𝗕𝗢𝗧 🤖', '.installbot'],
['𝗘𝗦𝗧𝗔𝗗𝗢 🪐', '#estado'],
['𝗚𝗥𝗨𝗣𝗢𝗦 👥', '/gruposnz']], null, null, fkontak)}
handler.command = /^allmenu|menucompleto|menuall|menutodo$/i
//handler.private = true
handler.register = true
export default handler

/*import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
  //  let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];

 await conn.sendMessage(m.chat, { react: { text: '👑', key: m.key } })


const document = doc[Math.floor(Math.random() * doc.length)];
 const str = `
╭─────────────────···•⊰ ⋆
│👋🏻 Hola ${taguser}
│soy ✖️NaufraZapp-MD✖️
│•────────────────···•⊰
│Fecha: ${date}
│Tiempo activo: ${uptime}
╰─────────────────···•⊰ ⋆

╭•┈┈┈┈┈┈• ─ ─ ─ ─ ─ • ┄ •
│• 🗿 \`𝗥𝗘𝗖𝗨𝗥𝗦𝗢𝗦\` 🗿 •
│
│•╮💎 ᴅɪᴀᴍᴀɴᴛᴇs : *${limit}*
│•┊🪙 ɴᴀᴜғʀᴀᴄᴏɪɴs : *${money}*
│•┊⚡ ᴇxᴘ : *${exp}*
│•┊👑 ʀᴀɴɢᴏ : *${role}*
│•╯👤 ɴɪᴠᴇʟ : *${level}*
╰•┈┈┈┈┈┈• ─ ─ ─ ─ ─ • ┄ •

╭• •꒰─•⭐·𝙀𝘾𝙊𝙉𝙊𝙈𝙄𝘼 : 𝙍𝙋𝙂۬⭐ٜ･
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

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│•꒰─•🗒️·𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉ٜ۬🗒️･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}estado
└•⌕ *ver estado del bot*
┌• ${usedPrefix}nzgrupos
└•⌕ *ver grupos oficiales*
┌• ${usedPrefix}tipobot
└•⌕ *información del bot*
┌• ${usedPrefix}on / off
└•⌕ *muestra las funciones.*
┌• ${usedPrefix}perfil
└•⌕ *información de tu perfil*

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│•꒰─•🤖·𝙎𝙀𝙍𝘽𝙊𝙏 : 𝙉𝙕ٜ۬🤖･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}serbot
└•⌕ *Registra con código de 8 dígitos*
┌• ${usedPrefix}borrarsesion_
└•⌕ *borra todos los sub bots*
┌• ${usedPrefix}stop
└•⌕ *apagar mi sub bot*
┌• ${usedPrefix}bcbots
└•⌕ *mensaje para todos los subbots*
┌• ${usedPrefix}ds_
└•⌕ *Registra con código de 8 dígitos*
┌• ${usedPrefix}bots
└•⌕ *ver sub bots*
╰• •───• •───• •───•

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│.      •꒰─•🎰·𝙅𝙐𝙀𝙂𝙊𝙎ٜ۬🎰･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}acertijo
└•⌕ *Acertijo.*
┌• ${usedPrefix}tictactoe
└•⌕ *Tictactoe*
┌• ${usedPrefix}delttt
└•⌕ *delttt*

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│.      •꒰─•🌎·𝙈𝙀𝙉𝙐𝙎ٜ۬🌎･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}menu
└•⌕ *Menu principal*
┌• ${usedPrefix}menu18
└•⌕ *Menu para adultos*
┌• ${usedPrefix}menuaudios
└•⌕ *menu audios*

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│•꒰─•🧰·𝙃𝙀𝙍𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎ٜ۬🧰･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}chatgpt
└•⌕ *texto*
┌• ${usedPrefix}chatgptvoz
└•⌕ *texto*
┌• ${usedPrefix}bot
└•⌕ *texto*
┌• ${usedPrefix}delchatgpt
└•⌕ *elimina sesión gpt*
┌• ${usedPrefix}hd
└•⌕ *imagen*
┌• ${usedPrefix}traducir
└•⌕ *mensaje traducido*
┌• ${usedPrefix}toimg
└•⌕ *Responde a sticker.*
┌• ${usedPrefix}tourl
└•⌕ *Guardar sticker.*
┌• ${usedPrefix}sticker
└•⌕ *Imagen o video*

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│「⬇️ִֶָ 𖥔 ࣪˖𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒔ִֶָ 𖥔 ࣪˖⬇️」
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}fb
└•⌕ *enlace*
┌• ${usedPrefix}apk
└•⌕ *nombre*
┌• ${usedPrefix}mediafire
└•⌕ *enlace*
┌• ${usedPrefix}ig
└•⌕ *enlace*
┌• ${usedPrefix}tiktok
└•⌕ *enlace*
┌• ${usedPrefix}twitter
└•⌕ *enlace*
┌• ${usedPrefix}pinterest
└•⌕ *texto*
┌• ${usedPrefix}google
└•⌕ *texto*
┌• ${usedPrefix}mega
└•⌕ *enlace*
┌• ${usedPrefix}gitclone
└•⌕ *enlace*
┌• ${usedPrefix}playdoc2
└•⌕ *enlace • texto*
┌• ${usedPrefix}playdoc
└•⌕ *enlace • texto*
┌• ${usedPrefix}quemusica
└•⌕ *enlace • texto*
┌• ${usedPrefix}play
└•⌕ *enlace • texto*
┌• ${usedPrefix}play2
└•⌕ *enlace • texto*
┌• ${usedPrefix}dlav
└•⌕ *enlace • texto*

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│•꒰─•👥·𝙋𝘼𝙍𝘼 𝙂𝙍𝙐𝙋𝙊𝙎ٜ۬👥･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}admins
└•⌕ *llamar a los admins*
┌• ${usedPrefix}add
└•⌕ *numero +54xxxxxxx*
┌• ${usedPrefix}grupo
└•⌕ *abrir : cerrar*
┌• ${usedPrefix}demote
└•⌕ *quitar admin*
┌• ${usedPrefix}promote
└•⌕ *dar admin*
┌• ${usedPrefix}ban
└•⌕ *@tag*
┌• ${usedPrefix}link
└•⌕ *mostrar enlace*
┌• ${usedPrefix}resetlink
└•⌕ *cambiar link grupal*
┌• ${usedPrefix}tagall
└•⌕ *mensionar a todos*
┌• ${usedPrefix}fantasmas
└•⌕ *ver inactivos*
┌• ${usedPrefix}kickfantasmas
└•⌕ *eliminar inactivos*
┌• ${usedPrefix}hidetag
└•⌕ *mensionar con mensaje*
┌• ${usedPrefix}setwelcome
└•⌕ *texto*
┌• ${usedPrefix}setbye
└•⌕ *texto*
┌• ${usedPrefix}setdesc
└•⌕ *texto*
┌• ${usedPrefix}setfoto
└•⌕ *img*
┌• ${usedPrefix}setname
└•⌕ *texto*
┌• ${usedPrefix}grupoid
└•⌕ *id del grupo*
┌• ${usedPrefix}infogrupo
└•⌕ *información del grupo*
╰• •───• •───• •───•

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│•꒰─•👑·𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊۬👑ٜ･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}backup
└•⌕ *backup dol bot.*
┌• ${usedPrefix}update
└•⌕ *Actualizar bot.*
┌• ${usedPrefix}reporte
└•⌕ *reportar comando*
┌• ${usedPrefix}unbanuser
└•⌕ *Desbanear el usuario.*
┌• ${usedPrefix}banuser
└•⌕ *Banear el usuario.*
┌• ${usedPrefix}banchat
└•⌕ *Banear el chat.*
┌• ${usedPrefix}unbanchat
└•⌕ *Desbanear el chat.*
 `.trim();     if (m.isGroup) { 
 // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*Ocurrió Un Error*', m);
  }
};
handler.command = /^(allmenu|menucompleto|menuall)$/i;
handler.register = true
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
*/
