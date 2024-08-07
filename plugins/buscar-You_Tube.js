import yts from 'yt-search';
import fs from 'fs';

const handler = async (m, {conn, text}) => {
  if (!text) throw '『🪐』𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙗𝙪𝙨𝙘𝙖𝙧 𝙚𝙣 𝙔𝙤𝙪𝙏𝙪𝙗𝙚.';
  const results = await yts(text);
  const tes = results.all;
  const teks = results.all.map((v) => {
    switch (v.type) {
      case 'video': return `
🏷️ » *ɴᴏᴍʙʀᴇ:* _${v.title}_
🌐 » ᴇɴʟᴀᴄᴇ:* _${v.url}_
⏰ » *ᴅᴜʀᴀᴄɪᴏɴ:* $_{v.timestamp}_
📆 » *ᴘᴜʙʟɪᴄᴀᴅᴏ ᴇɴ:* _${v.ago}_
👀 » *ᴠɪsᴛᴀs:* _${v.views}_`;
    }
  }).filter((v) => v).join('\n\n⋄ •───────────────• ⋄\n\n');
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m);
};
handler.help = ['ytsearch *<texto>*'];
handler.tags = ['search'];
handler.command = ['ytsearch', 'yts'];
export default handler;
