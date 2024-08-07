import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '『🪐』𝙈𝙚𝙣𝙨𝙞𝙤𝙣𝙚 𝙖 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙥𝙖𝙧𝙖 𝙙𝙖𝙧𝙡𝙚 𝙚𝙭𝙥.';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '『🪐』𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙡𝙖 𝙘𝙖𝙣𝙩𝙞𝙙𝙖𝙙 𝙙𝙚 𝙀𝙭𝙥 𝙥𝙖𝙧𝙖 𝙙𝙖𝙧𝙡𝙚.';
  if (isNaN(txt)) throw '『🪐』𝙉𝙤 𝙨𝙚 𝙖𝙙𝙢𝙞𝙩𝙚 𝙨𝙞𝙢𝙗𝙤𝙡𝙤𝙨, 𝙨𝙤𝙡𝙤 𝙣𝙪𝙢𝙚𝙧𝙤𝙨.';
  const xp = parseInt(txt);
  let exp = xp;
  const pjk = Math.ceil(xp * pajak);
  exp += pjk;
  if (exp < 1000) throw '『❌』𝙀𝙡 𝙣𝙪𝙢𝙚𝙧𝙤 𝙢𝙞𝙣𝙞𝙢𝙤 𝙥𝙖𝙧𝙖 𝙘𝙤𝙢𝙥𝙖𝙧𝙩𝙞𝙧 𝙚𝙨 𝙙𝙚 1000';
  const users = global.db.data.users;
  users[who].exp += xp;
  m.reply(`『✅』𝗔𝗚𝗥𝗘𝗚𝗔𝗗𝗢 𝗖𝗢𝗡 𝗘𝗫𝗜𝗧𝗢!!!

𝗧𝗢𝗧𝗔𝗟: ${xp}`);
};
handler.command = ['añadirxp', 'addexp'];
handler.register = true;
export default handler;
