const handler = async (m, {conn, text}) => {
  if (!text) throw '*『👤』Mensione o etiquete a un usuario.*';
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*『👤』Mensione o etiquete a un usuario.*';
  const users = global.db.data.users;
  users[who].banned = false;
  conn.reply(m.chat, `*『✅』Se ha desbaneado el usuario con éxito.*`, m);
};
handler.help = ['unbanuser'];
handler.tags = ['owner'];
handler.command = /^unbanuser$/i;
handler.rowner = true;
export default handler;