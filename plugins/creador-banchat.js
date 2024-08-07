const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('✅ 𝙀𝙡 𝙘𝙝𝙖𝙩 𝙛𝙪𝙚 𝙗𝙖𝙣𝙚𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤.');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^banchat$/i;
handler.rowner = true;
export default handler;
