import MessageType from '@whiskeysockets/baileys';
const handler = async (m, {conn, usedPrefix, command}) => {
  const room = Object.values(conn.game).find((room) => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender));
  if (room == undefined) return conn.sendButton(m.chat, '❮❕❯ » 𝙉𝙤 𝙚𝙨𝙩𝙖𝙨 𝙚𝙣 𝙣𝙞𝙣𝙜𝙪𝙣𝙖 𝙥𝙖𝙧𝙩𝙞𝙙𝙖 𝙙𝙚𝙡 𝙟𝙪𝙚𝙜𝙤.', wm, null, [['𝙄𝙣𝙞𝙘𝙞𝙖𝙧 𝙅𝙪𝙚𝙜𝙤 🎮', `${usedPrefix}ttt partida nueva`]], m);
  delete conn.game[room.id];
  await m.reply('❮✅❯ » 𝙅𝙪𝙚𝙜𝙤 𝙘𝙖𝙣𝙘𝙚𝙡𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤.');
};
handler.command = /^(delttt|deltt|delxo|deltictactoe)$/i;
handler.fail = null;
export default handler;
