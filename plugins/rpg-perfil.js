import {createHash} from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, participants, isPrems}) => {
  let pp = 'https://i.postimg.cc/6Q5Y24vR/IMG-20240415-WA0001.jpg';
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  if (!(who in global.db.data.users)) throw `*『✦』El usuario mensionado no esta registrado.*`;
  try {
    pp = await conn.profilePictureUrl(who);
  } catch (e) {
  } finally {
    const {name, limit, lastclaim, registered, regTime, age, premiumTime} = global.db.data.users[who];
    const username = conn.getName(who);
    const prem = global.prems.includes(who.split `@` [0]);
    const sn = createHash('md5').update(who).digest('hex');
    const str = `*『✦* \`PERFIL / PROFILE\` *✦』*

*NOMBRE:*
• @${who.replace(/@.+/, '')}

${registered ? '*EDAD:*\n• ' + age + ' años' : ''}

*CODIGO DE VERIFICACIÓN:*
• ${sn}

*NUNERO:*
• ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}

*ENLACE DIRECTO:*
• wa.me/${who.split`@`[0]}
`;
    conn.sendMessage(m.chat, {image: {url: pp}, caption: str}, {quoted: m});
  }
};
handler.help = ['profile [@user]'];
handler.tags = ['xp'];
handler.command = /^perfil|profile?$/i;
handler.register = true
export default handler;
