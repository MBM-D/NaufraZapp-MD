import {canLevelUp, xpRange} from '../lib/levelling.js';
import {levelup} from '../lib/canvas.js';

const handler = async (m, {conn}) => {
  const name = conn.getName(m.sender);
  const user = global.db.data.users[m.sender];
  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    const {min, xp, max} = xpRange(user.level, global.multiplier);
    throw `*『✦』Nivel del usuario.*

\`Nombre\`
• *${name}*

\`Nivel\` 
• *${user.level}*

\`XP actual\`
• *${user.exp - min}

\`XP por llegar\`
• *${max - user.exp}*
`.trim();
  }
  const before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;
  if (before !== user.level) {
    const teks = `*『✦』Subiste de nivel, bien echo!!!*`;
    const str = `
*『✦』Subiste de nivel, grandioso!*

Nivel anterior / Nivel actual
*${before}*  /  *${user.level}*
`.trim();
    try {
      const img = await levelup(teks, user.level);
      conn.fakeReply(m.chat, img, str, '5493873687620@s.whatsapp.net', '🍃 𝗡𝗨𝗘𝗩𝗢 𝗡𝗜𝗩𝗘𝗟 🍃', 'status@broadcast')  
      //conn.sendFile(m.chat, img, 'levelup.jpg', str, m);
    } catch (e) {
      m.reply(str);
    }
  }
};

handler.help = ['levelup'];
handler.tags = ['xp'];

handler.command = ['nivel', 'lvl', 'levelup', 'level'];

export default handler;