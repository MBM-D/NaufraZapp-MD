
let handler = async (m, { conn }) => {
  if (global.conn.user.jid === conn.user.jid) {
   await conn.reply(m.chat, '❌ 𝙏𝙞𝙚𝙣𝙚 𝙦𝙪𝙚 𝙞𝙧 𝙙𝙞𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚 𝙖𝙡 𝙣𝙪𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙚𝙣 𝙥𝙧𝙞𝙫𝙖𝙙𝙤.', m);
  } else {
    //Si el número no coincide, se detiene el bot.
    await conn.reply(m.chat, `✅ 𝘽𝙤𝙩 𝙙𝙚𝙩𝙚𝙣𝙞𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!!!`, m);
    conn.ws.close();
  }
};
handler.help = ['stop']
handler.tags = ['bebot']
handler.command = ['stop', 'stopbot', 'stopbebot']
handler.owner = true

export default handler
