import fs from 'fs';
const handler = async (m, {conn, args}) => {
  const group = m.chat;
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
    contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
       title: '『🏷️』𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.',
      body: wm,    
      previewType: 0, thumbnail: imgAll),
 sourceUrl: naufraAll}}});
};     
handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^link(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;
