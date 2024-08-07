const handler = async (m, {conn, isOwner}) => {
  const chats = Object.entries(global.db.data.chats).filter((chat) => chat[1].isBanned);
  const users = Object.entries(global.db.data.users).filter((user) => user[1].banned);
  const caption = `
📣 ¡¡¡𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗕𝗔𝗡𝗘𝗔𝗗𝗢𝗦!!! 📣
» Total : ${users.length} ${users ? '\n» ' + users.map(([jid], i) => `
´ ${isOwner ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n') : '• '}


📣 ¡¡¡𝗖𝗛𝗔𝗧𝗦 𝗕𝗔𝗡𝗘𝗔𝗗𝗢𝗦!!!📣
» Total : ${chats.length} ${chats ? '\n» ' + chats.map(([jid], i) => `
• ${isOwner ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n') : '• '}
`.trim();
  m.reply(caption, null, {mentions: conn.parseMention(caption)});
};
handler.command = /^banlist(ned)?|ban(ned)?list|daftarban(ned)?$/i;
handler.rowner = true;
export default handler;
