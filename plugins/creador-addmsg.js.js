const handler = async (m, {command, usedPrefix, text}) => {
  const M = m.constructor;
  const which = command.replace(/agregar/i, '');
  if (!m.quoted) throw '『🪐』𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙫𝙞𝙙𝙚𝙤, 𝙞𝙢𝙖𝙜𝙚𝙣, 𝙨𝙩𝙞𝙘𝙠𝙚𝙧, 𝙖𝙪𝙙𝙞𝙤, 𝙤 𝙣𝙤𝙩𝙖 𝙙𝙚 𝙫𝙤𝙯 𝙮 𝙪𝙣 𝙣𝙤𝙢𝙗𝙧𝙚 𝙖𝙨𝙞𝙜𝙣𝙖𝙙𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.';
  if (!text) throw `『🪐』𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: *${usedPrefix}list${which}* 𝙥𝙖𝙧𝙖 𝙫𝙚𝙧 𝙡𝙖 𝙡𝙞𝙨𝙩𝙖.`;
  const msgs = global.db.data.msgs;
  if (text in msgs) throw `『🧶』𝙎𝙚 𝙝𝙖 𝙖𝙜𝙧𝙚𝙜𝙖𝙙𝙤 '${text}' 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤 𝙖 𝙡𝙤𝙨 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨.`;
  msgs[text] = M.toObject(await m.getQuotedObj());
  m.reply(`『✅』𝙎𝙚 𝙝𝙖 𝙖𝙜𝙧𝙚𝙜𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤 𝙚𝙡 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤!!!`);
};
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map((v) => 'add' + v + ' <text>');
handler.tags = ['database'];
handler.command = /^agregar(vn|msg|video|audio|img|sticker)$/;
handler.rowner = true;
export default handler;
