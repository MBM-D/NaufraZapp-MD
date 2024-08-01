import TicTacToe from '../lib/tictactoe.js';
const handler = async (m, {conn, usedPrefix, command, text}) => {
  conn.game = conn.game ? conn.game : {};
  if (Object.values(conn.game).find((room) => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '᥀·࣭࣪̇˖⚔️◗ 𝙏𝙚𝙧𝙢𝙞𝙣𝙖 𝙚𝙡 𝙟𝙪𝙚𝙜𝙤 𝙥𝙧𝙞𝙢𝙚𝙧𝙤 𝙥𝙖𝙧𝙖 𝙨𝙚𝙜𝙪𝙞𝙧 𝙘𝙤𝙣 𝙤𝙩𝙧𝙤.';
  if (!text) throw `❮❕❯ » 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙡𝙖 𝙨𝙖𝙡𝙖.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} sala XD*`;
  let room = Object.values(conn.game).find((room) => room.state === 'WAITING' && (text ? room.name === text : true));
  if (room) {
    await m.reply('❮✅❯ » 𝙉𝙐𝙀𝙑𝙊 𝙅𝙐𝙂𝘼𝘿𝙊𝙍!!!');
    room.o = m.chat;
    room.game.playerO = m.sender;
    room.state = 'PLAYING';
    const arr = room.game.render().map((v) => {
      return {
        X: '✖️',
        O: '⭕',
        1: '1️⃣',
        2: '2️⃣',
        3: '3️⃣',
        4: '4️⃣',
        5: '5️⃣',
        6: '6️⃣',
        7: '7️⃣',
        8: '8️⃣',
        9: '9️⃣',
      }[v];
    });
    const str = `
╭•───────────────• •
│🐦‍🔥   𝗧𝗥𝗘𝗦 𝗘𝗡 𝗥𝗔𝗬𝗔    🐦‍🔥
╰•───────────────• •
1 𝗨𝗦𝗨𝗔𝗥𝗜𝗢: ✖️ = @${room.game.playerX.split('@')[0]}
2 𝗨𝗦𝗨𝗔𝗥𝗜𝗢: ⭕ = @${room.game.playerO.split('@')[0]}
•┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•

        ${arr.slice(0, 3).join('')}
        ${arr.slice(3, 6).join('')}
        ${arr.slice(6).join('')}

𝙏𝙪𝙧𝙣𝙤 𝙙𝙚 @${room.game.currentTurn.split('@')[0]}
`.trim();
    if (room.x !== room.o) await conn.sendMessage(room.x, {text: str, mentions: this.parseMention(str)}, {quoted: m});
    await conn.sendMessage(room.o, {text: str, mentions: conn.parseMention(str)}, {quoted: m});
  } else {
    room = {
      id: 'tictactoe-' + (+new Date),
      x: m.chat,
      o: '',
      game: new TicTacToe(m.sender, 'o'),
      state: 'WAITING'};
    if (text) room.name = text;
    const imgplay = `https://cope-cdnmed.agilecontent.com/resources/jpg/8/9/1590140413198.jpg`;
    conn.reply(m.chat, `❮❌❯ » 𝙀𝙨𝙥𝙚𝙧𝙖𝙣𝙙𝙤 𝙖𝙡 𝙨𝙚𝙜𝙪𝙣𝙙𝙤 𝙟𝙪𝙜𝙖𝙙𝙤𝙧.\n\n• 𝙊𝙋𝘾𝙄𝙊𝙉𝙀𝙎:\n𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙨𝙖𝙡𝙖, 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: *${usedPrefix}delttt*\n\n• 𝙋𝙖𝙧𝙖 𝙪𝙣𝙞𝙧𝙨𝙚 𝙖𝙡 𝙟𝙪𝙚𝙜𝙤, 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: ${usedPrefix + command} ${text}`, m);
    conn.game[room.id] = room;
  }
};
handler.command = /^(tictactoe|ttc|ttt|xo)$/i;
handler.register = true
export default handler;