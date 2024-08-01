const handler = async (m, {conn, isOwner}) => {
  const adv = Object.entries(global.db.data.users).filter((user) => user[1].warn);
  const warns = global.db.data.users.warn;
  const user = global.db.data.users;
  const imagewarn = './storage/warn.jpg';
  const caption = `• 𝙉𝙤 𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙗𝙡𝙚 𝙖𝙪𝙣.`;
  await conn.sendMessage(m.chat, {text: caption}, {quoted: m}, {mentions: await conn.parseMention(caption)});
};
handler.command = /^(listwarn|listadvertidos)$/i;
handler.group = true;
//handler.admin = true;
export default handler;
