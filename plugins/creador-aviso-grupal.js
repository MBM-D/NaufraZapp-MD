const handler = async (m, {conn, text, participants, isAdmin, isOwner, usedPrefix, command}) => {
  const users = participants.map((u) => u.id).filter((v) => v !== conn.user.jid);
  const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map((v) => v[0]);
  const fproducto = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? {remoteJid: '17608914335@s.whatsapp.net'} : {})}, message: {'productMessage': {'product': {'productImage': {'mimetype': 'image/jpeg', 'jpegThumbnail': imagen1}, 'title': `📣 𝐂𝐎𝐌𝐔𝐍𝐈𝐂𝐀𝐃𝐎 𝐎𝐅𝐂 📣`, 'description': wm, 'currencyCode': 'USD', 'priceAmount1000': '1000000000', 'retailerId': 'Ghost', 'productImageCount': 1}, 'businessOwnerJid': `0@s.whatsapp.net`}}};
  if (!m.quoted) throw `『🪐』𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙢𝙖𝙣𝙙𝙖𝙧𝙡𝙚 𝙪𝙣 𝙖𝙫𝙞𝙨𝙤 𝙞𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩𝙚 𝙖 𝙡𝙤𝙨 𝙜𝙧𝙪𝙥𝙤𝙨 𝙦𝙪𝙚 𝙚𝙨𝙩𝙚 𝙚𝙣 𝙚𝙡 𝙗𝙤𝙩.`;
  for (const id of groups) {
    await conn.sendMessage(id, {forward: m.quoted.fakeObj, mentions: (await conn.groupMetadata(`${id}`)).participants.map((v) => v.id)}, {quoted: fproducto});
  }
  m.reply(`『✅』𝙎𝙚 𝙝𝙖 𝙚𝙣𝙫𝙞𝙖𝙙𝙤 𝙚𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙖 *${groups.length}* 𝙂𝙧𝙪𝙥𝙤/𝙨.\n\n• 𝙋𝙪𝙚𝙙𝙚 𝙦𝙪𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙩𝙚𝙣𝙜𝙖 𝙧𝙚𝙩𝙧𝙖𝙨𝙤 𝙤 𝙛𝙖𝙡𝙡𝙤𝙨 𝙚𝙣 𝙤𝙩𝙧𝙤𝙨 𝙜𝙧𝙪𝙥𝙤𝙨 𝙤 𝙦𝙪𝙚 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙖 𝙩𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙜𝙧𝙪𝙥𝙤𝙨 𝙥𝙤𝙨𝙞𝙗𝙡𝙚𝙨.`);
};
handler.help = ['bcgc2'];
handler.tags = ['owner'];
handler.command = /^(avisogrupal)$/i;
handler.owner = true;
export default handler;
