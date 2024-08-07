const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `『🪐』𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙫𝙞𝙙𝙚𝙤 𝙥𝙖𝙧𝙖 𝙘𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙧𝙡𝙤 𝙚𝙣 𝙪𝙣 𝙜𝙞𝙛.`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) throw `『❌』𝙀𝙡 𝙛𝙤𝙧𝙢𝙖𝙩𝙤 *${mime}*, 𝙣𝙤 𝙚𝙨 𝙘𝙤𝙢𝙥𝙖𝙩𝙞𝙗𝙡𝙚, 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙫𝙞𝙙𝙚𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`;
  m.reply(global.wait);
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '『🥳』𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚 𝙨𝙪 𝙜𝙞𝙛!!!!'}, {quoted: m});
};
handler.command = ['togifaud'];
export default handler;
