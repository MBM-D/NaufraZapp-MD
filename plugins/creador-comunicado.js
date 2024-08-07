import fs from 'fs';
const handler = async (m, {conn, text} ) => {
  const delay = (time) => new Promise((res) => setTimeout(res, time));
  const chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map((v) => v[0]);
  if (!text) throw '『🪐』𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙢𝙖𝙣𝙙𝙖𝙧 𝙪𝙣 𝙖𝙫𝙞𝙨𝙤 𝙖 𝙡𝙤𝙨 𝙘𝙝𝙖𝙩𝙨 𝙥𝙧𝙞𝙫𝙖𝙙𝙤𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩.';
  const cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m;
  const teks = text ? text : cc.text;
  for (const i of chats) {
    await delay(500);
    conn.relayMessage(i,
        {liveLocationMessage: {
          degreesLatitude: 35.685506276233525,
          degreesLongitude: 139.75270667105852,
          accuracyInMeters: 0,
          degreesClockwiseFromMagneticNorth: 2,
          caption: '📣 𝐂𝐎𝐌𝐔𝐍𝐈𝐂𝐀𝐃𝐎 𝐏𝐑𝐈𝐕𝐀𝐃𝐎 📣\n\n' + teks + '\n\nMensaje oficial de los owners.',
          sequenceNumber: 2,
          timeOffset: 3,
          contextInfo: m,
        }}, {}).catch((_) => _);
  }
  m.reply(`『✅』𝙈𝙚𝙣𝙨𝙖𝙟𝙚 𝙚𝙣𝙫𝙞𝙖𝙙𝙤 𝙖 *${chats.length}* 𝘾𝙝𝙖𝙩𝙨 𝙥𝙧𝙞𝙫𝙖𝙙𝙤𝙨.\n\n• 𝙀𝙨𝙩𝙤 𝙥𝙪𝙚𝙙𝙚 𝙣𝙤 𝙢𝙖𝙣𝙙𝙖𝙧 𝙖 𝙩𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙘𝙝𝙖𝙩𝙨 𝙥𝙧𝙞𝙫𝙖𝙙𝙤𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩...`);
};
handler.help = ['broadcastchats', 'bcchats'].map((v) => v + ' <teks>');
handler.tags = ['owner'];
handler.command = /^(avisoprivado?|bcc(hats?)?)$/i;
handler.rowner = true;
export default handler;
