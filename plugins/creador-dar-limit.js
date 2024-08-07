import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '『🪐』𝙈𝙚𝙣𝙨𝙞𝙤𝙣𝙚 𝙖 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '『🪐』𝙄𝙣𝙜𝙧𝙚𝙨𝙖 𝙡𝙖 𝙘𝙖𝙣𝙩𝙞𝙙𝙖𝙙 𝙙𝙚 𝙙𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨 𝙥𝙖𝙧𝙖 𝙙𝙖𝙧𝙡𝙚 𝙖𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤.';
  if (isNaN(txt)) throw '『🪐』𝙉𝙤 𝙨𝙚 𝙖𝙙𝙢𝙞𝙩𝙚𝙣 𝙨𝙞𝙢𝙗𝙤𝙡𝙤𝙨, 𝙨𝙤𝙡𝙤 𝙣𝙪𝙢𝙚𝙧𝙤𝙨.';
  const dmt = parseInt(txt);
  let limit = dmt;
  const pjk = Math.ceil(dmt * pajak);
  limit += pjk;
  if (limit < 5) throw '『📣』𝙀𝙡 𝙣𝙪𝙢𝙚𝙧𝙤 𝙢𝙞𝙣𝙞𝙢𝙤 𝙥𝙖𝙧𝙖 𝙘𝙤𝙢𝙥𝙖𝙧𝙩𝙞𝙧 𝙚𝙨 𝙙𝙚 5 𝙙𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨.';
  const users = global.db.data.users;
  users[who].limit += dmt;
  m.reply(`『✅』𝙎𝙚 𝙡𝙚 𝙝𝙖 𝙙𝙖𝙙𝙤 𝙖𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙡𝙤𝙨 𝙙𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!!

𝗧𝗢𝗧𝗔𝗟: ${dmt}
`);
};
handler.command = ['añadirdiamantes', 'addd', 'dard', 'dardiamantes'];
handler.rowner = true;
export default handler;
