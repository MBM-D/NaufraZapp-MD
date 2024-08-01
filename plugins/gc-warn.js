const handler = async (m, { conn, text, command, usedPrefix }) => {
 // if (m.mentionedJid.includes(conn.user.jid)) return; // Evitar advertir al bot mismo
// if (m.mentionedJid.includes(global.owner)) return;     return m.reply(`El propietario @${conn.getName(owner)} de ©CuriosityBot-MD no puede ser advertido`, m.chat, { mentions: conn.parseMention(`@${conn.getName(owner)}`) });
//  const pp = './storage/warn.jpg';
let number, ownerNumber, aa, who;
if (m.isGroup) { 
who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text; 
} else who = m.chat;
  const user = global.db.data.users[who];
  const usuario = conn.user.jid.split`@`[0] + '@s.whatsapp.net'
  const bot = global.db.data.settings[conn.user.jid] || {};
  const dReason = 'Sin motivo';
  const msgtext = text || dReason 
  const sdms = msgtext.replace(/@\d+-?\d* /g, '');
  const warntext = `• 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙤 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙚 𝙖 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙥𝙖𝙧𝙖 𝙙𝙖𝙧𝙡𝙚 𝙪𝙣𝙖 𝙖𝙙𝙫𝙚𝙧𝙩𝙚𝙣𝙘𝙞𝙖.`;
  if (!who) {
return m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext) });
  }
  
for (let i = 0; i < global.owner.length; i++) {
ownerNumber = global.owner[i][0];
if (usuario.replace(/@s\.whatsapp\.net$/, '') === ownerNumber) {
aa = ownerNumber + '@s.whatsapp.net'
await conn.reply(m.chat, `…`, m, { mentions: [aa] })
return
}}
  
  user.warn += 1;
  await m.reply(`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} 𝙍𝙚𝙘𝙞𝙗𝙞𝙤 𝙪𝙣 𝙖𝙙𝙫𝙚𝙧𝙩𝙚𝙣𝙘𝙞𝙖 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.\nMotivo: ${sdms}\n*ADVERTENCIAS ${user.warn}/4*`, null, { mentions: [who] },
  );
  if (user.warn >= 4) {
    user.warn = 0;
    await m.reply(`𝙃𝙤𝙡𝙖 *@${who.split`@`[0]}*, 𝙨𝙪𝙥𝙚𝙧𝙖𝙨𝙩𝙚 𝙡𝙖𝙨 4 𝙖𝙙𝙫𝙚𝙧𝙩𝙚𝙣𝙘𝙞𝙖𝙨, 𝙨𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.`, null, { mentions: [who] },
    );
    await conn.groupParticipantsUpdate(m.chat, [who], 'remove');
  }
  return !1;
};

handler.command = /^(advertir|advertencia|warn|warning)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
