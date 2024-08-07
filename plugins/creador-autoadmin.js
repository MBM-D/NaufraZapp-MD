const handler = async (m, {conn, isAdmin}) => {
  if (m.fromMe) return;
  if (isAdmin) throw '『🪐』𝘼𝙝𝙤𝙧𝙖 𝙚𝙧𝙚𝙨 𝙖𝙙𝙢𝙞𝙣 𝙙𝙚 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤!!!';
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  } catch {
    await m.reply('『❌』𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤.');
  }
};
handler.command = /^(tenerpoder|autoadmin)$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;